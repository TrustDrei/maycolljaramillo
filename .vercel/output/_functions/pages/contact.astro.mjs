import { b as createAstro, c as createComponent } from '../chunks/astro/server_DNhOidXD.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://maycolljaramillo.com");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return Astro2.redirect("/es/contact");
}, "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Mayco/Desktop/maycolljaramillo/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
