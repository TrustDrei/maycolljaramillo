import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
const FALLBACK_CONTACT_TO = 'maycolljaramillo01@gmail.com';
//
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

  if (body?.['captcha'] && body['captcha'] !== '57') {
    res.status(400).json({ ok: false, message: 'Captcha failed' });
    return;
  }

  const name = (body?.['name'] as string)?.toString?.().trim?.();
  const email = (body?.['email'] as string)?.toString?.().trim?.();
  const project = (body?.['project'] as string)?.toString?.().trim?.();
  const message = (body?.['message'] as string)?.toString?.().trim?.();
  const locale = (body?.['locale'] as string)?.toString?.().trim?.() || 'es';

  if (!name || !email || !message) {
    res.status(400).json({ ok: false, message: 'Missing required fields' });
    return;
  }

  const subject = `Contacto (${locale}) - ${name}`;
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
