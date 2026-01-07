import { b as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, d as addAttribute, r as renderComponent } from './astro/server_DNhOidXD.mjs';
import 'piccolore';
import { c as $$Icon } from './BaseLayout_B_wPsOB1.mjs';

const $$Astro = createAstro("https://maycolljaramillo.com");
const $$StackGroup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StackGroup;
  const {
    heading,
    description,
    items,
    tagLabel = "Entrega verificable",
    capabilitiesLabel = "Toolkit",
    proofLabel = "En produccion"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:py-16"> <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"> <div class="space-y-2"> <p class="section-title">${heading}</p> ${description && renderTemplate`<p class="max-w-3xl text-muted leading-relaxed">${description}</p>`} </div> <div class="hidden rounded-full border border-border/70 bg-panel px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent md:inline-flex"> ${tagLabel} </div> </div> <div class="mt-8 grid gap-6 md:grid-cols-2"> ${items.map((group, idx) => {
    const delay = `${idx * 80}ms`;
    return renderTemplate`<article class="card lift-in p-5"${addAttribute(`animation-delay:${delay};`, "style")}> <div class="space-y-2"> <p class="text-[11px] uppercase tracking-[0.18em] text-accent">${tagLabel}</p> <h3 class="text-lg font-semibold leading-snug text-foreground">${group.title}</h3> </div> <div class="mt-4 grid gap-4"> <div class="space-y-2"> <p class="text-[11px] uppercase tracking-[0.14em] text-muted">${capabilitiesLabel}</p> <ul class="space-y-1.5 text-sm text-foreground/90"> ${group.capabilities.map((item) => renderTemplate`<li class="flex items-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": item.icon, "label": item.label })} <span>${item.label}</span> </li>`)} </ul> </div> <div class="space-y-2"> <p class="text-[11px] uppercase tracking-[0.14em] text-muted">${proofLabel}</p> <ul class="space-y-2 text-sm leading-relaxed text-muted"> ${group.proofs.map((proof) => renderTemplate`<li class="flex items-start gap-2"> <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent"></span> <span>${proof}</span> </li>`)} </ul> </div> </div> </article>`;
  })} </div> </section>`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/components/StackGroup.astro", void 0);

export { $$StackGroup as $ };
