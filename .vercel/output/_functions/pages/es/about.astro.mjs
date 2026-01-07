import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$BaseLayout } from '../../chunks/BaseLayout_B_wPsOB1.mjs';
import { P as PERSON, S as SITE } from '../../chunks/site_Bh6d07jz.mjs';
export { renderers } from '../../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const structuredData = [
    breadcrumbJsonLd([
      { name: "Inicio", path: "/es" },
      { name: "Sobre m\xED", path: "/es/about" }
    ])
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "es", "title": `Sobre ${PERSON.shortName} | Ingenier\xEDa y automatizaci\xF3n`, "description": "Perfil senior en ingenier\xEDa de sistemas, SEO t\xE9cnico, accesibilidad, automatizaci\xF3n y plataformas enterprise (AEM, WordPress, React, Firebase).", "canonicalPath": "/es/about", "alternates": [{ lang: "en", path: "/en/about" }], "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-shell mx-auto max-w-5xl px-4 py-12 md:px-6"> <p class="section-title">Sobre mí</p> <h1 class="mt-2 text-3xl font-semibold text-foreground">Ingeniería de sistemas aplicada a DX y automatización</h1> <p class="mt-4 text-muted">
Soy ${PERSON.fullName}, Ingeniero de Sistemas Senior con experiencia en infraestructura web, SEO técnico, accesibilidad y automatización. Trabajo en remoto desde ${PERSON.location} para equipos de LATAM, Europa y EE. UU.
</p> </section> <section class="section-shell mx-auto max-w-5xl px-4 py-12 md:px-6"> <div class="grid gap-4 md:grid-cols-2"> <div class="card p-5"> <h2 class="text-xl font-semibold text-foreground">Especialidades</h2> <ul class="mt-3 space-y-2 text-muted"> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>Infraestructura web y performance (Core Web Vitals, control de JS/terceros).</span></li> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>SEO técnico: canónicos, sitemaps, robots, hreflang ES/EN y schema JSON-LD.</span></li> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>Accesibilidad: WCAG, teclado, foco visible, semántica y formularios críticos.</span></li> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>Automatización y tracking: GA4/Pixel sin duplicados, n8n, WhatsApp Business API.</span></li> </ul> </div> <div class="card p-5"> <h2 class="text-xl font-semibold text-foreground">Cómo opero</h2> <ul class="mt-3 space-y-2 text-muted"> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>Auditoría técnica rápida (CWV, accesibilidad, SEO, tracking) y plan accionable.</span></li> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>Entregables con criterios de aceptación, QA y documentación.</span></li> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>Handoff para marketing/contenido con playbooks y trazabilidad.</span></li> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>Soporte a lanzamiento y validación post-release.</span></li> </ul> </div> </div> </section> <section class="section-shell mx-auto max-w-5xl px-4 py-12 md:px-6"> <h2 class="text-2xl font-semibold text-foreground">Experiencia relevante</h2> <div class="mt-4 grid gap-4 md:grid-cols-2"> <div class="card p-5"> <h3 class="text-lg font-semibold text-foreground">Plataformas y CMS</h3> <p class="mt-2 text-muted">
Shopify (Liquid), WordPress a medida y AEM. Refactor de temas para reducir peso, mejorar Core Web Vitals y mantener tracking limpio.
</p> <ul class="mt-3 space-y-2 text-muted"> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>Migraciones con redirects y canónicos consistentes.</span></li> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>Plantillas accesibles para filtros, carritos y checkout.</span></li> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>Control de plugins/apps para evitar bloat.</span></li> </ul> </div> <div class="card p-5"> <h3 class="text-lg font-semibold text-foreground">SEO técnico y datos estructurados</h3> <p class="mt-2 text-muted">
Sitemaps, hreflang ES/EN, schema Person/WebSite/ProfilePage y validación continua con herramientas oficiales.
</p> <ul class="mt-3 space-y-2 text-muted"> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>Limpieza de thin content y canónicos sólidos.</span></li> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>Breadcrumbs y JSON-LD validados con Rich Results Test.</span></li> <li class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span><span>Monitoreo de coverage en GSC y ajustes iterativos.</span></li> </ul> </div> </div> </section> <section class="section-shell mx-auto max-w-5xl px-4 pb-16 md:px-6"> <div class="card p-6"> <h2 class="text-xl font-semibold text-foreground">Disponibilidad</h2> <p class="mt-2 text-muted">
Proyectos de 4 a 12 semanas o acompañamiento continuo. Si necesitas estabilidad operativa, control de indexación o automatización trazable, hablemos.
</p> <div class="mt-4 flex flex-wrap gap-3"> <a class="inline-flex items-center justify-center rounded-full border border-border/70 bg-panel px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(`mailto:${SITE.email}?subject=Proyecto%20%2F%20Consultor\xEDa`, "href")}>
Escribirme
</a> <a class="inline-flex items-center justify-center rounded-full border border-border/70 bg-panel px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(SITE.social.linkedin, "href")} target="_blank" rel="noopener">
LinkedIn
</a> <a class="inline-flex items-center justify-center rounded-full border border-border/70 bg-panel px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(SITE.social.github, "href")} target="_blank" rel="noopener">
GitHub
</a> </div> </div> </section> ` })}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/es/about.astro", void 0);

const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/es/about.astro";
const $$url = "/es/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
