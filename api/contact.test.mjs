// Comprobación mínima del endpoint de contacto: rate limit, validación y
// saneo de cabeceras. Sin frameworks — `node api/contact.test.mjs`.
import assert from 'node:assert/strict';

process.env.RESEND_API_KEY = 'test';
process.env.RESEND_FROM = 'test@example.com';
process.env.CONTACT_TO = 'to@example.com';

// Resend se sustituye por un doble: la prueba no debe enviar correo real.
const sent = [];
const { register } = await import('node:module');
register(
  `data:text/javascript,
   export function resolve(spec, ctx, next) {
     if (spec === 'resend') return { url: 'data:text/javascript,${encodeURIComponent(
       'export class Resend { constructor(){} emails = { send: async (p) => { globalThis.__sent.push(p); return { error: null }; } } }'
     )}', shortCircuit: true };
     return next(spec, ctx);
   }`,
  import.meta.url
);
globalThis.__sent = sent;

const handler = (await import('./contact.ts')).default;

const mkRes = () => {
  const res = { statusCode: 0, body: null, headers: {} };
  res.status = (c) => ((res.statusCode = c), res);
  res.json = (b) => ((res.body = b), res);
  res.setHeader = (k, v) => (res.headers[k] = v);
  return res;
};
const post = async (body, ip = '1.2.3.4') => {
  const res = mkRes();
  await handler({ method: 'POST', body, headers: { 'x-forwarded-for': ip }, socket: {} }, res);
  return res;
};
const valid = { name: 'Ana', email: 'ana@example.com', message: 'Hola', locale: 'es' };

// Método no permitido
const getRes = mkRes();
await handler({ method: 'GET', body: {}, headers: {}, socket: {} }, getRes);
assert.equal(getRes.statusCode, 405);

// Email inválido
assert.equal((await post({ ...valid, email: 'no-es-email' }, 'ip-a')).statusCode, 400);

// Campos obligatorios
assert.equal((await post({ name: 'Ana' }, 'ip-b')).statusCode, 400);

// Longitud máxima
assert.equal((await post({ ...valid, message: 'x'.repeat(5001) }, 'ip-c')).statusCode, 400);

// Honeypot: responde 200 sin enviar nada
const before = sent.length;
const hp = await post({ ...valid, 'bot-field': 'soy un bot' }, 'ip-d');
assert.equal(hp.statusCode, 200);
assert.equal(sent.length, before, 'el honeypot no debe enviar correo');

// Rate limit: 3 pasan, el 4º corta
const ip = 'ip-rate';
for (let i = 0; i < 3; i++) assert.equal((await post(valid, ip)).statusCode, 200, `envío ${i + 1}`);
const blocked = await post(valid, ip);
assert.equal(blocked.statusCode, 429);
assert.ok(blocked.headers['Retry-After'], 'debe indicar Retry-After');

// Otra IP no queda afectada por el límite ajeno
assert.equal((await post(valid, 'ip-otra')).statusCode, 200);

// Inyección de cabecera SMTP vía el nombre
sent.length = 0;
await post({ ...valid, name: 'Ana\r\nBcc: victima@example.com' }, 'ip-crlf');
assert.ok(!/[\r\n]/.test(sent[0].subject), 'el asunto no puede contener saltos de línea');

console.log('ok — todas las comprobaciones pasan');
