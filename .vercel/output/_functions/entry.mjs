import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DcGNNKJl.mjs';
import { manifest } from './manifest_DpSbJxBv.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/blog/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/en/about.astro.mjs');
const _page7 = () => import('./pages/en/blog/_slug_.astro.mjs');
const _page8 = () => import('./pages/en/blog.astro.mjs');
const _page9 = () => import('./pages/en/contact.astro.mjs');
const _page10 = () => import('./pages/en/services.astro.mjs');
const _page11 = () => import('./pages/en/work/_slug_.astro.mjs');
const _page12 = () => import('./pages/en/work.astro.mjs');
const _page13 = () => import('./pages/en.astro.mjs');
const _page14 = () => import('./pages/es/about.astro.mjs');
const _page15 = () => import('./pages/es/contact.astro.mjs');
const _page16 = () => import('./pages/es/services.astro.mjs');
const _page17 = () => import('./pages/es.astro.mjs');
const _page18 = () => import('./pages/privacy.astro.mjs');
const _page19 = () => import('./pages/robots.txt.astro.mjs');
const _page20 = () => import('./pages/rss.xml.astro.mjs');
const _page21 = () => import('./pages/terms.astro.mjs');
const _page22 = () => import('./pages/work/_slug_.astro.mjs');
const _page23 = () => import('./pages/work.astro.mjs');
const _page24 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/en/about.astro", _page6],
    ["src/pages/en/blog/[slug].astro", _page7],
    ["src/pages/en/blog/index.astro", _page8],
    ["src/pages/en/contact.astro", _page9],
    ["src/pages/en/services.astro", _page10],
    ["src/pages/en/work/[slug].astro", _page11],
    ["src/pages/en/work.astro", _page12],
    ["src/pages/en/index.astro", _page13],
    ["src/pages/es/about.astro", _page14],
    ["src/pages/es/contact.astro", _page15],
    ["src/pages/es/services.astro", _page16],
    ["src/pages/es/index.astro", _page17],
    ["src/pages/privacy.astro", _page18],
    ["src/pages/robots.txt.ts", _page19],
    ["src/pages/rss.xml.ts", _page20],
    ["src/pages/terms.astro", _page21],
    ["src/pages/work/[slug].astro", _page22],
    ["src/pages/work/index.astro", _page23],
    ["src/pages/index.astro", _page24]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a1592901-1fc2-4af3-9aca-0c2478a11891",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
