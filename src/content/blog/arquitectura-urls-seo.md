---
title: "Arquitectura y URLs que escalan SEO"
excerpt: "Cómo estructurar secciones, rutas y enlaces internos para rastreo limpio, crawl budget eficiente y hreflang sin errores."
tags: ["SEO", "Arquitectura", "URL"]
date: 2025-01-17
lang: "es"
translations:
  title: "URL architecture for SEO without migration chaos"
  excerpt: "Patterns to design friendly, consistent URLs and avoid redirects or cannibalization later."
  tags: ["SEO", "Arquitectura", "URLs"]
  seo:
    title: "SEO URL architecture: patterns that survive migrations | Maycoll Jaramillo"
    description: "Guidelines to build clean URL structures that avoid cannibalization and reduce redirect chains."
seo:
  title: "Arquitectura SEO: URLs limpias y enlazado interno | Maycoll Jaramillo"
  description: "Guia practica para definir secciones, profundidad y URL canonicas que faciliten el rastreo y eviten canibalizacion."
hero:
  src: "/assets/img/blog-arquitectura-urls.jpg"
  alt: "Equipo planificando estructura de sitio en una mesa"
  width: 1400
  height: 900
---

La arquitectura SEO define que Google encuentre y entienda las paginas correctas. Si se siente “improvisada”, el crawl budget se desperdicia. Pasos clave:

## 1) Profundidad y agrupacion
- Mantener las paginas de negocio a ≤3 clics desde home.
- Agrupar por intencion: `/categoria/` → `/categoria/subcategoria/` → `/producto/`.
- Evitar carpetas huérfanas o duplicadas (`/blog/seo/` y `/seo/blog/`).

## 2) Convenciones de URL
- Minusculas, guiones medios, sin IDs innecesarios ni parametros en canonicos.
- Bloquear rutas de filtros (`?page=2`) via canonico a la primera pagina o paginacion consistente.
- Quitar fechas de rutas de contenido evergreen para no envejecerlo.

## 3) Enlazado interno
- Menus claros + breadcrumbs + bloques de “relacionados” por tema.
- Links de contexto con anchor descriptivo, no “click aqui”.
- Mapear orphan pages mensual y conectarlas a la malla principal.

## 4) Hreflang y canonicos
- Uso de `hreflang` bidireccional entre idiomas y canonicos autoconcluyentes.
- Evitar mezclar canonico a idioma base con hreflang alternates.

## 5) Señales de estado
- Redirect 301 cuando se reubica contenido; 410 para eliminar sin reemplazo.
- Sitemaps por tipo (blog, productos) con <50k URLs y actualizacion automatica.

### Resultado
Rutas limpias, predecibles y enlazado interno que reparte autoridad y reduce gasto de rastreo. Menos 404, menos canibalizacion, mas indexacion util.
