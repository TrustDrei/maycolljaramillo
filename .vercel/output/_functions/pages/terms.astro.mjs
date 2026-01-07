import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$BaseLayout } from '../chunks/BaseLayout_B_wPsOB1.mjs';
import { P as PERSON, S as SITE } from '../chunks/site_Bh6d07jz.mjs';
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  const structuredData = [
    breadcrumbJsonLd([{ name: "T\xE9rminos", path: "/terms" }])
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "es", "title": `T\xE9rminos y condiciones | ${PERSON.shortName}`, "description": "T\xE9rminos simples sobre uso del contenido y contacto.", "canonicalPath": "/terms", "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-4xl px-4 py-12 md:px-6"> <p class="text-xs uppercase tracking-[0.2em] text-accent">Términos</p> <h1 class="mt-2 text-3xl font-semibold text-foreground">Términos y condiciones</h1> <div class="mt-4 space-y-3 text-muted"> <p>El contenido de este sitio es informativo y refleja experiencia personal. No se ofrecen garantías expresas o implícitas.</p> <p>Las referencias a clientes pueden ser confidenciales; no se comparten datos sin autorización previa.</p> <p>El código y assets son propiedad de ${PERSON.fullName}, salvo que se indique lo contrario.</p> <p>
Para cualquier aclaración legal o de uso de contenido, envía un correo a
${" "} <a class="text-foreground hover:text-accent"${addAttribute(`mailto:${SITE.email}`, "href")}>${SITE.email}</a>.
</p> </div> </section> ` })}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/terms.astro", void 0);

const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
