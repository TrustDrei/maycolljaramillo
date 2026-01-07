import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$BaseLayout } from '../chunks/BaseLayout_B_wPsOB1.mjs';
import { S as SITE, P as PERSON } from '../chunks/site_Bh6d07jz.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const structuredData = [
    breadcrumbJsonLd([{ name: "Privacidad", path: "/privacy" }])
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "es", "title": `Aviso de privacidad | ${PERSON.shortName}`, "description": "Aviso de privacidad simple: solo se recopilan los datos que env\xEDas voluntariamente por email.", "canonicalPath": "/privacy", "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-4xl px-4 py-12 md:px-6"> <p class="text-xs uppercase tracking-[0.2em] text-accent">Privacidad</p> <h1 class="mt-2 text-3xl font-semibold text-foreground">Aviso de privacidad</h1> <div class="mt-4 space-y-3 text-muted"> <p>No uso trackers adicionales ni cookies fuera de la analítica básica configurada según proyecto.</p> <p>Solo recopilo los datos que envíes voluntariamente por email o durante una llamada. No comparto información con terceros.</p> <p>Si necesitas que elimine datos o correos previos, escríbeme y lo hago sin preguntas.</p> <p>Contacto: <a class="text-foreground hover:text-accent"${addAttribute(`mailto:${SITE.email}`, "href")}>${SITE.email}</a></p> </div> </section> ` })}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/privacy.astro", void 0);

const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
