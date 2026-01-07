import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DNhOidXD.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://maycolljaramillo.com");
const $$PostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  const displayLang = Astro2.props.lang ?? post.data.lang ?? "es";
  const translations = displayLang === "en" ? post.data.translations : void 0;
  const title = translations?.title ?? post.data.title;
  const excerptRaw = translations?.excerpt ?? post.data.excerpt;
  const tags = translations?.tags ?? post.data.tags;
  const formattedDate = new Date(post.data.date).toLocaleDateString(displayLang, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  const excerpt = excerptRaw.length > 140 ? `${excerptRaw.slice(0, 140).trim()}...` : excerptRaw;
  const tagLabel = (() => {
    const lower = tags.map((t) => t.toLowerCase());
    if (lower.includes("checklist")) return displayLang === "es" ? "Checklist" : "Checklist";
    if (lower.includes("cwv") || lower.includes("performance")) return displayLang === "es" ? "Guia" : "Guide";
    if (lower.includes("seo") || lower.includes("accesibilidad")) return displayLang === "es" ? "Caso/Patron" : "Pattern";
    return displayLang === "es" ? "Articulo" : "Article";
  })();
  const href = displayLang === "en" ? `/en/blog/${post.slug}` : `/blog/${post.slug}`;
  return renderTemplate`${maybeRenderHead()}<article class="card flex h-full flex-col gap-3 p-5 lift-in"> ${post.data.hero && renderTemplate`<div class="overflow-hidden rounded-xl border border-border/70 bg-panel-strong"${addAttribute(`aspect-ratio: ${post.data.hero.width}/${post.data.hero.height};`, "style")}> <img${addAttribute(post.data.hero.src, "src")}${addAttribute(post.data.hero.alt, "alt")}${addAttribute(post.data.hero.width, "width")}${addAttribute(post.data.hero.height, "height")} loading="lazy" decoding="async" class="h-full w-full object-cover"> </div>`} <div class="space-y-2"> <span class="inline-flex items-center gap-2 rounded-full border border-border/60 bg-panel px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accent">${tagLabel}</span> <h3 class="text-lg font-semibold leading-snug text-foreground">${title}</h3> </div> <div class="flex flex-wrap gap-1.5"> ${tags.slice(0, 3).map((tag) => renderTemplate`<span class="rounded-full border border-border/60 bg-panel px-2.5 py-1 text-[11px] text-foreground/85">${tag}</span>`)} </div> <p class="text-sm leading-relaxed text-foreground/80">${excerpt}</p> <div class="mt-auto flex items-center justify-between gap-3 pt-2"> <span class="text-xs text-muted">${formattedDate}</span> <a class="inline-flex items-center gap-2 rounded-full border border-border/70 bg-panel px-4 py-2 text-sm font-semibold text-foreground transition hover:-translate-y-[1px] hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(href, "href")}> ${displayLang === "es" ? "Leer" : "Read"} <span aria-hidden="true">-&gt;</span> </a> </div> </article>`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/components/PostCard.astro", void 0);

export { $$PostCard as $ };
