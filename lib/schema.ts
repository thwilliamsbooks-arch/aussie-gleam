/* ── Shared schema helpers for Aussie Gleam ── */

const SITE_URL  = 'https://aussiegleam.com';
const LOGO_URL  = `${SITE_URL}/logo.png`;
const PHONE     = '+61479070056';
const EMAIL     = 'info@aussiegleam.com';

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Jimboomba',
  addressLocality: 'Jimboomba',
  addressRegion: 'QLD',
  postalCode: '4280',
  addressCountry: 'AU',
};

const AREA_SERVED = [
  { '@type': 'City', name: 'Brisbane' },
  { '@type': 'City', name: 'Logan' },
  { '@type': 'City', name: 'Gold Coast' },
  { '@type': 'City', name: 'Ipswich' },
  { '@type': 'City', name: 'Sunshine Coast' },
  { '@type': 'AdministrativeArea', name: 'Scenic Rim' },
];

/** LocalBusiness schema — goes on every page */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoWash'],
    '@id': `${SITE_URL}/#business`,
    name: 'Aussie Gleam',
    description:
      "Queensland's trusted mobile fleet cleaning and car detailing specialists. Serving Brisbane, Logan, Gold Coast, Ipswich, Sunshine Coast and Scenic Rim. Family owned, fully insured.",
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    telephone: PHONE,
    email: EMAIL,
    address: ADDRESS,
    areaServed: AREA_SERVED,
    priceRange: '$$',
    currenciesAccepted: 'AUD',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    foundingDate: '2020',
    identifier: [
      { '@type': 'PropertyValue', name: 'ABN', value: '43 193 457 086' },
      { '@type': 'PropertyValue', name: 'InsurancePolicyNumber', value: '132AN21172COM' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Aussie Gleam Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fleet Cleaning Contracts' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Car Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Car Detailing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pre-Sale Car Detailing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Car Mould Removal' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Caravan Detailing' } },
      ],
    },
  };
}

/** Service schema for individual service pages */
export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
  priceRange?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Aussie Gleam',
      telephone: PHONE,
      address: ADDRESS,
    },
    areaServed: AREA_SERVED,
    ...(opts.priceRange ? { offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'AUD', description: opts.priceRange } } } : {}),
  };
}

/** BreadcrumbList schema */
export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/** FAQPage schema */
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}
