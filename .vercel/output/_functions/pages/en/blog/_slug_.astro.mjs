import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import { g as getCollection } from '../../../chunks/_astro_content_BcwZgUJm.mjs';
import { b as breadcrumbJsonLd, a as articleJsonLd, $ as $$BaseLayout } from '../../../chunks/BaseLayout_B_wPsOB1.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://maycolljaramillo.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  const tr = post.data.translations ?? {};
  const title = tr.title ?? post.data.title;
  const description = tr.seo?.description ?? post.data.seo.description;
  const formattedDate = new Date(post.data.date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const structuredData = [
    breadcrumbJsonLd([
      { name: "Blog", path: "/en/blog" },
      { name: title, path: `/en/blog/${post.slug}` }
    ]),
    articleJsonLd({
      ...post,
      data: {
        ...post.data,
        title,
        seo: {
          ...post.data.seo,
          title: tr.seo?.title ?? post.data.seo.title,
          description
        }
      }
    })
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "en", "title": `${title} | Blog`, "description": description, "canonicalPath": `/en/blog/${post.slug}`, "alternates": [{ lang: "es", path: `/blog/${post.slug}` }], "structuredData": structuredData }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="mx-auto max-w-4xl px-4 py-12 md:px-6"> <p class="text-xs uppercase tracking-[0.2em] text-accent">Blog</p> <h1 class="mt-2 text-3xl font-semibold text-foreground">${title}</h1> <p class="mt-2 text-muted">${formattedDate}</p> <div class="mt-3 flex flex-wrap gap-2"> ${(tr.tags ?? post.data.tags).map((tag) => renderTemplate`<span class="rounded-full border border-border/70 bg-panel px-3 py-1 text-xs text-foreground/80">${tag}</span>`)} </div> ${post.data.hero && renderTemplate`<figure class="mt-6 overflow-hidden rounded-2xl border border-border/70 bg-panel-strong"${addAttribute(`aspect-ratio: ${post.data.hero.width}/${post.data.hero.height};`, "style")}> <img${addAttribute(post.data.hero.src, "src")}${addAttribute(post.data.hero.alt, "alt")}${addAttribute(post.data.hero.width, "width")}${addAttribute(post.data.hero.height, "height")} loading="eager" decoding="async" class="h-full w-full object-cover"> </figure>`} <div class="mt-6 content"> ${tr.content ? renderTemplate`<div>${unescapeHTML(tr.content)}</div>` : renderTemplate`${renderComponent($$result2, "Content", Content, {})}`} </div> <div class="mt-10 grid gap-4 md:grid-cols-2"> <a class="card flex items-center justify-between gap-3 p-5 transition hover:-translate-y-[2px] hover:border-accent" href="/en/services"> <div> <p class="text-[11px] uppercase tracking-[0.16em] text-accent">Services</p> <p class="mt-1 text-foreground font-semibold">See technical SEO and performance services</p> </div> <span aria-hidden="true" class="text-accent">→</span> </a> <a class="card flex items-center justify-between gap-3 p-5 transition hover:-translate-y-[2px] hover:border-accent" href="/en/work"> <div> <p class="text-[11px] uppercase tracking-[0.16em] text-accent">Cases</p> <p class="mt-1 text-foreground font-semibold">Explore case studies and results</p> </div> <span aria-hidden="true" class="text-accent">→</span> </a> </div> </article> ` })}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/en/blog/[slug].astro", void 0);

const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/en/blog/[slug].astro";
const $$url = "/en/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
