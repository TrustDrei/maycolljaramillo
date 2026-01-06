---
title: "Auditoria WCAG en eCommerce: errores repetidos y fixes"
excerpt: "Patrones que se repiten en tiendas: foco, labels, contraste, estados, formularios y navegacion."
tags: ["accesibilidad", "wcag", "ecommerce"]
date: 2025-12-29
lang: "es"
translations:
  title: "WCAG audit in eCommerce: recurring errors and fixes"
  excerpt: "Patterns that repeat in stores: focus, labels, contrast, states, forms, navigation."
  tags: ["accessibility", "wcag", "ecommerce"]
  seo:
    title: "WCAG audit in eCommerce: errors and fixes | Maycoll Jaramillo"
    description: "Practical WCAG guide for eCommerce: visible focus, forms, labels, contrast, and keyboard navigation."
seo:
  title: "Auditoria WCAG en eCommerce: errores y soluciones | Maycoll Jaramillo"
  description: "Guia practica WCAG para eCommerce: foco visible, formularios, labels, contraste y navegacion por teclado."
hero:
  src: "/assets/img/blog-wcag-audit.jpg"
  alt: "Personas revisando interfaces web en portatiles"
  width: 1400
  height: 900
---

La accesibilidad en eCommerce falla casi siempre por lo mismo: **teclado**, **formularios** y **estados**.

## 1) Foco visible (no negociable)
- `:focus-visible` con estilo claro.
- Nunca ocultar el outline sin reemplazo.

## 2) Formularios: label + mensajes de error
- Todo input con `label` asociado.
- Errores con texto claro y relacion con el campo (`aria-describedby` si aplica).
- Validacion sin romper teclado.

## 3) Botones y links: semantica correcta
- No uses `div` clickeables.
- Botones para acciones, enlaces para navegacion.

## 4) Contraste y estados
- Contraste AA minimo en texto.
- Estados hover/focus/disabled deben ser distinguibles.

## 5) Navegacion
- Skip link al contenido.
- Orden logico de tabulacion.
- Menu movil usable con teclado y cierre con ESC.

Una auditoria buena entrega: **lista de issues**, **prioridad por impacto** y **fix concreto** por componente.
