---
title: "Auditoria SEO tecnica en 60 minutos"
excerpt: "Checklist express para detectar bloqueos graves: indexacion, canonicos, robots, velocidad y data estructurada."
tags: ["SEO", "Auditoria", "Tecnico"]
date: 2025-01-10
lang: "es"
seo:
  title: "Auditoria SEO tecnica en 60 minutos | Maycoll Jaramillo"
  description: "Metodo rapido para auditar SEO: rastreo, canonicos, robots, velocidad y schema listos para pasar a backlog."
hero:
  src: "/assets/img/blog-seo-auditoria-rapida.jpg"
  alt: "Personas revisando un dashboard SEO en laptops"
  width: 1400
  height: 900
---

Una auditoria rapida no reemplaza una investigacion profunda, pero evita publicar con errores bloqueantes. Esto reviso en la primera hora:

## 1) Acceso e indexacion
- Validar que el dominio productivo no tenga `noindex` ni bloqueos en `robots.txt`.
- Revisar canonicos: sin bucles, sin apuntar a staging y sin self-canonical faltante.
- Probar un rastreo de 200-500 URLs con Screaming Frog para ver status y profundidad.

## 2) Arquitectura y enlaces
- Navegar la ruta critica: home → categorias → fichas → checkout/contacto.
- Detectar enlaces rotos (404/410) y redireccionamientos en cadena.
- Revisar menus y breadcrumbs: consistencia, hreflang si hay multi-idioma.

## 3) Rendimiento basico
- LCP del home y plantillas principales con Lighthouse en mobile.
- Imagenes grandes sin width/height declarado o sin lazy donde aplica.
- Fuentes custom con `font-display: swap` y sin bloqueos innecesarios.

## 4) Datos estructurados y metadatos
- Schema: Organization/WebSite + BreadcrumbList; Product/Article si aplica.
- Metas: title/description unicos y de longitud correcta en las plantillas.
- Open Graph/Twitter listos para compartir.

## 5) Logs y monitoreo minimo
- Conectar Search Console y verificar cobertura.
- Configurar alertas sencillas (404, 5xx, caidas de Core Web Vitals).

### Entregable rapido
Un backlog priorizado con severidad (bloqueante, alto, medio) y responsables claros. Sin esto, los fixes se pierden y el sitio sigue filtrando trafico.
