const PERSON = {
  fullName: "Maycoll de Jesús Jaramillo Vanegas",
  shortName: "Maycoll Jaramillo",
  headline: {
    es: "Ingeniería de sistemas · SEO técnico · Accesibilidad · Performance",
    en: "Systems engineering · Technical SEO · Accessibility · Performance"
  },
  title: {
    es: "Ingeniero de Sistemas Senior",
    en: "Senior Systems Engineer"
  },
  location: "Managua, Nicaragua (UTC-6 · remote LATAM / EU / US)",
  email: "maycolljaramillo01@gmail.com",
  phone: "+505 5825 6796",
  social: {
    linkedin: "https://www.linkedin.com/in/maycolljaramillo/",
    github: "https://github.com/MaycollJaramillo01"
  }
};

const ENV_SITE = process.env.SITE_URL ?? "https://maycolljaramillo.com";
const SITE_ORIGIN = new URL(ENV_SITE).origin;
const SITE = {
  title: `${PERSON.shortName} - ${PERSON.title.es} - Technical SEO`,
  description: "Ingeniero de Sistemas Senior especializado en automatización, SEO técnico, accesibilidad y plataformas enterprise (AEM, WordPress, React, Firebase) para LATAM, España y EE. UU.",
  author: PERSON.fullName,
  role: `${PERSON.title.es} / ${PERSON.title.en}`,
  email: PERSON.email,
  phone: PERSON.phone,
  location: PERSON.location,
  social: {
    linkedin: PERSON.social.linkedin,
    github: PERSON.social.github
  }
};
const CONTACT_CTA = {
  primary: {
    label: "WhatsApp",
    href: "https://wa.me/50558256796"
  }};

export { CONTACT_CTA as C, PERSON as P, SITE as S, SITE_ORIGIN as a };
