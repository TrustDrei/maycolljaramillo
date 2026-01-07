import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_DNhOidXD.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://maycolljaramillo.com");
const $$CaseStudyCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CaseStudyCard;
  const { study } = Astro2.props;
  const lang = Astro2.props.lang ?? "es";
  const statusLabel = lang === "es" ? {
    public: "Disponible",
    confidential: "Confidencial",
    draft: "En preparacion"
  } : {
    public: "Available",
    confidential: "Confidential",
    draft: "In progress"
  };
  const t = {
    case: lang === "es" ? "Caso de estudio" : "Case study",
    stack: lang === "es" ? "Stack" : "Stack",
    highlights: lang === "es" ? "Highlights" : "Highlights",
    result: lang === "es" ? "Resultado" : "Outcome",
    cta: lang === "es" ? "Ver detalle" : "View details"
  };
  const fallbackResult = lang === "es" ? "Disponible bajo solicitud" : "Available on request";
  const problemLabel = lang === "es" ? "Problema tecnico clave" : "Key technical problem";
  const decisionLabel = lang === "es" ? "Decision tecnica critica" : "Critical technical decision";
  const trimText = (value, limit = 180) => value.length > limit ? `${value.slice(0, limit).trim()}...` : value;
  const localized = lang === "en" ? {
    title: study.data.translations?.title ?? study.data.title,
    industry: study.data.translations?.industry ?? study.data.industry,
    role: study.data.translations?.role ?? study.data.role,
    highlights: study.data.translations?.highlights ?? study.data.highlights,
    results: study.data.translations?.results ?? study.data.results,
    situation: study.data.translations?.situation ?? study.data.situation,
    task: study.data.translations?.task ?? study.data.task,
    action: study.data.translations?.action ?? study.data.action,
    outcome: study.data.translations?.outcome ?? study.data.outcome
  } : {
    title: study.data.title,
    industry: study.data.industry,
    role: study.data.role,
    highlights: study.data.highlights,
    results: study.data.results,
    situation: study.data.situation,
    task: study.data.task,
    action: study.data.action,
    outcome: study.data.outcome
  };
  const summary = trimText(localized.task ?? localized.situation, 210);
  const problem = trimText(localized.situation);
  const decision = trimText(localized.action ?? localized.task);
  const outcome = localized.results[0] ?? localized.outcome ?? fallbackResult;
  const detailHref = lang === "en" ? `/en/work/${study.slug}` : `/work/${study.slug}`;
  return renderTemplate`${maybeRenderHead()}<article class="card flex h-full flex-col gap-4 p-5 lift-in"> <header class="flex flex-wrap items-start justify-between gap-3"> <div class="space-y-1"> <p class="text-[11px] uppercase tracking-[0.18em] text-accent">${t.case}</p> <h3 class="text-lg font-semibold text-foreground">${localized.title}</h3> <p class="text-sm text-muted">${localized.industry} | ${localized.role}</p> </div> <span class="rounded-full border border-border/60 bg-panel px-3 py-1 text-xs font-semibold text-foreground/90"> ${statusLabel[study.data.status] ?? study.data.status} </span> </header> <p class="text-sm leading-relaxed text-foreground/85">${summary}</p> <div class="grid gap-3 sm:grid-cols-2"> <div class="space-y-1"> <p class="text-[11px] uppercase tracking-[0.14em] text-muted">${problemLabel}</p> <p class="text-sm leading-relaxed text-foreground/90">${problem}</p> </div> <div class="space-y-1"> <p class="text-[11px] uppercase tracking-[0.14em] text-muted">${decisionLabel}</p> <p class="text-sm leading-relaxed text-foreground/90">${decision}</p> </div> </div> <div class="space-y-2"> <p class="text-[11px] uppercase tracking-[0.14em] text-muted">${t.stack}</p> <div class="flex flex-wrap gap-2"> ${study.data.stack.map((tech) => renderTemplate`<span class="rounded-full border border-border/60 bg-panel px-3 py-1.5 text-xs text-foreground/85">${tech}</span>`)} </div> </div> <div class="space-y-2"> <p class="text-[11px] uppercase tracking-[0.14em] text-muted">${t.highlights}</p> <ul class="space-y-2 text-sm leading-relaxed text-foreground/85"> ${localized.highlights.slice(0, 2).map((item) => renderTemplate`<li class="flex items-start gap-2"> <span class="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-accent"></span> <span>${item}</span> </li>`)} </ul> </div> <div class="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-3"> <div> <p class="text-[11px] uppercase tracking-[0.14em] text-muted">${t.result}</p> <span class="text-sm font-semibold text-foreground/90">${outcome}</span> </div> <a class="inline-flex items-center gap-2 rounded-full border border-border/70 bg-panel px-4 py-2 text-sm font-semibold text-foreground transition hover:-translate-y-[1px] hover:border-accent hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"${addAttribute(detailHref, "href")}> ${t.cta} <span aria-hidden="true">-&gt;</span> </a> </div> </article>`;
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/components/CaseStudyCard.astro", void 0);

export { $$CaseStudyCard as $ };
