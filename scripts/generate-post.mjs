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

const parseResponse = (raw) => {
  const metaRaw = stripFence(section(raw, SEC.meta, SEC.es));
  const start = metaRaw.indexOf('{');
  const end = metaRaw.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('la sección META no contiene JSON');
  const meta = JSON.parse(metaRaw.slice(start, end + 1));
  return {
    ...meta,
    bodyMarkdown: stripFence(section(raw, SEC.es, SEC.en)),
    enBodyHtml: stripFence(section(raw, SEC.en, SEC.end))
  };
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
Devuelves ÚNICAMENTE un objeto JSON válido, sin texto alrededor y sin markdown.`;

const prompt = (topic) => `Escribe una entrada técnica de blog.

Tema: ${topic.title}
Enfoque: ${topic.angle}

Responde EXACTAMENTE con esta estructura, con los centinelas en su propia línea
y sin ningún texto fuera de las secciones:

${SEC.meta}
{"title":"titular en español, max 70 caracteres","excerpt":"resumen de 140-180 caracteres","seoTitle":"titulo SEO, max 60 caracteres","seoDescription":"meta description de 140-160 caracteres","tags":["3 a 5 etiquetas"],"enTitle":"el titular en ingles","enExcerpt":"el resumen en ingles","enSeoTitle":"titulo SEO en ingles, max 60 caracteres","enSeoDescription":"meta description en ingles, 140-160 caracteres"}
${SEC.es}
(aquí el cuerpo en Markdown, MINIMO ${MIN_WORDS} palabras, sin vallas de código alrededor de todo)
${SEC.en}
(aquí el mismo cuerpo traducido al inglés, en HTML simple)
${SEC.end}

El JSON de ${SEC.meta} debe ir en UNA sola línea y solo con valores cortos.
Los cuerpos van fuera del JSON, en texto plano.

Reglas del cuerpo (la extensión es un requisito, no una sugerencia):
- Empieza con un párrafo de respuesta directa de 40-60 palabras, antes de cualquier encabezado.
- Escribe EXACTAMENTE 6 encabezados ## en forma de pregunta, porque es lo que
  extraen los motores de respuesta.
- Cada una de esas 6 secciones debe tener AL MENOS 160 palabras: una respuesta
  concreta de 2-3 frases y después el desarrollo con detalle técnico real.
- Incluye al menos una lista y un bloque de código o una tabla.
- Cierra con "## Conclusión" y 3 puntos accionables.
- El cuerpo completo debe superar las ${MIN_WORDS} palabras. Cuenta antes de responder;
  si te quedas corto, amplía el desarrollo de cada sección con ejemplos concretos.
- En enBodyHtml usa solo estas etiquetas: h2, h3, p, ul, ol, li, strong, em, code, pre, table, thead, tbody, tr, th, td.`;

const generate = async (topic) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: SYSTEM },
        { role: 'user', content: prompt(topic) }
      ],
      temperature: 0.6,
      top_p: 0.9,
      max_tokens: 6000
    })
  });

  if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error('respuesta sin content (¿modelo de razonamiento?)');
  return parseResponse(content);
};

// ---------- validación ----------

const validate = (post, topic) => {
  const need = ['title', 'excerpt', 'seoTitle', 'seoDescription', 'tags', 'bodyMarkdown'];
  for (const k of need) {
    if (!post[k] || (Array.isArray(post[k]) ? !post[k].length : !String(post[k]).trim())) {
      throw new Error(`falta el campo "${k}"`);
    }
  }
  if (!Array.isArray(post.tags)) throw new Error('tags debe ser una lista');
  const n = words(post.bodyMarkdown);
  if (n < MIN_WORDS) throw new Error(`cuerpo de ${n} palabras, mínimo ${MIN_WORDS}`);
  if (!/^##\s/m.test(post.bodyMarkdown)) throw new Error('el cuerpo no tiene encabezados ##');
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
  let lastErr;
  for (let attempt = 0; attempt < BACKOFF_MS.length; attempt++) {
    if (BACKOFF_MS[attempt]) await sleep(BACKOFF_MS[attempt]);
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
      if (attempt < BACKOFF_MS.length - 1) {
        process.stdout.write(`reintento ${attempt + 1} (${err.message.slice(0, 80)}) … `);
      }
    }
  }
  if (lastErr) {
    console.log(`FALLO: ${lastErr.message}`);
    process.exitCode = 1;
  }
}

console.log(written.length ? `\nEscritos: ${written.join(', ')}` : '\nNo se escribió nada.');
if (!written.length) process.exitCode = 1;
