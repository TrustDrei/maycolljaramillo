import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
const FALLBACK_CONTACT_TO = 'maycolljaramillo01@gmail.com';
const escape = (value: unknown) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const getEnv = (key: string) => process.env[key] ?? '';

const parseBody = (req: VercelRequest) => {
  const body = req.body;
  if (!body) return {};

  if (typeof body === 'string') {
    try {
      return JSON.parse(body);
    } catch {
      try {
        return Object.fromEntries(new URLSearchParams(body));
      } catch {
        return {};
      }
    }
  }

  if (Buffer.isBuffer(body)) {
    const text = body.toString('utf8');
    try {
      return JSON.parse(text);
    } catch {
      try {
        return Object.fromEntries(new URLSearchParams(text));
      } catch {
        return {};
      }
    }
  }

  return body as Record<string, unknown>;
};

const resendApiKey = getEnv('RESEND_API_KEY');
const resendFrom = getEnv('RESEND_FROM');
const contactTo = getEnv('CONTACT_TO') || FALLBACK_CONTACT_TO;
const accessKey = getEnv('CONTACT_ACCESS_KEY');

const LIMITS = { name: 120, email: 254, project: 60, message: 5000, locale: 5 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const RATE_MAX = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000;
// ponytail: ventana en memoria, por instancia. Se reinicia en cold start y no
// se comparte entre lambdas, así que el techo real es RATE_MAX * nº instancias.
// Frena el abuso trivial; si hace falta un límite duro, mover a Vercel KV/Upstash.
const hits = new Map<string, number[]>();

const clientIp = (req: VercelRequest) => {
  const fwd = req.headers['x-forwarded-for'];
  const raw = Array.isArray(fwd) ? fwd[0] : fwd;
  return raw?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'unknown';
};

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // Poda perezosa: evita que el Map crezca sin límite en instancias longevas.
  if (hits.size > 5000) {
    for (const [key, stamps] of hits) {
      if (stamps.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, message: 'Method not allowed' });
    return;
  }

  if (!resendApiKey || !resendFrom || !contactTo) {
    res.status(500).json({ ok: false, message: 'Missing email configuration' });
    return;
  }

  const body = parseBody(req);

  const honeypot = (body?.['bot-field'] as string)?.toString?.().trim?.() ?? '';
  if (honeypot) {
    res.status(200).json({ ok: true });
    return;
  }

  if (accessKey && body?.['access_key'] !== accessKey) {
    res.status(403).json({ ok: false, message: 'Unauthorized' });
    return;
  }

  // Tras el honeypot para no gastar cuota en bots evidentes, y antes de Resend.
  if (isRateLimited(clientIp(req))) {
    res.setHeader('Retry-After', String(RATE_WINDOW_MS / 1000));
    res.status(429).json({ ok: false, message: 'Too many requests' });
    return;
  }

  const field = (key: string) => (body?.[key] as string)?.toString?.().trim?.() ?? '';
  const name = field('name');
  const email = field('email');
  const project = field('project');
  const message = field('message');
  const locale = field('locale') || 'es';

  if (!name || !email || !message) {
    res.status(400).json({ ok: false, message: 'Missing required fields' });
    return;
  }

  if (!EMAIL_RE.test(email)) {
    res.status(400).json({ ok: false, message: 'Invalid email' });
    return;
  }

  // Tope de longitud: sin esto, un POST puede empujar megabytes al correo.
  const tooLong = Object.entries({ name, email, project, message, locale }).find(
    ([key, value]) => value.length > LIMITS[key as keyof typeof LIMITS]
  );
  if (tooLong) {
    res.status(400).json({ ok: false, message: `Field too long: ${tooLong[0]}` });
    return;
  }

  // El asunto va a una cabecera SMTP: sin filtrar CR/LF se puede inyectar
  // cabeceras extra (Bcc, Reply-To) desde el campo nombre.
  const safeName = name.replace(/[\r\n]+/g, ' ');
  const safeLocale = locale.replace(/[^a-z-]/gi, '');

  const subject = `Contacto (${safeLocale}) - ${safeName}`;
  const text = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    project ? `Proyecto: ${project}` : '',
    `Idioma: ${locale}`,
    '',
    'Mensaje:',
    message
  ]
    .filter(Boolean)
    .join('\n');

  const html = `
    <div style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.5;">
      <p><strong>Nombre:</strong> ${escape(name)}</p>
      <p><strong>Email:</strong> ${escape(email)}</p>
      ${project ? `<p><strong>Proyecto:</strong> ${escape(project)}</p>` : ''}
      <p><strong>Idioma:</strong> ${escape(locale)}</p>
      <p><strong>Mensaje:</strong></p>
      <p style="white-space: pre-wrap;">${escape(message)}</p>
    </div>
  `;

  try {
    const resend = new Resend(resendApiKey);
    const { error } = await resend.emails.send({
      from: resendFrom,
      to: contactTo,
      replyTo: email,
      subject,
      text,
      html
    });

    if (error) {
      console.error('Resend error', error);
      res.status(500).json({ ok: false, message: error.message || 'Email send failed' });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact send failed', err);
    const message = err instanceof Error ? err.message : 'Unexpected error';
    res.status(500).json({ ok: false, message });
  }
}
