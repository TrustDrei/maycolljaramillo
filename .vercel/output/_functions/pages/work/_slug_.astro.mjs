import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_BcwZgUJm.mjs';
import { b as breadcrumbJsonLd, $ as $$BaseLayout } from '../../chunks/BaseLayout_B_wPsOB1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://maycolljaramillo.com");
async function getStaticPaths() {
  const studies = await getCollection("case-studies");
  return studies.map((study) => ({
    params: { slug: study.slug },
    props: { study }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { study } = Astro2.props;
  const { Content } = await study.render();
  const structuredData = [
    breadcrumbJsonLd([
      { name: "Work", path: "/work" },
      { name: study.data.title, path: `/work/${study.slug}` }
    ])
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "es", "title": `${study.data.title} | Caso de estudio`, "description": study.data.seo.description, "canonicalPath": `/work/${study.slug}`, "alternates": [{ lang: "en", path: `/en/work/${study.slug}` }], "structuredData": structuredData }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-5xl px-4 py-12 md:px-6"> <p class="text-xs uppercase tracking-[0.2em] text-accent">Caso de estudio</p> <h1 class="mt-2 text-3xl font-semibold text-foreground">${study.data.title}</h1> <p class="mt-3 text-muted">${study.data.seo.description}</p> <div class="mt-6 grid gap-4 sm:grid-cols-2"> <div class="card p-4"> <p class="text-xs uppercase tracking-[0.12em] text-muted">Industria</p> <p class="text-foreground">${study.data.industry}</p> </div> <div class="card p-4"> <p class="text-xs uppercase tracking-[0.12em] text-muted">Rol</p> <p class="text-foreground">${study.data.role}</p> </div> <div class="card p-4 sm:col-span-2"> <p class="text-xs uppercase tracking-[0.12em] text-muted">Stack</p> <div class="mt-2 flex flex-wrap gap-2"> ${study.data.stack.map((item) => renderTemplate`<span class="rounded-full border border-border/70 bg-panel px-3 py-1 text-xs text-foreground/85">${item}</span>`)} </div> </div> </div> <div class="mt-8 grid gap-4 md:grid-cols-2"> <article class="card p-5"> <h2 class="text-lg font-semibold text-foreground">Situación</h2> <p class="mt-2 text-muted">${study.data.situation}</p> </article> <article class="card p-5"> <h2 class="text-lg font-semibold text-foreground">Tarea</h2> <p class="mt-2 text-muted">${study.data.task}</p> </article> <article class="card p-5"> <h2 class="text-lg font-semibold text-foreground">Acción</h2> <p class="mt-2 text-muted">${study.data.action}</p> </article> <article class="card p-5"> <h2 class="text-lg font-semibold text-foreground">Resultado</h2> <ul class="mt-2 space-y-2 text-muted"> ${study.data.results.map((result) => renderTemplate`<li class="flex items-start gap-2"> <span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span> <span>${result}</span> </li>`)} </ul> </article> </div> <div class="mt-10"> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </section> ` })}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/work/[slug].astro", void 0);

const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/work/[slug].astro";
const $$url = "/work/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
