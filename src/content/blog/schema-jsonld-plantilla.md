---
title: "Schema JSON-LD rapido para negocio y contenido"
excerpt: "Plantilla base para Organization, WebSite, Breadcrumb y Article que pasa validadores sin plugins pesados."
tags: ["SEO", "Schema", "Estructurados"]
date: 2025-01-24
lang: "es"
translations:
  title: "JSON-LD schema: ready-to-use template"
  excerpt: "Practical schema structure for Person, WebSite, and BreadcrumbList with common fields filled."
  tags: ["SEO", "Schema", "JSON-LD"]
  seo:
    title: "JSON-LD schema template ready to use | Maycoll Jaramillo"
    description: "Template to implement JSON-LD (Person, WebSite, BreadcrumbList) with consistent fields."
seo:
  title: "Schema JSON-LD listo para produccion | Maycoll Jaramillo"
  description: "Implementa Organization, WebSite, Breadcrumb y Article con JSON-LD ligero y validado para mejorar snippets."
hero:
  src: "/assets/img/blog-schema-jsonld.jpg"
  alt: "Personas pegando notas sobre un pizarron"
  width: 1400
  height: 900
---

Un buen esquema JSON-LD se arma una sola vez y se reutiliza. Esto es lo minimo que despliego en sitios nuevos:

## 1) Organization + WebSite
- Nombre legal, URL canonica, logo y contacto de soporte.
- Redes en `sameAs` y `contactPoint` segun pais/idioma.
- WebSite con `searchAction` para el buscador interno si existe.

## 2) BreadcrumbList
- Generar desde la ruta real y evitar mezclas de idiomas.
- Cada item con `@id` absoluto y posicion en secuencia.

## 3) Article/BlogPosting
- `headline`, `description`, `datePublished`, `dateModified`, `inLanguage`.
- `image` con URL absoluta y dimensiones declaradas.
- `author` y `publisher` apuntando a la Organization/persona.

## 4) Productos/Servicios
- Si hay ecommerce: `Product` con `offers`, `aggregateRating` y `review` cuando aplique.
- En servicios B2B, usar `Service` con area de servicio y `provider`.

## 5) Validacion y despliegue
- Probar en Rich Results Test y Schema Markup Validator antes de subir.
- Loggear errores de parseo en sentry/rollbar para detectar cambios de plantilla.

### Entregable
Un partial de JSON-LD versionado y testeado, sin depender de plugins que inyectan marcados duplicados o invalidos.
