import { b as createAstro, c as createComponent, d as addAttribute, a as renderTemplate, u as unescapeHTML, m as maybeRenderHead, r as renderComponent, h as renderScript, i as renderHead, j as renderSlot } from './astro/server_DNhOidXD.mjs';
import 'piccolore';
import 'clsx';
import { S as SITE, a as SITE_ORIGIN, P as PERSON, C as CONTACT_CTA } from './site_Bh6d07jz.mjs';
import { siWebflow, siPrisma, siMongodb, siExpress, siHtml5, siShopify, siGithub, siWhatsapp, siFacebook, siGoogleanalytics, siGooglechrome, siOpenaccess, siGoogle, siWordpress, siAccenture, siFirebase, siMysql, siPostgresql, siPhp, siJavascript, siNodedotjs, siTailwindcss, siAstro, siReact } from 'simple-icons';
/* empty css                          */

const defaultOgImage = "/og-default.png";
const absoluteUrl = (path) => new URL(path, SITE_ORIGIN).toString();
const personJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.author,
  jobTitle: SITE.role,
  email: SITE.email,
  telephone: SITE.phone,
  url: SITE_ORIGIN,
  address: SITE.location,
  sameAs: [SITE.social.linkedin, SITE.social.github],
  knowsAbout: [
    "Technical SEO",
    "Web Accessibility",
    "Shopify Liquid",
    "WordPress",
    "React",
    "Astro",
    "Tailwind CSS",
    "GHL",
    "WhatsApp Business API",
    "AEM",
    "CRO"
  ]
});
const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.title,
  url: SITE_ORIGIN
});
const profilePageJsonLd = (params) => {
  const person = personJsonLd();
  const { ["@context"]: _context, ...personData } = person;
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: params.title,
    description: params.description,
    url: absoluteUrl(params.path),
    about: personData
  };
};
const breadcrumbJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path)
  }))
});
const articleJsonLd = (post) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.data.title,
  description: post.data.excerpt,
  image: absoluteUrl(post.data.hero?.src ?? defaultOgImage),
  datePublished: post.data.date,
  dateModified: post.data.updated ?? post.data.date,
  url: absoluteUrl(`/blog/${post.slug}`),
  author: personJsonLd(),
  inLanguage: post.data.lang ?? "es"
});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("https://maycolljaramillo.com");
const $$Seo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Seo;
  const {
    title,
    description,
    canonical,
    lang = "es",
    ogImage = defaultOgImage,
    noindex = false,
    alternates = [],
    structuredData = []
  } = Astro2.props;
  const ogUrl = ogImage.startsWith("http") ? ogImage : new URL(ogImage, SITE_ORIGIN).toString();
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.png"><link rel="icon" type="image/png" href="/images/logo.png"><link rel="apple-touch-icon" href="/images/logo.png"><link rel="canonical"${addAttribute(canonical, "href")}><meta name="robots"${addAttribute(noindex ? "noindex, nofollow" : "index, follow", "content")}>${alternates.map((link) => renderTemplate`<link rel="alternate"${addAttribute(link.hrefLang, "hreflang")}${addAttribute(link.href, "href")}>`)}<meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:type" content="website"><meta property="og:image"${addAttribute(ogUrl, "content")}><meta property="og:site_name"${addAttribute(SITE.title, "content")}><meta property="og:locale"${addAttribute(lang === "es" ? "es_ES" : "en_US", "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogUrl, "content")}><meta name="theme-color" content="#0f1116">${structuredData.map((entry) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(entry))))}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/components/Seo.astro", void 0);

const NAV_LINKS = {
  es: [
    { href: "/es", label: "Inicio" },
    { href: "/es/services", label: "Servicios" },
    { href: "/work", label: "Casos" },
    { href: "/blog", label: "Blog" },
    { href: "/es/contact", label: "Contacto" }
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/services", label: "Services" },
    { href: "/en/work", label: "Work" },
    { href: "/en/blog", label: "Blog" },
    { href: "/en/contact", label: "Contact" }
  ]
};

const $$Astro$5 = createAstro("https://maycolljaramillo.com");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Icon;
  const ICONS = {
    react: siReact,
    astro: siAstro,
    tailwind: siTailwindcss,
    node: siNodedotjs,
    javascript: siJavascript,
    php: siPhp,
    postgres: siPostgresql,
    mysql: siMysql,
    firebase: siFirebase,
    aem: siAccenture,
    shopify: siShopify,
    wordpress: siWordpress,
    seo: siGoogle,
    accessibility: siOpenaccess,
    cwv: siGooglechrome,
    ga: siGoogleanalytics,
    meta: siFacebook,
    whatsapp: siWhatsapp,
    github: siGithub,
    liquid: siShopify,
    html: siHtml5,
    express: siExpress,
    mongodb: siMongodb,
    prisma: siPrisma,
    webflow: siWebflow
  };
  const { name, label } = Astro2.props;
  const icon = ICONS[name];
  const title = label ?? icon.title;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(title, "aria-label")} role="img" viewBox="0 0 24 24" class="h-4 w-4 text-current" fill="currentColor"> <path${addAttribute(icon.path, "d")}></path> </svg>`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/components/Icon.astro", void 0);

const $$Astro$4 = createAstro("https://maycolljaramillo.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = Astro2.props.lang ?? "es";
  const links = NAV_LINKS[lang];
  const secondaryLinks = [
    { href: "/privacy", label: lang === "es" ? "Privacidad" : "Privacy" },
    { href: "/terms", label: lang === "es" ? "T\xE9rminos" : "Terms" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="mt-16 border-t border-border/70 bg-panel px-4 py-14 text-sm text-muted"> <div class="page-width space-y-12"> <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"> <div class="flex items-center gap-3"> <div class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-panel-strong"> <img src="/images/logo-128.png"${addAttribute(PERSON.shortName, "alt")} width="128" height="128" loading="lazy" decoding="async" class="h-full w-full object-contain"> </div> <div> <p class="text-lg font-semibold text-foreground">${PERSON.shortName}</p> <p class="text-foreground/70 text-sm"> ${lang === "es" ? "SEO tecnico, accesibilidad y automatizacion" : "Technical SEO, accessibility, automation"} </p> </div> </div> <div class="flex flex-wrap gap-3"> <a class="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-semibold text-surface shadow-soft transition hover:-translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"${addAttribute(CONTACT_CTA.primary.href, "href")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "whatsapp", "label": "WhatsApp" })} ${lang === "es" ? "Hablar ahora" : "Chat now"} </a> <a class="inline-flex items-center gap-2 rounded-full border border-border/70 bg-panel px-4 py-2 font-semibold text-foreground transition hover:-translate-y-[1px] hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(`mailto:${SITE.email}`, "href")}> ${lang === "es" ? "Correo" : "Email"} </a> <a class="inline-flex items-center gap-2 rounded-full border border-border/70 bg-panel px-4 py-2 font-semibold text-foreground transition hover:-translate-y-[1px] hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(SITE.social.github, "href")} target="_blank" rel="noopener"> ${renderComponent($$result, "Icon", $$Icon, { "name": "github", "label": "GitHub" })}
GitHub
</a> <a class="inline-flex items-center gap-2 rounded-full border border-border/70 bg-panel px-4 py-2 font-semibold text-foreground transition hover:-translate-y-[1px] hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(SITE.social.linkedin, "href")} target="_blank" rel="noopener">
LinkedIn
</a> </div> </div> <div class="grid gap-10 md:grid-cols-4"> <div> <p class="text-[11px] uppercase tracking-[0.18em] text-accent">${lang === "es" ? "Mapa" : "Site"}</p> <ul class="mt-3 space-y-2"> ${links.map((item) => renderTemplate`<li> <a class="inline-flex items-center gap-2 rounded-md px-1 py-1 text-foreground/80 transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(item.href, "href")}> ${item.label} </a> </li>`)} </ul> </div> <div> <p class="text-[11px] uppercase tracking-[0.18em] text-accent">${lang === "es" ? "Contacto" : "Contact"}</p> <ul class="mt-3 space-y-2 text-foreground/80"> <li> <a class="inline-flex items-center gap-2 rounded-md px-1 py-1 transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(`mailto:${SITE.email}`, "href")}> ${SITE.email} </a> </li> <li> <a class="inline-flex items-center gap-2 rounded-md px-1 py-1 transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(`tel:${SITE.phone.replace(/\s+/g, "")}`, "href")}> ${SITE.phone} </a> </li> <li> <span class="rounded-md px-1 py-1 text-foreground/70"> ${lang === "es" ? "Managua (UTC-6)" : "Managua (UTC-6)"} </span> </li> </ul> </div> <div> <p class="text-[11px] uppercase tracking-[0.18em] text-accent">${lang === "es" ? "Legal" : "Legal"}</p> <ul class="mt-3 space-y-2"> ${secondaryLinks.map((item) => renderTemplate`<li> <a class="inline-flex items-center gap-2 rounded-md px-1 py-1 text-foreground/80 transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(item.href, "href")}> ${item.label} </a> </li>`)} </ul> </div> <div> <p class="text-[11px] uppercase tracking-[0.18em] text-accent"> ${lang === "es" ? "Disponibilidad" : "Availability"} </p> <ul class="mt-3 space-y-2 text-foreground/80"> <li>${lang === "es" ? "Respuesta <24h habiles" : "<24h response (business)"}</li> <li>${lang === "es" ? "Proyectos LATAM / UE / US" : "Projects LATAM / EU / US"}</li> <li>${lang === "es" ? "SEO tecnico, performance, accesibilidad" : "Technical SEO, performance, accessibility"}</li> </ul> </div> </div> <div class="flex flex-col gap-2 text-xs text-muted/85 md:flex-row md:items-center md:justify-between"> <p>© ${(/* @__PURE__ */ new Date()).getFullYear()} ${PERSON.fullName}</p> <p> ${lang === "es" ? "Hecho con Astro + Tailwind \xB7 criterios CWV, SEO, accesibilidad" : "Built with Astro + Tailwind \xB7 CWV, SEO, accessibility"} </p> </div> </div> </footer>`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://maycolljaramillo.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const lang = Astro2.props.lang ?? "es";
  const links = NAV_LINKS[lang];
  const homeHref = lang === "es" ? "/es" : "/en";
  const contactCta = CONTACT_CTA.primary.label;
  const homeLabel = lang === "es" ? "Volver al inicio" : "Back to home";
  const navLabel = lang === "es" ? "Navegaci\xF3n principal" : "Primary navigation";
  const mobileLabel = lang === "es" ? "Men\xFA m\xF3vil" : "Mobile menu";
  const themeLabel = lang === "es" ? "Cambiar tema" : "Toggle theme";
  const currentPath = Astro2.url.pathname;
  const isActive = (href) => currentPath === href || href !== "/" && currentPath.startsWith(href);
  const langOptions = [
    { code: "es", label: "ES", href: "/es", flag: "\u{1F1EA}\u{1F1F8}" },
    { code: "en", label: "EN", href: "/en", flag: "\u{1F1FA}\u{1F1F8}" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 border-b border-border/50 bg-surface/85 backdrop-blur"> <div class="page-width flex items-center justify-between gap-3 px-4 py-3 md:px-0"> <a class="group flex items-center gap-3 rounded-full border border-border/60 bg-panel px-3 py-2 shadow-soft transition hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(homeHref, "href")}${addAttribute(homeLabel, "aria-label")}> <span class="relative grid h-10 w-10 place-items-center rounded-full bg-panel/80 p-1 shadow-soft transition group-hover:scale-[1.03]"> <img src="/images/logo-128.png"${addAttribute(`${PERSON.shortName} logo`, "alt")} width="128" height="128" class="h-full w-full rounded-full object-contain" loading="eager" decoding="async"> </span> <span class="hidden flex-col text-left leading-tight sm:inline-flex"> <span class="block text-sm font-semibold text-foreground">${PERSON.shortName}</span> </span> </a> <nav class="hidden items-center gap-4 text-sm font-semibold lg:flex"${addAttribute(navLabel, "aria-label")}> ${links.map((item) => {
    const active = isActive(item.href);
    return renderTemplate`<a${addAttribute(`inline-flex items-center px-1 py-1 transition decoration-transparent ${active ? "text-foreground border-b-2 border-accent" : "text-foreground/70 hover:text-foreground"} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`, "class")}${addAttribute(item.href, "href")}${addAttribute(active ? "page" : void 0, "aria-current")}> ${item.label} </a>`;
  })} </nav> <div class="hidden items-center gap-3 lg:flex"> <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-panel text-foreground shadow-soft transition hover:border-accent hover:-rotate-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" data-theme-toggle${addAttribute(themeLabel, "aria-label")} aria-pressed="false"> <span class="theme-icon-sun" aria-hidden="true"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <circle cx="12" cy="12" r="4" stroke-width="1.6"></circle> <path stroke-width="1.6" stroke-linecap="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.5-7.5-1.4 1.4M7.9 16.1 6.5 17.5m0-12 1.4 1.4m9.2 9.2 1.4 1.4"></path> </svg> </span> <span class="theme-icon-moon hidden" aria-hidden="true"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path> </svg> </span> </button> <details class="relative"> <summary class="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/70 bg-panel px-2 py-1.5 text-sm font-semibold text-foreground transition hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"> <span aria-hidden="true" class="text-lg leading-none">${lang === "es" ? "\u{1F1EA}\u{1F1F8}" : "\u{1F1FA}\u{1F1F8}"}</span> <span class="sr-only">${lang === "es" ? "Espa\xF1ol" : "English"}</span> </summary> <div class="absolute right-0 mt-2 w-24 rounded-md border border-border/70 bg-panel shadow-soft"> ${langOptions.map((option) => renderTemplate`<a class="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground/85 transition decoration-transparent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(option.href, "href")}${addAttribute(option.code, "hreflang")}> <span aria-hidden="true" class="text-lg leading-none">${option.flag}</span> <span class="sr-only">${option.label}</span> </a>`)} </div> </details> <a class="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-surface shadow-soft transition hover:bg-accent-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"${addAttribute(CONTACT_CTA.primary.href, "href")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "whatsapp", "label": "WhatsApp" })} ${contactCta} </a> </div> <div class="flex items-center gap-2 lg:hidden"> <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-panel text-foreground transition hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" data-theme-toggle${addAttribute(themeLabel, "aria-label")} aria-pressed="false"> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364-1.414 1.414M7.05 16.95l-1.414 1.414m0-12.728L7.05 7.05m9.9 9.9 1.414 1.414"></path> <circle cx="12" cy="12" r="4" stroke-width="1.5"></circle> </svg> </button> <button type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-panel text-foreground transition hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" aria-expanded="false" aria-controls="mobile-nav" data-nav-toggle> <span class="sr-only">Toggle navigation</span> <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <div id="mobile-nav" class="hidden border-t border-border/60 bg-surface/98 backdrop-blur-lg lg:hidden"${addAttribute(mobileLabel, "aria-label")}> <div class="page-width flex flex-col gap-3 px-4 py-4 text-sm"> <div class="flex items-center gap-3 border border-border/60 bg-panel px-3 py-2"> <img src="/images/person-128.png"${addAttribute(`${PERSON.shortName}`, "alt")} width="128" height="128" class="h-10 w-10 rounded-full object-cover shadow-soft" loading="lazy" decoding="async"> <div class="leading-tight"> <p class="text-sm font-semibold text-foreground">${PERSON.shortName}</p> </div> </div> ${links.map((item) => renderTemplate`<a class="border border-border/60 bg-panel px-3 py-2 text-foreground/90 transition decoration-transparent hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(item.href, "href")}> ${item.label} </a>`)} <details class="border border-border/70 bg-panel px-3 py-2"> <summary class="flex cursor-pointer items-center justify-between text-sm font-semibold text-foreground"> <span aria-hidden="true" class="text-lg leading-none">${lang === "es" ? "\u{1F1EA}\u{1F1F8}" : "\u{1F1FA}\u{1F1F8}"}</span> <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor"><path d="M4 6l4 4 4-4" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path></svg> <span class="sr-only">${lang === "es" ? "Idioma actual Espa\xF1ol" : "Current language English"}</span> </summary> <div class="mt-2 space-y-1"> ${langOptions.map((option) => renderTemplate`<a class="flex items-center gap-2 rounded-md px-3 py-2 text-foreground/85 transition decoration-transparent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(option.href, "href")}${addAttribute(option.code, "hreflang")}> <span aria-hidden="true" class="text-lg leading-none">${option.flag}</span> <span class="sr-only">${option.label}</span> </a>`)} </div> </details> <a class="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-surface shadow-soft transition hover:bg-accent-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"${addAttribute(CONTACT_CTA.primary.href, "href")}> ${contactCta} </a> </div> </div> ${renderScript($$result, "C:/Users/Mayco/Desktop/maycolljaramillo/src/components/Header.astro?astro&type=script&index=0&lang.ts")} </header>`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro("https://maycolljaramillo.com");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/Mayco/Desktop/maycolljaramillo/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro$1 = createAstro("https://maycolljaramillo.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/Mayco/Desktop/maycolljaramillo/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro = createAstro("https://maycolljaramillo.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    lang = "es",
    canonicalPath = Astro2.url.pathname,
    ogImage,
    noindex = false,
    structuredData = [],
    alternates = []
  } = Astro2.props;
  const canonical = canonicalPath.startsWith("http") ? canonicalPath : new URL(canonicalPath, SITE_ORIGIN).toString();
  const alternateLinks = alternates.map((alt) => ({
    hrefLang: alt.lang,
    href: alt.path.startsWith("http") ? alt.path : new URL(alt.path, SITE_ORIGIN).toString()
  }));
  const defaultStructuredData = [
    personJsonLd(),
    websiteJsonLd(),
    profilePageJsonLd({ title, description, path: canonicalPath })
  ];
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head>${renderComponent($$result, "Seo", $$Seo, { "title": title, "description": description, "canonical": canonical, "lang": lang, "ogImage": ogImage, "noindex": noindex, "alternates": alternateLinks, "structuredData": [...defaultStructuredData, ...structuredData] })}<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="alternate" hreflang="x-default"${addAttribute(new URL("/es", SITE_ORIGIN).toString(), "href")}>${renderHead()}</head> <body class="bg-surface text-foreground antialiased" data-animate-text> <a href="#main" class="sr-only bg-accent px-3 py-2 font-semibold text-surface focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:outline-none"> ${lang === "es" ? "Saltar al contenido principal" : "Skip to main content"} </a> ${renderComponent($$result, "Header", $$Header, { "lang": lang })} <main id="main" class="pb-16 pt-8"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "lang": lang })} ${renderComponent($$result, "Analytics", $$Index$1, {})} ${renderComponent($$result, "SpeedInsights", $$Index, {})} </body></html>`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, articleJsonLd as a, breadcrumbJsonLd as b, $$Icon as c };
