// Company facts used in the Imprint, the footer and the structured data.
// Fields marked TODO must be filled before the site can be deployed:
// `npm run check:site` fails while any of them is empty.

export const site = {
  name: 'Elev8x',
  url: 'https://elev8x.eu',
  email: 'info@elev8x.eu',

  // Legal details for the Imprint (E-Commerce Directive, Art. 5), as entered in the
  // Commercial Register (ЕИК 207553468). The company is registered in Cyrillic; the
  // English and German pages show the official transliteration next to it.
  legalName: 'ELEVEYTEKS EOOD',
  legalNameRegistered: '„ЕЛЕВЕЙТЕКС“ ЕООД',
  legalForm: 'EOOD',
  address: {
    street: 'zh.k. Vazrazhdane, bl. 1A, vh. 2, et. 5',
    postalCode: '8000',
    city: 'Burgas',
    country: 'Bulgaria',
    countryCode: 'BG',
  },
  registry: {
    name: 'Commercial Register of the Republic of Bulgaria',
    id: '207553468',
  },
  vatId: '', // BG + ЕИК, only if the company is VAT-registered
  managingDirector: 'Tihomir Kirilov Yordanov',
  phone: '', // optional

  // The same details in Bulgarian, as registered, for the Bulgarian pages.
  bg: {
    street: 'ж.к. „Възраждане“, бл. 1А, вх. 2, ет. 5',
    city: 'Бургас',
    managingDirector: 'Тихомир Кирилов Йорданов',
  },

  // Where "Book a call" buttons lead. Empty = the contact page offers email only.
  bookingUrl: '', // e.g. a Cal.com or Microsoft Bookings link with an EU DPA

  // Cookieless analytics. Empty = no analytics script is loaded.
  cloudflareAnalyticsToken: '',

  // Profiles that identify the company (Organization sameAs in JSON-LD)
  sameAs: [
    // 'https://www.linkedin.com/company/elev8x',
    // 'https://clutch.co/profile/elev8x',
  ] as string[],

  founder: {
    name: 'Tihomir Yordanov',
    sameAs: ['https://github.com/tyordanovv'] as string[],
  },

  // Show Slavi on the About page once he has approved his profile text.
  showSlavi: false,

  areaServed: ['DE', 'AT', 'CH', 'BG'],
  languages: ['en', 'de', 'bg'] as const,
} as const;

export type Lang = (typeof site.languages)[number];

/** Required legal fields that must not be empty in production. */
export function missingLegalFields(): string[] {
  const missing: string[] = [];
  if (!site.legalName) missing.push('legalName');
  if (!site.address.street) missing.push('address.street');
  if (!site.address.postalCode) missing.push('address.postalCode');
  if (!site.address.city) missing.push('address.city');
  if (!site.registry.id) missing.push('registry.id (ЕИК)');
  if (!site.managingDirector) missing.push('managingDirector');
  return missing;
}

/** Imprint and footer details in the page's language. */
export function legalFor(lang: Lang) {
  const bg = lang === 'bg';
  return {
    name: bg ? site.legalNameRegistered : `${site.legalName} (${site.legalNameRegistered})`,
    shortName: bg ? site.legalNameRegistered : site.legalName,
    form: {
      en: 'sole-owner limited liability company under Bulgarian law',
      de: 'Einpersonen-GmbH nach bulgarischem Recht',
      bg: 'еднолично дружество с ограничена отговорност',
    }[lang],
    street: bg ? site.bg.street : site.address.street,
    postalCode: site.address.postalCode,
    city: bg ? site.bg.city : site.address.city,
    country: { en: 'Bulgaria', de: 'Bulgarien', bg: 'България' }[lang],
    director: bg ? site.bg.managingDirector : site.managingDirector,
    register: {
      en: 'Commercial Register of the Republic of Bulgaria',
      de: 'Handelsregister der Republik Bulgarien',
      bg: 'Търговски регистър към Агенцията по вписванията',
    }[lang],
  };
}
