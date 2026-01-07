import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_BcwZgUJm.mjs';
import { b as breadcrumbJsonLd, $ as $$BaseLayout } from '../../chunks/BaseLayout_B_wPsOB1.mjs';
import { $ as $$CaseStudyCard } from '../../chunks/CaseStudyCard_C-FW6LcJ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const caseStudies = (await getCollection("case-studies")).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
  const structuredData = [
    breadcrumbJsonLd([{ name: "Work", path: "/en/work" }])
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "en", "title": "Work | STAR and verifiable delivery", "description": "Technical cases focused on performance, SEO, accessibility, and automation. STAR structure: situation, task, action, result.", "canonicalPath": "/en/work", "alternates": [{ lang: "es", path: "/work" }], "structuredData": structuredData }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-shell mx-auto max-w-6xl px-4 py-12 md:px-6"> <p class="text-xs uppercase tracking-[0.2em] text-accent">Work</p> <h1 class="mt-2 text-3xl font-semibold text-foreground">Technical cases (STAR)</h1> <p class="mt-3 max-w-3xl text-muted">
Selection of projects focused on performance, technical SEO, accessibility, and automation. Detailed results are shared publicly or on request when confidential.
</p> <div class="section-divider"></div> <div class="mt-4 grid gap-4 md:grid-cols-2"> ${caseStudies.map((study) => renderTemplate`${renderComponent($$result2, "CaseStudyCard", $$CaseStudyCard, { "study": study, "lang": "en" })}`)} </div> </section> ` })}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/en/work.astro", void 0);

const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/en/work.astro";
const $$url = "/en/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
