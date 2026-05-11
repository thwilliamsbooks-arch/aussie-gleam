import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Industries We Serve — Fleet Cleaning Queensland',
  description:
    'Aussie Gleam fleet cleaning serves transport, construction, tourism, government, healthcare and car rental industries across South East Queensland. Tailored fleet cleaning contracts from $70/vehicle.',
  alternates: { canonical: 'https://aussiegleam.com/industries/' },
};

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'Industries', url: 'https://aussiegleam.com/industries/' },
]);

const industries = [
  {
    icon: '🚛',
    name: 'Transport & Logistics',
    tagline: 'Trucks, vans, delivery & courier fleets',
    body: 'Your delivery fleet is your brand on the road. A clean, well-presented fleet builds trust with customers on every delivery and helps maintain driver pride. Aussie Gleam works with transport and logistics operators to provide scheduled exterior and interior cleaning at your depot, keeping every vehicle road-ready.',
    examples: ['Delivery vans', 'Courier vehicles', 'Light trucks', 'Refrigerated trucks', 'Semi-trailers (exterior)'],
  },
  {
    icon: '🏗️',
    name: 'Construction',
    tagline: 'Utes, machinery carriers & site vehicles',
    body: 'Construction sites are hard on vehicles. Heavy dust, mud, and grime builds up fast. A regular cleaning schedule keeps your utes, site vehicles, and equipment carriers presentable for client sites, council inspections, and driver safety. We work around your site hours and come to your yard.',
    examples: ['Utes & dual-cabs', 'Site supervisor vehicles', 'Machinery carriers', 'Concrete mixers (exterior)', 'Crew buses'],
  },
  {
    icon: '🏨',
    name: 'Tourism & Hospitality',
    tagline: 'Coaches, shuttles, hire cars & tour vehicles',
    body: 'First impressions matter in tourism. Whether you operate airport transfers, winery tours, or charter services, your guests judge the experience before they even board. Aussie Gleam keeps your tourism fleet spotless inside and out — because a clean vehicle is part of the service.',
    examples: ['Airport shuttles', 'Tour coaches', 'Charter vehicles', 'Hotel courtesy cars', 'Wine tour minibuses'],
  },
  {
    icon: '🏛️',
    name: 'Government & Council',
    tagline: 'Municipal fleets, council vehicles & government cars',
    body: 'Government fleets carry the weight of public perception. Council vehicles, government cars, and public service fleets require consistent, professional presentation. Aussie Gleam is fully insured and ABN-registered — meeting the compliance requirements of government procurement.',
    examples: ['Council utility vehicles', 'Government pool cars', 'Municipal trucks', 'Inspector vehicles', 'Parks & recreation vehicles'],
  },
  {
    icon: '🏥',
    name: 'Healthcare',
    tagline: 'Medical transport, ambulances & support vehicles',
    body: 'Healthcare vehicles require a higher standard of cleanliness than most. From non-emergency patient transport to support vehicle fleets, Aussie Gleam applies appropriate sanitisation standards to maintain hygiene and professional presentation.',
    examples: ['Patient transport vehicles', 'Community health cars', 'Mobile health unit support', 'Medical courier vans'],
  },
  {
    icon: '🚗',
    name: 'Car Rental & Hire',
    tagline: 'Hire fleets, car rental & leasing companies',
    body: 'Rental and hire vehicles need to be turned over quickly between customers in pristine condition. Aussie Gleam works with rental operators to provide rapid, high-quality full-detail turnarounds that keep your fleet earning and your customers satisfied.',
    examples: ['Hire cars', 'Campervan fleets', 'Prestige car hire', 'Equipment rental', 'Corporate lease fleets'],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <section className="pt-36 pb-20 relative" style={{ backgroundColor: '#060F1D' }}>
        <div className="absolute inset-0">
          <Image
            src="/bus-fleet-wash.png"
            alt="Aussie Gleam team cleaning a large bus fleet in Queensland"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,15,29,0.90) 0%, rgba(11,31,58,0.82) 100%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 30%, rgba(200,150,12,0.1) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Who We Serve</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 max-w-3xl">
            Fleet Cleaning Across Every Industry
          </h1>
          <p className="text-lg max-w-2xl mb-8 font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
            From logistics companies to government councils, Aussie Gleam provides professional fleet cleaning contracts tailored to each industry&apos;s specific needs, schedules, and standards.
          </p>
          <Link href="/fleet-contracts/" className="btn-primary">View Fleet Contract Options</Link>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className="grid lg:grid-cols-2 gap-10 items-start p-8 rounded-lg border"
                style={{ borderColor: '#E8EDF4', flexDirection: i % 2 === 1 ? 'row-reverse' : 'row' }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{ind.icon}</span>
                    <div>
                      <h2 className="font-serif text-2xl font-bold" style={{ color: '#0B1F3A' }}>{ind.name}</h2>
                      <p className="text-sm" style={{ color: '#5A7390' }}>{ind.tagline}</p>
                    </div>
                  </div>
                  <p className="leading-relaxed mb-6" style={{ color: '#5A7390' }}>{ind.body}</p>
                  <Link href="/request-a-quote/" className="btn-navy text-sm px-5 py-2.5">
                    Get a Fleet Quote
                  </Link>
                </div>
                <div className="p-6 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
                  <p className="section-label mb-4">Vehicle Types We Clean</p>
                  <ul className="space-y-2.5">
                    {ind.examples.map(e => (
                      <li key={e} className="flex items-center gap-3 text-sm">
                        <svg className="w-4 h-4 shrink-0" fill="none" stroke="#C8960C" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span style={{ color: '#1C2B3A' }}>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="py-0">
        <div className="relative w-full" style={{ height: '420px' }}>
          <Image
            src="/bus-fleet-wash.png"
            alt="Aussie Gleam team washing a large bus fleet in Queensland"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(11,31,58,0.8) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
            <p className="text-white font-serif text-2xl mb-2">Every Vehicle Type, Every Industry</p>
            <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>Aussie Gleam services everything from courier vans to buses and heavy trucks across South East Queensland.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Don&apos;t See Your Industry?</h2>
          <p className="font-sans mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
            If you operate a fleet of vehicles and need regular, professional cleaning, we can almost certainly help. Contact us with your requirements and we&apos;ll put together a tailored proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote/" className="btn-primary">Request a Custom Fleet Quote</Link>
            <a href="tel:0479070056" className="btn-outline">Call 0479 070 056</a>
          </div>
        </div>
      </section>
    </>
  );
}
