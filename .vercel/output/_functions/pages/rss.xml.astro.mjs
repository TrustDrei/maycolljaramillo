import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_BcwZgUJm.mjs';
import { a as SITE_ORIGIN, S as SITE } from '../chunks/site_Bh6d07jz.mjs';
export { renderers } from '../renderers.mjs';

async function GET() {
  const posts = await getCollection("blog");
  return rss({
    title: `${SITE.title} | Blog`,
    description: SITE.description,
    site: SITE_ORIGIN,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/blog/${post.slug}`
    })),
    customData: `<language>es</language>`
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
