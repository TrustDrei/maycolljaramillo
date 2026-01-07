import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_BcwZgUJm.mjs';
import { b as breadcrumbJsonLd, $ as $$BaseLayout } from '../../chunks/BaseLayout_B_wPsOB1.mjs';
import { $ as $$PostCard } from '../../chunks/PostCard_Bt4MYeOl.mjs';
export { renderers } from '../../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
  const tags = Array.from(new Set(posts.flatMap((post) => post.data.translations?.tags ?? post.data.tags))).sort();
  const structuredData = [breadcrumbJsonLd([{ name: "Blog", path: "/en/blog" }])];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "en", "title": "Technical blog | SEO, accessibility, automation", "description": "Technical articles on SEO, accessibility, performance, and measurement/automation with reproducible criteria.", "canonicalPath": "/en/blog", "alternates": [{ lang: "es", path: "/blog" }], "structuredData": structuredData }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-shell mx-auto max-w-6xl px-4 py-12 md:px-6"> <p class="text-xs uppercase tracking-[0.2em] text-accent">Blog</p> <h1 class="mt-2 text-3xl font-semibold text-foreground">Technical guides and applicable patterns</h1> <p class="mt-3 max-w-3xl text-muted">
Repeatable processes for teams that need performance, accessibility, technical SEO, and measurement without losing traceability.
</p> <p class="mt-3 text-sm text-foreground/85">Guide = actionable steps. Checklist = quick validation. Pattern = condensed real case.</p> <div class="mt-4 flex flex-wrap gap-2"> ${tags.map((tag) => renderTemplate`<span class="rounded-full border border-border/70 bg-panel px-3 py-1 text-xs text-foreground/80">${tag}</span>`)} </div> <div class="section-divider"></div> <div class="grid gap-4 md:grid-cols-3"> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post, "lang": "en" })}`)} </div> </section> ` })}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/en/blog/index.astro", void 0);

const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/en/blog/index.astro";
const $$url = "/en/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
