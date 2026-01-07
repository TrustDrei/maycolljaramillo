import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_BcwZgUJm.mjs';
import { b as breadcrumbJsonLd, $ as $$BaseLayout } from '../chunks/BaseLayout_B_wPsOB1.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_Bt4MYeOl.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).filter((post) => post.data.lang === "es").sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  const tags = Array.from(new Set(posts.flatMap((post) => post.data.tags))).sort();
  const structuredData = [
    breadcrumbJsonLd([{ name: "Blog", path: "/blog" }])
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "es", "title": "Blog t\xE9cnico | SEO, accesibilidad, automatizaci\xF3n", "description": "Art\xEDculos t\xE9cnicos sobre SEO, accesibilidad, performance y medici\xF3n/automatizaci\xF3n con criterios reproducibles.", "canonicalPath": "/blog", "alternates": [{ lang: "en", path: "/en/blog" }], "structuredData": structuredData }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-shell mx-auto max-w-6xl px-4 py-12 md:px-6"> <p class="text-xs uppercase tracking-[0.2em] text-accent">Blog</p> <h1 class="mt-2 text-3xl font-semibold text-foreground">Guías técnicas y patrones aplicables</h1> <p class="mt-3 max-w-3xl text-muted">
Procesos repetibles para equipos que necesitan performance, accesibilidad, SEO técnico y medición sin perder trazabilidad.
</p> <p class="mt-3 text-sm text-foreground/85">Guía = pasos aplicables. Checklist = validación rápida. Patrón = caso real sintetizado.</p> <div class="mt-4 flex flex-wrap gap-2"> ${tags.map((tag) => renderTemplate`<span class="rounded-full border border-border/70 bg-panel px-3 py-1 text-xs text-foreground/80">${tag}</span>`)} </div> <div class="section-divider"></div> <div class="grid gap-4 md:grid-cols-3"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </div> </section> ` })}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
