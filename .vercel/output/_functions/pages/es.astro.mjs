import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_BcwZgUJm.mjs';
import { b as breadcrumbJsonLd, $ as $$BaseLayout, c as $$Icon } from '../chunks/BaseLayout_B_wPsOB1.mjs';
import { $ as $$CaseStudyCard } from '../chunks/CaseStudyCard_C-FW6LcJ.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_Bt4MYeOl.mjs';
import { $ as $$StackGroup } from '../chunks/StackGroup_Cy5LgpzZ.mjs';
import { P as PERSON, C as CONTACT_CTA } from '../chunks/site_Bh6d07jz.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://maycolljaramillo.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const caseStudies = (await getCollection("case-studies")).sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
  const posts = (await getCollection("blog")).filter((post) => post.data.lang === "es").sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  const stackItems = [
    {
      title: "Performance y frontend",
      capabilities: [
        { label: "HTML sem\xE1ntico", icon: "html" },
        { label: "CSS (Tailwind)", icon: "tailwind" },
        { label: "JavaScript moderno", icon: "javascript" },
        { label: "React 18", icon: "react" },
        { label: "Astro (SSG)", icon: "astro" },
        { label: "Core Web Vitals", icon: "cwv" },
        { label: "Optimizaci\xF3n de fuentes/imagenes", icon: "cwv" }
      ],
      proofs: [
        "Maquetado sem\xE1ntico y orden de foco validados.",
        "Preload y CSS cr\xEDtico dimensionados para estabilidad visual.",
        "Presupuesto de assets con compresi\xF3n y sizing."
      ]
    },
    {
      title: "Backend y datos",
      capabilities: [
        { label: "PHP / WordPress", icon: "php" },
        { label: "Node.js / Express", icon: "node" },
        { label: "React (Vite)", icon: "react" },
        { label: "PostgreSQL / MySQL", icon: "postgres" },
        { label: "MongoDB", icon: "mongodb" },
        { label: "Firebase", icon: "firebase" },
        { label: "Prisma ORM", icon: "prisma" }
      ],
      proofs: [
        "APIs con logs y cach\xE9 controlada.",
        "Modelado de datos alineado a reporting de conversi\xF3n.",
        "Builds reproducibles con CI/CD."
      ]
    },
    {
      title: "CMS y enterprise",
      capabilities: [
        { label: "WordPress (custom/hardening)", icon: "wordpress" },
        { label: "Shopify (Liquid/CRO t\xE9cnico)", icon: "shopify" },
        { label: "AEM", icon: "aem" },
        { label: "Webflow", icon: "webflow" },
        { label: "Liquid schema", icon: "liquid" }
      ],
      proofs: [
        "Temas livianos sin plugins/apps innecesarias.",
        "Componentes accesibles listos para contenido.",
        "Migraciones con redirects y can\xF3nicos consistentes."
      ]
    },
    {
      title: "SEO t\xE9cnico",
      capabilities: [
        { label: "Sitemaps + can\xF3nicos", icon: "seo" },
        { label: "Robots e indexaci\xF3n", icon: "seo" },
        { label: "Schema JSON-LD", icon: "seo" },
        { label: "Hreflang ES/EN", icon: "seo" }
      ],
      proofs: [
        "Arquitectura de sitemaps y can\xF3nicos por plantilla.",
        "Datos estructurados (Person, WebSite, ProfilePage, BreadcrumbList).",
        "Control de indexaci\xF3n y cobertura en GSC."
      ]
    },
    {
      title: "Accesibilidad",
      capabilities: [
        { label: "WCAG 2.x", icon: "accessibility" },
        { label: "Navegaci\xF3n por teclado", icon: "accessibility" },
        { label: "Focus visible", icon: "accessibility" },
        { label: "Formularios accesibles", icon: "accessibility" },
        { label: "Contraste AA", icon: "accessibility" }
      ],
      proofs: [
        "Patrones accesibles para men\xFAs, modales, filtros y checkout.",
        "Roles/aria solo cuando aporta y est\xE1 probado.",
        "Validaci\xF3n manual y automatizada en flujos cr\xEDticos."
      ]
    },
    {
      title: "Automatizaci\xF3n y tracking",
      capabilities: [
        { label: "n8n / integraciones API", icon: "whatsapp" },
        { label: "GA4", icon: "ga" },
        { label: "Meta Pixel", icon: "meta" },
        { label: "WhatsApp Business API", icon: "whatsapp" },
        { label: "Eventos deduplicados", icon: "ga" }
      ],
      proofs: [
        "Implementaci\xF3n de eventos sin duplicar (GA4/Pixel/server).",
        "Automatizaciones con opt-in y trazabilidad.",
        "Dashboards y alertas ligeras para CWV y conversi\xF3n."
      ]
    }
  ];
  const structuredData = [
    breadcrumbJsonLd([
      { name: "Inicio", path: "/es" }
    ])
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "es", "title": "Senior Systems Engineer \xB7 Automation, SEO & DX|Maycoll Jaramillo", "description": "Senior Systems Engineer especializado en automatizaci\xF3n, SEO t\xE9cnico, accesibilidad y plataformas enterprise (AEM, WordPress, React, Firebase).", "canonicalPath": "/es", "alternates": [{ lang: "en", path: "/en" }], "structuredData": structuredData }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-6xl px-4 pt-12 md:px-6 lg:pt-16"> <div class="relative overflow-hidden rounded-[32px] border border-border/70 bg-panel/90 p-6 shadow-soft lg:p-8"> <div class="relative grid gap-10 lg:grid-cols-[1.15fr,0.95fr] lg:items-center"> <div class="space-y-6"> <p class="section-title">Automatización · SEO técnico · Accesibilidad</p> <h1 class="lcp-target text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
Ingeniería de sistemas aplicada a plataformas web y automatización
</h1> <p class="max-w-2xl text-lg leading-relaxed text-muted">
Ingeniero de sistemas senior. Diseño, audito y fortalezco plataformas web y backends en entornos enterprise con foco en automatización, SEO técnico, accesibilidad y performance medible.
</p> <p class="max-w-2xl text-muted">
Arquitecto y desarrollador de plataformas en producción para equipos de LATAM y Europa. Combino infraestructura web, control de datos y documentación técnica para handoff sin fricción.
</p> <div class="flex flex-wrap items-center gap-3"> <a class="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-surface shadow-soft transition hover:-translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"${addAttribute(CONTACT_CTA.primary.href, "href")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "whatsapp", "label": "WhatsApp" })}
WhatsApp
</a> <a class="inline-flex items-center justify-center rounded-full border border-border/70 bg-panel px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-[1px] hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href="/work">
Ver casos técnicos
</a> </div> <div class="grid gap-3 sm:grid-cols-2"> <div class="rounded-2xl border border-border/70 bg-panel p-4"> <p class="text-[11px] uppercase tracking-[0.16em] text-muted">Criterios de entrega</p> <p class="text-sm font-semibold text-foreground">Checklist por plantilla: CWV, accesibilidad, SEO técnico, tracking.</p> <p class="text-sm text-muted">Validación en staging y QA documentado.</p> </div> <div class="rounded-2xl border border-border/70 bg-panel p-4"> <p class="text-[11px] uppercase tracking-[0.16em] text-muted">Operación</p> <p class="text-sm font-semibold text-foreground">Automatización, logs y deduplicación.</p> <p class="text-sm text-muted">Backends resilientes y handover con guías.</p> </div> </div> <div class="flex flex-wrap gap-2"> <span class="badge">Automatización / n8n</span> <span class="badge">AEM / WordPress</span> <span class="badge">Shopify / Liquid</span> <span class="badge">Core Web Vitals</span> <span class="badge">Accesibilidad WCAG</span> <span class="badge">SEO técnico / hreflang</span> </div> </div> <div class="space-y-4"> <div class="flex items-center gap-4 rounded-2xl border border-border/70 bg-panel p-4 shadow-soft"> <img src="/images/person-128.png"${addAttribute(`Retrato de ${PERSON.shortName}`, "alt")} class="h-16 w-16 rounded-full object-cover shadow-soft" width="128" height="128" loading="eager" fetchpriority="high" decoding="async"> <div> <p class="text-sm font-semibold text-foreground">${PERSON.shortName}</p> <p class="text-xs uppercase tracking-[0.14em] text-muted">${PERSON.headline.es}</p> <p class="text-xs text-muted">Managua, Nicaragua · remoto LATAM / UE / EE. UU.</p> </div> </div> <div class="card p-5 lg:p-6"> <p class="text-xs uppercase tracking-[0.18em] text-accent">Checklist de entrega</p> <ul class="mt-3 space-y-2.5 text-sm leading-relaxed text-foreground/90"> <li>Arquitectura y hardening por plataforma (WordPress/AEM/React/Node).</li> <li>Datos estructurados y control de indexación: sitemaps, hreflang, canónicos.</li> <li>Accesibilidad WCAG con foco visible, teclado y semántica.</li> <li>Automatización con n8n y WhatsApp API; opt-in y logs de eventos.</li> <li>QA, documentación y handoff para equipos de marketing/contenido.</li> </ul> </div> <div class="card space-y-4 p-5 lg:p-6"> <p class="text-xs uppercase tracking-[0.18em] text-accent">Validación</p> <ul class="space-y-2.5 text-sm leading-relaxed text-foreground/90"> <li class="flex items-start gap-2"><span aria-hidden="true" class="mt-1 block h-2 w-2 rounded-full bg-accent"></span><span>Focus order, landmarks y teclado en menús, modales y formularios.</span></li> <li class="flex items-start gap-2"><span aria-hidden="true" class="mt-1 block h-2 w-2 rounded-full bg-accent"></span><span>Canónicos, hreflang y sitemaps consistentes por plantilla.</span></li> <li class="flex items-start gap-2"><span aria-hidden="true" class="mt-1 block h-2 w-2 rounded-full bg-accent"></span><span>Preload de fuentes/imágenes y CSS crítico para estabilidad visual.</span></li> <li class="flex items-start gap-2"><span aria-hidden="true" class="mt-1 block h-2 w-2 rounded-full bg-accent"></span><span>Eventos GA4/Pixel sin duplicados ni bloqueo de render.</span></li> </ul> </div> </div> </div> </div> </section> <section class="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16"> <div class="section-shell"> <div class="space-y-3"> <p class="section-title">Áreas de especialización</p> <h2 class="text-3xl font-semibold text-foreground">Plataformas, automatización y DX con criterios técnicos</h2> <p class="text-lg leading-relaxed text-muted">
Trabajo con equipos que necesitan estabilidad operativa, control de datos y entrega validada. Remote-first desde Managua (UTC-6) con disponibilidad para LATAM y Europa.
</p> </div> <div class="mt-6 grid gap-4 md:grid-cols-2"> <article class="card p-5"> <h3 class="text-lg font-semibold text-foreground">Ingeniería full-stack y back end</h3> <ul class="mt-3 space-y-2 text-foreground/90"> <li>PHP/WordPress, React (Vite) y Node.js.</li> <li>Java (Spring Boot) para APIs y plataformas de negocio.</li> <li>Bases de datos: MySQL/Prisma, SQL Server, MongoDB.</li> </ul> </article> <article class="card p-5"> <h3 class="text-lg font-semibold text-foreground">Automatización y DevOps</h3> <ul class="mt-3 space-y-2 text-foreground/90"> <li>n8n para orquestación y automatización.</li> <li>Integraciones API y chatbots multilingües.</li> <li>Docker y GitHub Actions para CI/CD y builds reproducibles.</li> </ul> </article> <article class="card p-5"> <h3 class="text-lg font-semibold text-foreground">SEO técnico y arquitectura de búsqueda</h3> <ul class="mt-3 space-y-2 text-foreground/90"> <li>Core Web Vitals y rendimiento real.</li> <li>JSON-LD y datos estructurados.</li> <li>Arquitectura de información y crawlability con reporting GSC/GA.</li> </ul> </article> <article class="card p-5"> <h3 class="text-lg font-semibold text-foreground">Digital Experience y accesibilidad</h3> <ul class="mt-3 space-y-2 text-foreground/90"> <li>Gobernanza de componentes AEM y operaciones de contenido.</li> <li>Accesibilidad WCAG: semántica, teclado, foco, contraste.</li> <li>Auditorías técnicas y guías de remediación.</li> </ul> </article> </div> </div> </section> ${renderComponent($$result2, "StackGroup", $$StackGroup, { "heading": "Stack contextualizado", "description": "Cada herramienta se usa con prop\xF3sito y evidencia: CWV, accesibilidad, indexaci\xF3n y medici\xF3n listas para negocio.", "items": stackItems })} <section class="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16"> <div class="section-shell"> <div class="grid gap-6 lg:grid-cols-[1.4fr,0.9fr] lg:items-start"> <div class="space-y-3"> <p class="section-title">Casos técnicos</p> <h2 class="text-3xl font-semibold text-foreground">STAR: situación, tarea, acción, resultado</h2> <p class="max-w-3xl text-muted leading-relaxed">Resultados verificables. Métricas públicas o compartidas bajo solicitud con el contexto adecuado.</p> <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-4"> <div class="rounded-2xl border border-border/60 bg-panel p-3 text-sm text-foreground/90"> <p class="text-[11px] uppercase tracking-[0.16em] text-accent">S - Situación</p> <p class="mt-1 text-muted">Contexto y restricciones reales.</p> </div> <div class="rounded-2xl border border-border/60 bg-panel p-3 text-sm text-foreground/90"> <p class="text-[11px] uppercase tracking-[0.16em] text-accent">T - Tarea</p> <p class="mt-1 text-muted">Objetivos medibles y plantillas.</p> </div> <div class="rounded-2xl border border-border/60 bg-panel p-3 text-sm text-foreground/90"> <p class="text-[11px] uppercase tracking-[0.16em] text-accent">A - Acción</p> <p class="mt-1 text-muted">Cambios técnicos, QA y documentación.</p> </div> <div class="rounded-2xl border border-border/60 bg-panel p-3 text-sm text-foreground/90"> <p class="text-[11px] uppercase tracking-[0.16em] text-accent">R - Resultado</p> <p class="mt-1 text-muted">KPIs compartidos o bajo solicitud.</p> </div> </div> </div> <div class="flex flex-col gap-3 lg:items-end"> <span class="inline-flex items-center gap-2 self-start rounded-full border border-border/70 bg-panel px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent lg:self-end">
Resultados verificables
</span> <a class="inline-flex items-center gap-2 rounded-full border border-border/70 bg-panel px-4 py-2 text-sm font-semibold text-foreground transition hover:-translate-y-[1px] hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href="/work">
Ver todos los casos
</a> </div> </div> <div class="mt-8 grid gap-5 md:grid-cols-2"> ${caseStudies.slice(0, 4).map((study) => renderTemplate`${renderComponent($$result2, "CaseStudyCard", $$CaseStudyCard, { "study": study })}`)} </div> </div> </section> <section class="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16"> <div class="section-shell"> <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"> <div class="space-y-2"> <p class="section-title">Blog técnico</p> <h2 class="text-2xl font-semibold text-foreground">SEO técnico, accesibilidad y medición</h2> <p class="max-w-3xl text-muted leading-relaxed">Guías aplicables y patrones validados para equipos de producto y marketing.</p> </div> <a class="inline-flex items-center gap-2 rounded-full border border-border/70 bg-panel px-4 py-2 text-sm font-semibold text-foreground transition hover:-translate-y-[1px] hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href="/blog">
Ver blog
</a> </div> <div class="mt-6 grid gap-5 md:grid-cols-3"> ${posts.slice(0, 3).map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })}`)} </div> </div> </section> <section class="mx-auto max-w-6xl px-4 pb-16 md:px-6"> <div class="rounded-[28px] border border-border/70 bg-panel p-6 shadow-soft md:p-8"> <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"> <div class="space-y-2"> <p class="section-title">Próximo paso</p> <h2 class="text-xl font-semibold text-foreground">Comparte el contexto técnico de tu proyecto</h2> <p class="max-w-2xl text-muted leading-relaxed">
Revisamos stack, métricas actuales y definimos un plan de acción con prioridades claras y entregables medibles.
</p> </div> <div class="flex flex-wrap gap-3"> <a class="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-surface shadow-soft transition hover:-translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"${addAttribute(CONTACT_CTA.primary.href, "href")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "whatsapp", "label": "WhatsApp" })}
WhatsApp
</a> <a class="inline-flex items-center justify-center rounded-full border border-border/70 bg-panel px-4 py-2 text-sm font-semibold text-foreground transition hover:-translate-y-[1px] hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href="/es/services">
Ver servicios
</a> </div> </div> </div> </section> ` })}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/es/index.astro", void 0);

const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
