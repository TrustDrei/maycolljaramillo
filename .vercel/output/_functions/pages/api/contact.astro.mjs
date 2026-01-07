import { Resend } from 'resend';
import { S as SITE } from '../../chunks/site_Bh6d07jz.mjs';
export { renderers } from '../../renderers.mjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "PUBLIC_CONTACT_ACCESS_KEY": "", "PUBLIC_CONTACT_ENDPOINT": "", "SITE": "https://maycolljaramillo.com", "SSR": true};
const prerender = false;
const getEnv = (key) => {
  return Object.assign(__vite_import_meta_env__, { RESEND_API_KEY: "re_S9MAFKjq_LZKcHbQ6Lp2VGMFcaJY8hau3", RESEND_FROM: "onboarding@resend.dev", CONTACT_TO: "maycolljaramillo01@gmail.com", CONTACT_ACCESS_KEY: "", NODE_ENV: process.env.NODE_ENV, OS: process.env.OS })?.[key] ?? process.env[key];
};
const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "Content-Type": "application/json" }
});
const escape = (value) => String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const resendApiKey = getEnv("RESEND_API_KEY");
const resendFrom = getEnv("RESEND_FROM");
const contactTo = getEnv("CONTACT_TO") ?? SITE.email;
const accessKey = getEnv("CONTACT_ACCESS_KEY");
const isDev = Object.assign(__vite_import_meta_env__, { RESEND_API_KEY: "re_S9MAFKjq_LZKcHbQ6Lp2VGMFcaJY8hau3", RESEND_FROM: "onboarding@resend.dev", CONTACT_TO: "maycolljaramillo01@gmail.com", CONTACT_ACCESS_KEY: "", NODE_ENV: process.env.NODE_ENV, OS: process.env.OS })?.DEV ?? process.env.NODE_ENV !== "production";
const validateEnv = () => {
  if (!resendApiKey) return "RESEND_API_KEY is not set";
  if (!resendFrom) return "RESEND_FROM is not set (e.g., contact@yourdomain.com)";
  if (!contactTo) return "CONTACT_TO is not set";
  return null;
};
const POST = async ({ request }) => {
  const envError = validateEnv();
  if (envError) {
    if (isDev) return json({ ok: false, message: envError }, 400);
    return json({ ok: false, message: envError }, 500);
  }
  const formData = await request.formData();
  if (formData.get("bot-field")?.trim()) {
    return json({ ok: true });
  }
  if (accessKey && formData.get("access_key") !== accessKey) {
    return json({ ok: false, message: "Unauthorized" }, 403);
  }
  const captcha = formData.get("captcha");
  if (captcha && captcha !== "57") {
    return json({ ok: false, message: "Captcha failed" }, 400);
  }
  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const project = formData.get("project")?.trim();
  const message = formData.get("message")?.trim();
  const locale = formData.get("locale")?.trim() || "es";
  if (!name || !email || !message) {
    return json({ ok: false, message: "Missing required fields" }, 400);
  }
  const subject = `Contacto (${locale}) - ${name}`;
  const text = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    project ? `Proyecto: ${project}` : "",
    `Idioma: ${locale}`,
    "",
    "Mensaje:",
    message
  ].filter(Boolean).join("\n");
  const html = `
    <div style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.5;">
      <p><strong>Nombre:</strong> ${escape(name)}</p>
      <p><strong>Email:</strong> ${escape(email)}</p>
      ${project ? `<p><strong>Proyecto:</strong> ${escape(project)}</p>` : ""}
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
      console.error("Resend error", error);
      return json({ ok: false, message: error.message || "Email send failed" }, 500);
    }
    return json({ ok: true });
  } catch (err) {
    console.error("Contact send failed", err);
    const message2 = err instanceof Error ? err.message : "Unexpected error";
    return json({ ok: false, message: message2 }, 500);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
