export interface AreaData {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  suburbs: string[];
  fleetPara: string;
  detailingPara: string;
  nearbyAreas: { name: string; slug: string }[];
}

export const areas: AreaData[] = [
  {
    slug: 'brisbane',
    name: 'Brisbane',
    metaTitle: 'Fleet Cleaning & Mobile Car Detailing Brisbane',
    metaDescription:
      'Professional mobile fleet cleaning and car detailing across Brisbane. Aussie Gleam serves businesses and residents from the CBD to the southside and greater Brisbane region. Call 0479 070 056.',
    h1: 'Fleet Cleaning & Mobile Car Detailing Brisbane',
    intro:
      'Aussie Gleam provides professional fleet cleaning and mobile car detailing across the greater Brisbane area. From the CBD to the southside and western suburbs, our mobile team comes to you — at your depot, office, or home — fully equipped and ready to deliver results.',
    suburbs: ['Brisbane CBD', 'South Brisbane', 'Sunnybank', 'Moorooka', 'Eight Mile Plains', 'Carindale', 'Forest Lake', 'Inala', 'Richlands', 'Acacia Ridge'],
    fleetPara:
      'Brisbane businesses trust Aussie Gleam for reliable, scheduled fleet cleaning that keeps their vehicles brand-ready. Whether you run 5 vehicles or 50, our mobile fleet cleaning contracts deliver consistent quality at competitive per-vehicle rates. We handle the scheduling, equipment, and supplies — you focus on running your business.',
    detailingPara:
      'For Brisbane residents, our mobile car detailing service delivers professional results without you leaving home or work. Our Essential, Elevated, and Pro packages cover everything from a thorough clean to a full machine polish and restoration treatment.',
    nearbyAreas: [
      { name: 'Logan', slug: 'logan' },
      { name: 'Ipswich', slug: 'ipswich' },
      { name: 'Gold Coast', slug: 'gold-coast' },
    ],
  },
  {
    slug: 'logan',
    name: 'Logan',
    metaTitle: 'Fleet Cleaning & Mobile Car Detailing Logan',
    metaDescription:
      'Aussie Gleam — Logan\'s local fleet cleaning and mobile car detailing specialists. Based in Jimboomba, serving all of Logan City including Springwood, Loganholme, and surrounds. Call 0479 070 056.',
    h1: 'Fleet Cleaning & Mobile Car Detailing Logan',
    intro:
      'Aussie Gleam is proudly based in Jimboomba and Logan City is our home. We know the area, we know our clients, and we have built a reputation for reliability and quality that speaks for itself across Logan and surrounds. Whether you are a local business with a fleet or a resident wanting a professional detail, we are your team.',
    suburbs: ['Jimboomba', 'Springwood', 'Loganholme', 'Beenleigh', 'Shailer Park', 'Marsden', 'Underwood', 'Slacks Creek', 'Daisy Hill', 'Tanah Merah'],
    fleetPara:
      'Logan businesses are the backbone of our fleet client base. We have been cleaning local delivery vans, construction utes, and trade fleets for years. Our Logan fleet contracts offer fortnightly or monthly scheduled cleaning at your site, with volume pricing from $70 per vehicle. No lock-in, no fuss.',
    detailingPara:
      'Logan residents have trusted Aussie Gleam for mobile car detailing since we started. We come to your home or workplace, bring everything we need, and deliver a professional result every time. Book the Essential, Elevated, or Pro package online or by calling Trent on 0479 070 056.',
    nearbyAreas: [
      { name: 'Brisbane', slug: 'brisbane' },
      { name: 'Gold Coast', slug: 'gold-coast' },
      { name: 'Scenic Rim', slug: 'scenic-rim' },
    ],
  },
  {
    slug: 'gold-coast',
    name: 'Gold Coast',
    metaTitle: 'Fleet Cleaning & Mobile Car Detailing Gold Coast',
    metaDescription:
      'Professional mobile fleet cleaning and car detailing across the Gold Coast — from Southport to Coolangatta, including Robina, Nerang, Mudgeeraba and the hinterland. Call 0479 070 056.',
    h1: 'Fleet Cleaning & Mobile Car Detailing Gold Coast',
    intro:
      'Aussie Gleam delivers professional fleet cleaning and mobile car detailing across the Gold Coast. From the northern Gold Coast through to Coolangatta and into the hinterland, our mobile team services businesses and residents across the region with the same high standard on every job.',
    suburbs: ['Southport', 'Surfers Paradise', 'Robina', 'Nerang', 'Mudgeeraba', 'Varsity Lakes', 'Burleigh Heads', 'Broadbeach', 'Coomera', 'Ormeau'],
    fleetPara:
      'The Gold Coast is home to a large tourism, hospitality, and construction fleet market — and Aussie Gleam is proud to serve it. We clean hire car fleets, tour operator vehicles, resort courtesy cars, and construction site utes. Our Gold Coast fleet contracts are tailored to your industry and schedule.',
    detailingPara:
      'Gold Coast car owners have come to rely on Aussie Gleam for mobile detailing that matches the standard of their vehicles. Whether it is a pre-sale clean on a prestige car or a regular maintenance detail, we bring the same care and quality to every job across the Gold Coast.',
    nearbyAreas: [
      { name: 'Logan', slug: 'logan' },
      { name: 'Brisbane', slug: 'brisbane' },
      { name: 'Scenic Rim', slug: 'scenic-rim' },
    ],
  },
  {
    slug: 'ipswich',
    name: 'Ipswich',
    metaTitle: 'Fleet Cleaning & Mobile Car Detailing Ipswich',
    metaDescription:
      'Mobile fleet cleaning and car detailing across Ipswich, Springfield, Goodna and surrounds. Aussie Gleam serves Ipswich businesses and residents with professional scheduled cleaning. Call 0479 070 056.',
    h1: 'Fleet Cleaning & Mobile Car Detailing Ipswich',
    intro:
      'Aussie Gleam extends its fleet cleaning and mobile car detailing services across Ipswich and the greater Ipswich region. A growing industrial and residential hub, Ipswich is home to many of the trade, construction, and logistics businesses that form the core of our fleet client base.',
    suburbs: ['Ipswich CBD', 'Springfield', 'Goodna', 'Redbank', 'Rosewood', 'Yamanto', 'Leichhardt', 'Camira', 'Booval', 'Brassall'],
    fleetPara:
      'Ipswich is one of South East Queensland\'s fastest-growing industrial and commercial centres, and Aussie Gleam is proud to support businesses here with professional fleet cleaning. From trade utes to delivery vans and construction vehicles, we provide reliable, scheduled cleaning at your site.',
    detailingPara:
      'Ipswich residents can book our full range of mobile car detailing packages. We come to you, fully equipped, and deliver a professional result that matches our Gold Coast and Logan clients. Contact us to check availability in your specific Ipswich suburb.',
    nearbyAreas: [
      { name: 'Brisbane', slug: 'brisbane' },
      { name: 'Logan', slug: 'logan' },
      { name: 'Scenic Rim', slug: 'scenic-rim' },
    ],
  },
  {
    slug: 'sunshine-coast',
    name: 'Sunshine Coast',
    metaTitle: 'Fleet Cleaning Sunshine Coast — Commercial Car Cleaning',
    metaDescription:
      'Commercial fleet cleaning across the Sunshine Coast for transport, tourism and trade fleets. Aussie Gleam serves Caloundra to Noosa with scheduled fleet cleaning contracts. Enquire today.',
    h1: 'Fleet Cleaning Sunshine Coast',
    intro:
      'Aussie Gleam provides fleet cleaning contracts across the Sunshine Coast for businesses that need consistent, reliable vehicle maintenance. Our Sunshine Coast service is primarily focused on fleet and commercial cleaning — bringing our professional mobile service to your depot or premises across the region.',
    suburbs: ['Caloundra', 'Maroochydore', 'Noosa', 'Nambour', 'Buderim', 'Sippy Downs', 'Coolum Beach', 'Peregian Beach', 'Mooloolaba', 'Kawana'],
    fleetPara:
      'The Sunshine Coast has a strong tourism, trade, and property services sector — all with significant vehicle fleet requirements. Aussie Gleam works with Sunshine Coast businesses to establish regular fleet cleaning schedules that keep vehicles looking professional, whether that is fortnightly maintenance washes or monthly full details.',
    detailingPara:
      'Mobile car detailing on the Sunshine Coast is available based on scheduling and location. Contact us to discuss your detailing requirements and confirm availability in your area — we are actively expanding our Sunshine Coast coverage.',
    nearbyAreas: [
      { name: 'Brisbane', slug: 'brisbane' },
      { name: 'Logan', slug: 'logan' },
    ],
  },
  {
    slug: 'scenic-rim',
    name: 'Scenic Rim',
    metaTitle: 'Fleet Cleaning & Car Detailing Scenic Rim — Beaudesert & Surrounds',
    metaDescription:
      'Mobile fleet cleaning and car detailing across the Scenic Rim — Beaudesert, Boonah, Tamborine Mountain and surrounds. Aussie Gleam is your local vehicle cleaning specialist. Call 0479 070 056.',
    h1: 'Fleet Cleaning & Car Detailing Scenic Rim',
    intro:
      'Aussie Gleam serves the Scenic Rim region with professional mobile fleet cleaning and car detailing. Being based in Jimboomba, we have long-standing relationships with Beaudesert businesses and residents — and understand the specific needs of the agricultural, tourism, and trade sectors that operate in this region.',
    suburbs: ['Beaudesert', 'Boonah', 'Tamborine Mountain', 'Harrisville', 'Canungra', 'Kooralbyn', 'Roadvale', 'Aratula', 'Kalbar', 'Peak Crossing'],
    fleetPara:
      'The Scenic Rim\'s agricultural, tourism, and trade businesses often operate significant vehicle fleets in demanding conditions. Aussie Gleam provides fleet cleaning contracts tailored to the Scenic Rim\'s requirements — from regular exterior washes on farm and trade vehicles to full detail services for tourism and hospitality fleets.',
    detailingPara:
      'Scenic Rim residents — including Beaudesert and Tamborine Mountain locals — can book mobile car detailing with Aussie Gleam. Our team travels to you and delivers the same professional results as our Gold Coast and Logan clients. Contact us to confirm availability and scheduling for your area.',
    nearbyAreas: [
      { name: 'Logan', slug: 'logan' },
      { name: 'Gold Coast', slug: 'gold-coast' },
      { name: 'Ipswich', slug: 'ipswich' },
    ],
  },
];

export function getAreaBySlug(slug: string): AreaData | undefined {
  return areas.find(a => a.slug === slug);
}
