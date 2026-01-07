import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import { b as breadcrumbJsonLd, $ as $$BaseLayout, c as $$Icon } from '../../chunks/BaseLayout_B_wPsOB1.mjs';
import { C as CONTACT_CTA } from '../../chunks/site_Bh6d07jz.mjs';
export { renderers } from '../../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Ingenier\xEDa de plataformas web",
      items: [
        "Arquitectura y hardening de WordPress y AEM.",
        "React (Vite) con backends Node/Spring Boot.",
        "Control de performance, seguridad y mantenibilidad.",
        "Documentaci\xF3n t\xE9cnica y handover a equipos."
      ]
    },
    {
      title: "Back end, datos y automatizaci\xF3n",
      items: [
        "APIs con Spring Boot y Node.js.",
        "Integraciones y flujos ETL.",
        "Automatizaci\xF3n con n8n.",
        "Chatbots y widgets multiling\xFCes v\xEDa API.",
        "Firebase (Auth, Firestore, Storage, reglas)."
      ]
    },
    {
      title: "DevOps y operaci\xF3n",
      items: [
        "Dockerizaci\xF3n de entornos.",
        "GitHub Actions CI/CD.",
        "Builds reproducibles.",
        "Flujos de despliegue en cPanel y cloud h\xEDbrido."
      ]
    },
    {
      title: "SEO t\xE9cnico y DX",
      items: [
        "Core Web Vitals y rendimiento real.",
        "JSON-LD y datos estructurados.",
        "Arquitectura de informaci\xF3n.",
        "Reporting t\xE9cnico (GSC / GA).",
        "Gobernanza de componentes (AEM)."
      ]
    },
    {
      title: "Accesibilidad",
      items: [
        "Auditor\xEDas WCAG.",
        "UX sem\xE1ntica y accesible.",
        "Teclado, foco visible, contraste.",
        "Gu\xEDas t\xE9cnicas para equipos."
      ]
    }
  ];
  const structuredData = [
    breadcrumbJsonLd([
      { name: "Inicio", path: "/es" },
      { name: "Servicios", path: "/es/services" }
    ])
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "es", "title": "Servicios de ingenier\xEDa y automatizaci\xF3n | Maycoll Jaramillo", "description": "Ingenier\xEDa de sistemas, automatizaci\xF3n, SEO t\xE9cnico, accesibilidad y plataformas enterprise.", "canonicalPath": "/es/services", "alternates": [{ lang: "en", path: "/en/services" }], "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section-shell mx-auto max-w-5xl px-4 py-12 md:px-6"> <p class="section-title">Servicios</p> <h1 class="mt-3 text-4xl font-semibold text-foreground">Servicios de ingeniería de sistemas y consultoría técnica</h1> <p class="mt-4 text-lg text-muted">
Diseño, implementación y auditoría de plataformas web, backends y automatizaciones en entornos enterprise, con criterios técnicos verificables.
</p> </section> <section class="section-shell mx-auto max-w-5xl px-4 py-12 md:px-6"> <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"> <div> <p class="section-title">Áreas</p> <h2 class="mt-2 text-2xl font-semibold text-foreground">Servicios enfocados en entrega técnica</h2> </div> </div> <div class="mt-6 grid gap-4 md:grid-cols-2"> ${services.map((service) => renderTemplate`<article class="card p-5"> <h3 class="text-lg font-semibold text-foreground">${service.title}</h3> <ul class="mt-3 space-y-2 text-foreground/90"> ${service.items.map((item) => renderTemplate`<li class="flex items-start gap-2"> <span class="mt-1 inline-block h-2 w-2 rounded-full bg-accent"></span> <span>${item}</span> </li>`)} </ul> </article>`)} </div> </section> <section class="section-shell mx-auto max-w-5xl px-4 py-12 md:px-6"> <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"> <p class="section-title">Metodología</p> <span class="rounded-full border border-border/70 bg-panel px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Entrega verificable</span> </div> <h2 class="mt-3 text-2xl font-semibold text-foreground">Principios de entrega técnica</h2> <div class="mt-4 grid gap-4 md:grid-cols-2"> <div class="card p-5"> <p class="font-semibold text-foreground">Accesibilidad integrada</p> <p class="mt-2 text-muted">Semántica, teclado, foco y contraste desde diseño a QA.</p> </div> <div class="card p-5"> <p class="font-semibold text-foreground">Performance como requisito</p> <p class="mt-2 text-muted">Control de Core Web Vitals en plantillas y scripts de terceros.</p> </div> <div class="card p-5"> <p class="font-semibold text-foreground">Automatización y seguridad</p> <p class="mt-2 text-muted">Validación, mínimos privilegios y flujos orquestados con logs.</p> </div> <div class="card p-5"> <p class="font-semibold text-foreground">SEO técnico auditable</p> <p class="mt-2 text-muted">Hreflang, canónicos, schema y reporting consistentes.</p> </div> </div> </section> <section class="section-shell mx-auto max-w-5xl px-4 pb-16 md:px-6"> <div class="card flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between"> <div> <p class="section-title">Próximo paso</p> <h2 class="text-xl font-semibold text-foreground">Comparte el contexto técnico de tu proyecto</h2> <p class="mt-2 max-w-2xl text-muted">
Revisamos stack, métricas actuales y definimos un plan de acción con prioridades claras y alcance documentado.
</p> </div> <div class="flex flex-wrap gap-3"> <a class="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-4 py-2 text-sm font-semibold text-surface shadow-soft transition hover:-translate-y-[1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"${addAttribute(CONTACT_CTA.primary.href, "href")}> ${renderComponent($$result2, "Icon", $$Icon, { "name": "whatsapp", "label": "WhatsApp" })}
WhatsApp
</a> <a class="inline-flex items-center justify-center rounded-full border border-border/70 bg-panel px-4 py-2 text-sm font-semibold text-foreground transition hover:-translate-y-[1px] hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href="/work">
Ver casos
</a> </div> </div> </section> ` })}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/es/services.astro", void 0);

const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/es/services.astro";
const $$url = "/es/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
