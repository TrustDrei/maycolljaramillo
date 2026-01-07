import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { SITE } from '../../config/site';

export const prerender = false;

const getEnv = (key: string) => {
  // Prefer Vite/Astro env first (works in dev and SSR), fallback to process.env
  return import.meta.env?.[key] ?? process.env[key];
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });

const escape = (value: unknown) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const resendApiKey = getEnv('RESEND_API_KEY');
const resendFrom = getEnv('RESEND_FROM');
const contactTo = getEnv('CONTACT_TO') ?? SITE.email;
const accessKey = getEnv('CONTACT_ACCESS_KEY');
const isDev = import.meta.env?.DEV ?? process.env.NODE_ENV !== 'production';

const validateEnv = () => {
  if (!resendApiKey) return 'RESEND_API_KEY is not set';
  if (!resendFrom) return 'RESEND_FROM is not set (e.g., contact@yourdomain.com)';
  if (!contactTo) return 'CONTACT_TO is not set';
  return null;
};

export const POST: APIRoute = async ({ request }) => {
  const envError = validateEnv();
  if (envError) {
    // In dev, don't hard fail; respond with a clear message
    if (isDev) return json({ ok: false, message: envError }, 400);
    return json({ ok: false, message: envError }, 500);
  }

  const formData = await request.formData();

  if ((formData.get('bot-field') as string)?.trim()) {
    return json({ ok: true });
  }

  if (accessKey && formData.get('access_key') !== accessKey) {
    return json({ ok: false, message: 'Unauthorized' }, 403);
  }

  const captcha = formData.get('captcha');
  if (captcha && captcha !== '57') {
    return json({ ok: false, message: 'Captcha failed' }, 400);
  }

  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const project = (formData.get('project') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();
  const locale = (formData.get('locale') as string)?.trim() || 'es';

  if (!name || !email || !message) {
    return json({ ok: false, message: 'Missing required fields' }, 400);
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
      reply_to: email,
      subject,
      text,
      html
    });

    if (error) {
      console.error('Resend error', error);
      return json({ ok: false, message: error.message || 'Email send failed' }, 500);
    }

    return json({ ok: true });
  } catch (err) {
    console.error('Contact send failed', err);
    const message = err instanceof Error ? err.message : 'Unexpected error';
    return json({ ok: false, message }, 500);
  }
};
