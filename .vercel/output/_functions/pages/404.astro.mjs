import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_B_wPsOB1.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "es", "title": "P\xE1gina no encontrada", "description": "La p\xE1gina que buscas no existe. Vuelve al inicio o navega al blog o casos.", "canonicalPath": "/404", "noindex": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-3xl px-4 py-16 text-center md:px-6"> <p class="text-xs uppercase tracking-[0.2em] text-accent">404</p> <h1 class="mt-2 text-3xl font-semibold text-foreground">No encontré lo que buscabas</h1> <p class="mt-3 text-muted">Revisa las rutas disponibles o vuelve al inicio.</p> <div class="mt-6 flex flex-wrap justify-center gap-3"> <a class="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-surface shadow-soft transition hover:bg-accent-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface" href="/es">
Ir al inicio
</a> <a class="rounded-full border border-border/70 bg-panel px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href="/work">
Ver casos
</a> <a class="rounded-full border border-border/70 bg-panel px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href="/blog">
Blog técnico
</a> </div> </section> ` })}`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/404.astro", void 0);

const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
