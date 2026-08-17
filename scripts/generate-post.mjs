// Genera entradas de blog desde la cola de scripts/topics.json usando la API
// de NVIDIA (compatible OpenAI). Escribe en src/content/blog/<slug>.md.
//
// Uso:  NVIDIA_API_KEY=... node scripts/generate-post.mjs [cuantas]
//
// El modelo devuelve JSON; el YAML del frontmatter lo compone este script.
// Nunca se vuelca YAML del modelo directamente: escapar mal una comilla
// rompería la colección de contenido y con ella el build entero.

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BLOG_DIR = join(ROOT, 'src/content/blog');
const TOPICS = join(ROOT, 'scripts/topics.json');

const API = 'https://integrate.api.nvidia.com/v1/chat/completions';
const MODEL = process.env.NVIDIA_MODEL ?? 'meta/llama-3.3-70b-instruct';
const KEY = process.env.NVIDIA_API_KEY;
const MIN_WORDS = 900;

if (!KEY) {
  console.error('Falta NVIDIA_API_KEY.');
  process.exit(1);
}

// ---------- utilidades ----------

const words = (s) => s.trim().split(/\s+/).filter(Boolean).length;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// La API devuelve 504 y 503 ("Worker local total request limit reached") con
// bastante frecuencia. Reintentar al instante solo empeora el rate limit.
const BACKOFF_MS = [0, 8000, 25000, 60000];

// El cuerpo NO viaja dentro del JSON: 900 palabras de Markdown con bloques de
// código llevan saltos de línea, comillas y barras que el modelo no escapa
// bien, y JSON.parse revienta con "Bad control character". Los campos cortos
// van en JSON y el cuerpo en secciones delimitadas por centinelas.
const SEC = {
  meta: '===META===',
  es: '===CUERPO-ES===',
  en: '===CUERPO-EN===',
  end: '===FIN==='
};

const section = (raw, from, to) => {
  const a = raw.indexOf(from);
  if (a === -1) throw new Error(`falta la sección ${from}`);
  const b = raw.indexOf(to, a);
  return raw.slice(a + from.length, b === -1 ? undefined : b).trim();
};

const stripFence = (s) =>
  s.replace(/^\s*```(?:json|markdown|html)?\s*\n?/i, '').replace(/\n?\s*```\s*$/, '').trim();

const parseMeta = (raw, until) => {
  const metaRaw = stripFence(section(raw, SEC.meta, until));
  const start = metaRaw.indexOf('{');
  const end = metaRaw.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('la sección META no contiene JSON');
  return JSON.parse(metaRaw.slice(start, end + 1));
};

// El cuerpo en inglés se inyecta con set:html en /en/blog/[slug]. Es HTML que
// viene de una API externa, así que se recorta a una lista blanca antes de
// escribirlo en el repo.
const ALLOWED = /^(h2|h3|h4|p|ul|ol|li|strong|em|code|pre|blockquote|a|table|thead|tbody|tr|th|td|br)$/i;
const sanitizeHtml = (html) =>
  String(html)
    .replace(/<\s*(script|style|iframe|object|embed|form|input)[\s\S]*?<\s*\/\s*\1\s*>/gi, '')
    .replace(/<\s*(script|style|iframe|object|embed|form|input)\b[^>]*\/?>/gi, '')
    .replace(/<\s*\/?\s*([a-z0-9]+)((?:[^>"']|"[^"]*"|'[^']*')*)>/gi, (m, tag, attrs) => {
      if (!ALLOWED.test(tag)) return '';
      // Fuera manejadores on*, javascript: y cualquier atributo que no sea href.
      const safeAttrs = tag.toLowerCase() === 'a'
        ? (attrs.match(/\shref\s*=\s*"(?!\s*javascript:)[^"]*"/i)?.[0] ?? '')
        : '';
      const closing = m.startsWith('</') ? '/' : '';
      return `<${closing}${tag.toLowerCase()}${safeAttrs}>`;
    });

const yamlStr = (s) => `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
const yamlList = (arr) => `[${arr.map(yamlStr).join(', ')}]`;

// ---------- llamada al modelo ----------

const SYSTEM = `Eres un ingeniero de sistemas senior especializado en SEO técnico, accesibilidad y performance.
Escribes en español de España, en primera persona, con criterio técnico y sin relleno de marketing.
Prohibido: superlativos vacíos, "en el mundo digital de hoy", promesas sin evidencia, cifras inventadas.
Si un dato concreto no se puede afirmar con seguridad, se explica el método en vez de dar el número.
Sigues al pie de la letra el formato de secciones que se te pide.`;

// Una llamada por idioma. Pedir el cuerpo en español y su traducción completa
// al inglés en la misma respuesta hacía que ambos compitieran por el mismo
// presupuesto de tokens: el español se quedaba en 470-600 palabras.
// El reintento vive aquí, por llamada, no alrededor del post entero: la API
// devuelve 504 y 503 con frecuencia, y un fallo en la traducción no debe tirar
// a la basura un cuerpo en español que ya cumplía.
const ask = async (userPrompt, maxTokens) => {
  let lastErr;
  for (let attempt = 0; attempt < BACKOFF_MS.length; attempt++) {
    if (BACKOFF_MS[attempt]) await sleep(BACKOFF_MS[attempt]);
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: SYSTEM },
            { role: 'user', content: userPrompt }
          ],
          temperature: 0.6,
          top_p: 0.9,
          max_tokens: maxTokens
        })
      });

      if (!res.ok) throw new Error(`API ${res.status}`);
      const data = await res.json();
      const content = data.choices?.[0]?.message?.content;
      if (!content) throw new Error('respuesta sin content (¿modelo de razonamiento?)');
      return content;
    } catch (err) {
      lastErr = err;
      if (attempt < BACKOFF_MS.length - 1) process.stdout.write(`[${err.message}] `);
    }
  }
  throw lastErr;
};

const promptEs = (topic) => `Escribe una entrada técnica de blog en español.

Tema: ${topic.title}
Enfoque: ${topic.angle}

Responde EXACTAMENTE con esta estructura, centinelas en su propia línea y sin
texto fuera de las secciones:

${SEC.meta}
{"title":"titular, max 70 caracteres","excerpt":"resumen de 140-180 caracteres","seoTitle":"titulo SEO, max 60 caracteres","seoDescription":"meta description de 140-160 caracteres","tags":["3 a 5 etiquetas"]}
${SEC.es}
(cuerpo en Markdown)
${SEC.end}

El JSON va en UNA línea y solo con valores cortos. El cuerpo va fuera del JSON.

Reglas del cuerpo (la extensión es un requisito, no una sugerencia):
- Abre con un párrafo de respuesta directa de 40-60 palabras, antes de cualquier encabezado.
- Escribe EXACTAMENTE 6 encabezados "## " en forma de pregunta, porque es lo que
  extraen los motores de respuesta.
- Cada una de las 6 secciones: AL MENOS 170 palabras. Empieza con una respuesta
  concreta de 2-3 frases y después desarrolla con detalle técnico real, ejemplos
  de configuración y errores frecuentes.
- Incluye al menos una lista y un bloque de código o una tabla.
- Cierra con "## Conclusión" y 3 puntos accionables.
- Total mínimo: ${MIN_WORDS} palabras. 6 secciones × 170 palabras ya te acercan;
  no resumas, desarrolla.`;

const promptExpand = (topic, body, current) => `Este borrador se ha quedado corto:
tiene ${current} palabras y necesita más de ${MIN_WORDS}.

Amplíalo hasta superar las ${MIN_WORDS} palabras SIN añadir secciones nuevas y sin
repetir lo ya dicho: desarrolla cada sección existente con detalle técnico,
ejemplos de configuración, casos límite y errores frecuentes.
Mantén el tema (${topic.title}), el tono y los encabezados actuales.

Responde con el cuerpo completo ampliado entre estos centinelas, sin nada más:

${SEC.es}
(cuerpo ampliado en Markdown)
${SEC.end}

Borrador actual:

${body}`;

const promptEn = (esPost) => `Traduce esta entrada al inglés.

Responde EXACTAMENTE con esta estructura, centinelas en su propia línea:

${SEC.meta}
{"enTitle":"titular en ingles","enExcerpt":"resumen en ingles, 140-180 caracteres","enSeoTitle":"titulo SEO en ingles, max 60 caracteres","enSeoDescription":"meta description en ingles, 140-160 caracteres"}
${SEC.en}
(cuerpo traducido, en HTML)
${SEC.end}

En el HTML usa solo estas etiquetas: h2, h3, p, ul, ol, li, strong, em, code,
pre, table, thead, tbody, tr, th, td. Traduce el contenido completo, sin resumir.

Título: ${esPost.title}
Resumen: ${esPost.excerpt}

Cuerpo:

${esPost.bodyMarkdown}`;

const generate = async (topic) => {
  // 1) Metadatos + cuerpo en español.
  const rawEs = await ask(promptEs(topic), 6000);
  const post = { ...parseMeta(rawEs, SEC.es), bodyMarkdown: stripFence(section(rawEs, SEC.es, SEC.end)) };

  // 2) Si se queda corto, una pasada de ampliación sobre el mismo cuerpo.
  let n = words(post.bodyMarkdown);
  if (n < MIN_WORDS) {
    process.stdout.write(`ampliando ${n}→ … `);
    const rawExp = await ask(promptExpand(topic, post.bodyMarkdown, n), 7000);
    const expanded = stripFence(section(rawExp, SEC.es, SEC.end));
    // Solo se acepta si de verdad crece: una "ampliación" más corta es un fallo.
    if (words(expanded) > n) {
      post.bodyMarkdown = expanded;
      n = words(expanded);
    }
  }
  if (n < MIN_WORDS) throw new Error(`cuerpo de ${n} palabras tras ampliar, mínimo ${MIN_WORDS}`);

  // 3) Traducción, ya con el cuerpo definitivo.
  const rawEn = await ask(promptEn(post), 7000);
  Object.assign(post, parseMeta(rawEn, SEC.en));
  post.enBodyHtml = stripFence(section(rawEn, SEC.en, SEC.end));

  return post;
};

// ---------- validación ----------

// Términos retirados o incorrectos que delatan que el modelo escribe de oídas.
// Un post que los use hace más daño que no publicar: el sitio vende criterio
// técnico. FID lo sustituyó INP en marzo de 2024.
const RED_FLAGS = [
  [/\bFID\b|First Input Delay/i, 'menciona FID, retirado en 2024 y sustituido por INP'],
  [/gzip[^.]{0,40}minif|minif[^.]{0,40}gzip/i, 'presenta Gzip como minificador; es compresión'],
  [/en el mundo digital|hoy en día, /i, 'relleno de marketing']
];

const validate = (post, topic) => {
  const need = ['title', 'excerpt', 'seoTitle', 'seoDescription', 'tags', 'bodyMarkdown'];
  for (const k of need) {
    if (!post[k] || (Array.isArray(post[k]) ? !post[k].length : !String(post[k]).trim())) {
      throw new Error(`falta el campo "${k}"`);
    }
  }
  if (!Array.isArray(post.tags)) throw new Error('tags debe ser una lista');

  // Longitudes: el modelo devolvía excerpts de 40 caracteres cuando se pedían 140.
  const len = (k, min, max) => {
    const v = String(post[k]).trim();
    if (v.length < min || v.length > max) {
      throw new Error(`${k}: ${v.length} caracteres, se pide ${min}-${max}`);
    }
  };
  len('title', 25, 75);
  len('excerpt', 120, 200);
  len('seoTitle', 35, 65);
  len('seoDescription', 120, 170);

  const n = words(post.bodyMarkdown);
  if (n < MIN_WORDS) throw new Error(`cuerpo de ${n} palabras, mínimo ${MIN_WORDS}`);

  const heads = post.bodyMarkdown.match(/^##\s+.*/gm) ?? [];
  if (heads.length < 5) throw new Error(`solo ${heads.length} encabezados ##, se piden 6 más conclusión`);
  const asked = heads.filter((h) => h.includes('?')).length;
  if (asked < 4) throw new Error(`solo ${asked} encabezados en forma de pregunta`);

  // El cuerpo debe tratar el ángulo del tema, no el título genérico. Se exige
  // que aparezcan los términos que definen el enfoque de la cola.
  const body = post.bodyMarkdown.toLowerCase();
  const missing = (topic.must ?? []).filter((term) => !body.includes(term.toLowerCase()));
  if (missing.length) throw new Error(`el cuerpo no trata: ${missing.join(', ')}`);

  for (const [re, why] of RED_FLAGS) {
    if (re.test(post.bodyMarkdown)) throw new Error(why);
  }

  return { ...post, slug: topic.slug };
};

const toMarkdown = (post, topic) => {
  const today = new Date().toISOString().slice(0, 10);
  const en = post.enBodyHtml ? sanitizeHtml(post.enBodyHtml) : null;

  const fm = [
    '---',
    `title: ${yamlStr(post.title)}`,
    `excerpt: ${yamlStr(post.excerpt)}`,
    `tags: ${yamlList(post.tags.slice(0, 5))}`,
    `date: ${today}`,
    `updated: ${today}`,
    'lang: "es"',
    'seo:',
    `  title: ${yamlStr(post.seoTitle)}`,
    `  description: ${yamlStr(post.seoDescription)}`,
    'translations:',
    `  title: ${yamlStr(post.enTitle ?? post.title)}`,
    `  excerpt: ${yamlStr(post.enExcerpt ?? post.excerpt)}`,
    `  tags: ${yamlList((post.tags ?? topic.tags).slice(0, 5))}`,
    '  seo:',
    `    title: ${yamlStr(post.enSeoTitle ?? post.seoTitle)}`,
    `    description: ${yamlStr(post.enSeoDescription ?? post.seoDescription)}`,
    ...(en ? [`  content: ${yamlStr(en)}`] : []),
    '---',
    ''
  ].join('\n');

  return fm + post.bodyMarkdown.trim() + '\n';
};

// ---------- principal ----------

const howMany = Number(process.argv[2] ?? 2);
const topics = JSON.parse(await readFile(TOPICS, 'utf8'));
const existing = new Set((await readdir(BLOG_DIR)).map((f) => f.replace(/\.md$/, '')));
const pending = topics.filter((t) => !existing.has(t.slug));

if (!pending.length) {
  console.error('Cola de temas vacía: añade entradas a scripts/topics.json.');
  process.exit(1);
}

const written = [];
const queue = pending.slice(0, howMany);
for (const [i, topic] of queue.entries()) {
  // Respiro entre temas: dos generaciones seguidas disparan el límite de workers.
  if (i > 0) await sleep(15000);
  process.stdout.write(`· ${topic.slug} … `);
  // Los fallos de API ya se reintentan dentro de ask(); aquí solo se cubre que
  // el resultado no pase la validación de contenido.
  let lastErr;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const post = validate(await generate(topic), topic);
      const file = join(BLOG_DIR, `${topic.slug}.md`);
      await writeFile(file, toMarkdown(post, topic), 'utf8');
      written.push(topic.slug);
      console.log(`ok (${words(post.bodyMarkdown)} palabras)`);
      lastErr = null;
      break;
    } catch (err) {
      lastErr = err;
      if (attempt < 2) process.stdout.write(`reintento (${err.message.slice(0, 70)}) … `);
    }
  }
  if (lastErr) {
    console.log(`FALLO: ${lastErr.message}`);
    process.exitCode = 1;
  }
}

console.log(written.length ? `\nEscritos: ${written.join(', ')}` : '\nNo se escribió nada.');
if (!written.length) process.exitCode = 1;
