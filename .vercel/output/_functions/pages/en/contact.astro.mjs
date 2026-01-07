import { c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$BaseLayout, c as $$Icon } from '../../chunks/BaseLayout_B_wPsOB1.mjs';
import { S as SITE, C as CONTACT_CTA, P as PERSON } from '../../chunks/site_Bh6d07jz.mjs';
import { c as contactScript } from '../../chunks/contact-form_CbUDCbIK.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const structuredData = [
    breadcrumbJsonLd([
      { name: "Home", path: "/en" },
      { name: "Contact", path: "/en/contact" }
    ])
  ];
  const formEndpoint = "/api/contact";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "en", "title": `Contact | ${PERSON.shortName}`, "description": "Contact via WhatsApp or email for systems engineering, automation, technical SEO, accessibility, and enterprise platforms.", "canonicalPath": "/en/contact", "alternates": [{ lang: "es", path: "/es/contact" }], "structuredData": structuredData }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="mx-auto max-w-4xl px-4 py-12 md:px-6"> <p class="text-xs uppercase tracking-[0.2em] text-accent">Contact</p> <h1 class="mt-2 text-3xl font-semibold text-foreground">Let’s review your stack and technical criteria</h1> <p class="mt-3 max-w-3xl text-muted">\nI reply within one business day. A short call helps capture context, current metrics, and priorities before proposing scope.\n</p> <div class="mt-6 flex flex-wrap gap-3"> <a class="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-surface shadow-soft transition hover:bg-accent-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"', "> ", '\nWhatsApp\n</a> <a class="inline-flex items-center justify-center rounded-full border border-border/70 bg-panel px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"', `>
Email me
</a> </div> <div class="mt-8 card p-6"> <p class="text-xs uppercase tracking-[0.12em] text-accent">Form</p> <p class="mt-2 text-muted">Prefer to leave details? I'll reply in under one business day.</p> <form class="mt-4 space-y-4" name="contact-en" method="POST"`, ' data-form-handler="contact" data-form-lang="en"', '> <p class="visually-hidden"> <label>Leave this empty if you are human <input name="bot-field"></label> </p> <input type="hidden" name="locale" value="en"> ', ` <div class="grid gap-4 sm:grid-cols-2"> <label class="flex flex-col gap-2 text-sm text-foreground">
Name
<input class="field rounded-lg px-3 py-2 text-foreground transition" type="text" name="name" required> </label> <label class="flex flex-col gap-2 text-sm text-foreground">
Email
<input class="field rounded-lg px-3 py-2 text-foreground transition" type="email" name="email" required> </label> </div> <label class="flex flex-col gap-2 text-sm text-foreground">
Project type
<select class="field rounded-lg px-3 py-2 text-foreground transition" name="project" required> <option value="">Select</option> <option value="shopify">Shopify / eCommerce</option> <option value="wordpress">WordPress / Headless</option> <option value="seo">Technical SEO / Accessibility</option> <option value="automation">Automation / Integrations</option> <option value="other">Other</option> </select> </label> <label class="flex flex-col gap-2 text-sm text-foreground">
Details and objectives
<textarea class="field min-h-[140px] rounded-lg px-3 py-2 text-foreground transition" name="message" required></textarea> </label> <div class="rounded-lg border border-border/70 bg-panel p-3"> <p class="text-xs uppercase tracking-[0.12em] text-muted">Verification</p> <div class="mt-2 flex flex-wrap items-center gap-3"> <svg role="img" aria-label="Captcha: number 57" width="96" height="48" viewBox="0 0 96 48" class="rounded-md border border-border/70 bg-panel-strong"> <rect x="0" y="0" width="96" height="48" fill="url(#grad-en)"></rect> <text x="16" y="32" fill="currentColor" font-size="28" font-weight="700">57</text> <defs> <linearGradient id="grad-en" x1="0" x2="1" y1="0" y2="1"> <stop offset="0%" stop-color="#58a6ff" stop-opacity="0.16"></stop> <stop offset="100%" stop-color="#58a6ff" stop-opacity="0.06"></stop> </linearGradient> </defs> </svg> <p class="text-sm text-muted">Type the number to confirm you're human.</p> </div> <label class="mt-3 block text-sm text-foreground"> <span class="sr-only">Captcha</span> <input class="field rounded-lg px-3 py-2 text-foreground transition" type="text" name="captcha" inputmode="numeric" pattern="57" required aria-label="Captcha: type 57"> </label> </div> <button type="submit" class="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-surface shadow-soft transition hover:bg-accent-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface">
Send message
</button> <p class="mt-2 text-sm text-muted" data-form-status aria-live="polite"></p> </form> </div> <div class="mt-8 grid gap-4 sm:grid-cols-2"> <div class="card p-5"> <p class="text-xs uppercase tracking-[0.12em] text-muted">Email</p> <a class="text-foreground transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"`, "> ", ' </a> </div> <div class="card p-5"> <p class="text-xs uppercase tracking-[0.12em] text-muted">LinkedIn</p> <a class="text-foreground transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"', ' target="_blank" rel="noopener"> ', ' </a> </div> <div class="card p-5"> <p class="text-xs uppercase tracking-[0.12em] text-muted">GitHub</p> <a class="text-foreground transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"', ' target="_blank" rel="noopener"> ', ' </a> </div> <div class="card p-5"> <p class="text-xs uppercase tracking-[0.12em] text-muted">Phone</p> <a class="text-foreground transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"', "> ", ' </a> </div> </div> <div class="mt-8 card p-5"> <p class="text-xs uppercase tracking-[0.12em] text-accent">Availability</p> <p class="mt-2 text-muted">\n4-12 week projects or ongoing advisory. Time zone: ', ' (flexible for Spain and US hours).\n</p> </div> </section> <script type="module"', "></script> "])), maybeRenderHead(), addAttribute(CONTACT_CTA.primary.href, "href"), renderComponent($$result2, "Icon", $$Icon, { "name": "whatsapp", "label": "WhatsApp" }), addAttribute(`mailto:${SITE.email}?subject=Project%20%2F%20Consulting`, "href"), addAttribute(formEndpoint, "action"), addAttribute(formEndpoint, "data-form-endpoint"), null, addAttribute(`mailto:${SITE.email}`, "href"), SITE.email, addAttribute(SITE.social.linkedin, "href"), SITE.social.linkedin, addAttribute(SITE.social.github, "href"), SITE.social.github, addAttribute(`tel:${SITE.phone.replace(/\s+/g, "")}`, "href"), SITE.phone, SITE.location, addAttribute(contactScript, "src")) })}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/en/contact.astro", void 0);
const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/en/contact.astro";
const $$url = "/en/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
