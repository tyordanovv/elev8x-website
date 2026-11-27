import { site } from '../config/site';
import type { Page } from './pages';
import { absolute } from './pages';

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;
const FOUNDER_ID = `${site.url}/#tihomir-yordanov`;

function organization() {
  const org: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    url: `${site.url}/`,
    logo: `${site.url}/assets/elev8x-logo.svg`,
    email: site.email,
    founder: { '@id': FOUNDER_ID },
    areaServed: site.areaServed,
    knowsLanguage: [...site.languages],
    slogan: 'Code first. AI where it pays.',
  };
  if (site.legalName) org.legalName = site.legalName;
  if (site.vatId) org.vatID = site.vatId;
  if (site.address.street) {
    org.address = {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.countryCode,
    };
  }
  if (site.sameAs.length) org.sameAs = site.sameAs;
  return org;
}

function founder() {
  return {
    '@type': 'Person',
    '@id': FOUNDER_ID,
    name: site.founder.name,
    jobTitle: 'Founder and engineering lead',
    worksFor: { '@id': ORG_ID },
    knowsLanguage: ['en', 'de', 'bg'],
    ...(site.founder.sameAs.length ? { sameAs: site.founder.sameAs } : {}),
  };
}

/** JSON-LD graph for a page. */
export function pageSchema(
  page: Page,
  crumbs: { name: string; path: string }[],
  ogImage: string,
): Record<string, unknown> {
  const d = page.data;
  const url = absolute(d.path);
  const graph: Record<string, unknown>[] = [
    organization(),
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      name: site.name,
      url: `${site.url}/`,
      inLanguage: [...site.languages],
      publisher: { '@id': ORG_ID },
    },
  ];

  const webPage: Record<string, unknown> = {
    '@type': d.type === 'page' && d.key === 'about' ? 'AboutPage' : d.key === 'contact' ? 'ContactPage' : 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: d.title,
    description: d.description,
    inLanguage: d.lang,
    isPartOf: { '@id': SITE_ID },
  };
  if (crumbs.length > 1) webPage.breadcrumb = { '@id': `${url}#breadcrumb` };
  graph.push(webPage);

  if (crumbs.length > 1) {
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: absolute(c.path),
      })),
    });
  }

  if (d.type === 'service' || d.type === 'role') {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: d.nav,
      serviceType: d.nav,
      description: d.description,
      url,
      provider: { '@id': ORG_ID },
      areaServed: site.areaServed,
      availableLanguage: [...site.languages],
    });
  }

  if (d.type === 'case') {
    graph.push({
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: d.h1,
      description: d.description,
      inLanguage: d.lang,
      url,
      image: ogImage,
      author: { '@id': FOUNDER_ID },
      publisher: { '@id': ORG_ID },
      ...(d.published ? { datePublished: d.published.toISOString().slice(0, 10) } : {}),
      ...(d.updated ? { dateModified: d.updated.toISOString().slice(0, 10) } : {}),
      mainEntityOfPage: { '@id': `${url}#webpage` },
    });
  }

  if (d.key === 'about' || d.key === 'home') graph.push(founder());

  if (d.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: d.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
