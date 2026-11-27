// Company facts used in the Imprint, the footer and the structured data.
// Fields marked TODO must be filled before the site can be deployed:
// `npm run check:site` fails while any of them is empty.

export const site = {
  name: 'Elev8x',
  url: 'https://elev8x.eu',
  email: 'info@elev8x.eu',

  // Legal details for the Imprint (E-Commerce Directive, Art. 5)
  legalName: '', // TODO: registered company name, e.g. "Elev8x EOOD"
  legalForm: '', // TODO: e.g. "EOOD" / "OOD"
  address: {
    street: '', // TODO
    postalCode: '', // TODO
    city: '', // TODO
    country: 'Bulgaria',
    countryCode: 'BG',
  },
  registry: {
    name: 'Commercial Register of the Republic of Bulgaria',
    id: '', // TODO: ЕИК / UIC
  },
  vatId: '', // TODO: BG + ЕИК, if VAT-registered
  managingDirector: '', // TODO: name of the managing director
  phone: '', // optional

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
