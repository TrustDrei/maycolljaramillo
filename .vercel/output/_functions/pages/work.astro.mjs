import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_BcwZgUJm.mjs';
import { b as breadcrumbJsonLd, $ as $$BaseLayout } from '../chunks/BaseLayout_B_wPsOB1.mjs';
import { $ as $$CaseStudyCard } from '../chunks/CaseStudyCard_C-FW6LcJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const caseStudies = (await getCollection("case-studies")).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
  const structuredData = [
    breadcrumbJsonLd([{ name: "Work", path: "/work" }])
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "es", "title": "Casos t\xE9cnicos | STAR y entrega verificable", "description": "Casos t\xE9cnicos enfocados en performance, SEO, accesibilidad y automatizaci\xF3n. Estructura STAR: situaci\xF3n, tarea, acci\xF3n, resultado.", "canonicalPath": "/work", "alternates": [{ lang: "en", path: "/en/work" }], "structuredData": structuredData }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-shell mx-auto max-w-6xl px-4 py-12 md:px-6"> <p class="text-xs uppercase tracking-[0.2em] text-accent">Work</p> <h1 class="mt-2 text-3xl font-semibold text-foreground">Casos técnicos (STAR)</h1> <p class="mt-3 max-w-3xl text-muted">
Selección de proyectos con foco en performance, SEO técnico, accesibilidad y automatización. Resultados detallados disponibles bajo solicitud cuando son confidenciales.
</p> <div class="section-divider"></div> <div class="mt-4 grid gap-4 md:grid-cols-2"> ${caseStudies.map((study) => renderTemplate`${renderComponent($$result2, "CaseStudyCard", $$CaseStudyCard, { "study": study })}`)} </div> </section> ` })}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/work/index.astro", void 0);

const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/work/index.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
