import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Service Areas — Fleet Cleaning & Car Detailing South East Queensland',
  description:
    'Aussie Gleam provides fleet cleaning and mobile car detailing across Brisbane, Logan, Gold Coast, Ipswich, Sunshine Coast and Scenic Rim. Based in Jimboomba, QLD.',
  alternates: { canonical: 'https://aussiegleam.com/service-areas/' },
};

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'Service Areas', url: 'https://aussiegleam.com/service-areas/' },
]);

const areas = [
  { slug: 'brisbane', name: 'Brisbane', desc: 'CBD, Southside, and Greater Brisbane fleet and detailing services.' },
  { slug: 'logan', name: 'Logan', desc: 'Logan City, Jimboomba, Springwood and surrounds — our home base.' },
  { slug: 'gold-coast', name: 'Gold Coast', desc: 'Southport to Coolangatta, hinterland and all Gold Coast suburbs.' },
  { slug: 'ipswich', name: 'Ipswich', desc: 'Ipswich City, Springfield, Goodna and surrounding areas.' },
  { slug: 'sunshine-coast', name: 'Sunshine Coast', desc: 'Fleet contracts across Caloundra to Noosa and the hinterland.' },
  { slug: 'scenic-rim', name: 'Scenic Rim', desc: 'Beaudesert, Boonah, Tamborine Mountain and the Scenic Rim region.' },
];

export default function ServiceAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <section className="pt-36 pb-20 relative" style={{ backgroundColor: '#060F1D' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1400&q=80"
            alt="South East Queensland aerial view"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,15,29,0.88) 0%, rgba(11,31,58,0.78) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Where We Work</p>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-6">
            Fleet Cleaning & Car Detailing Across South East Queensland
          </h1>
          <p className="text-lg max-w-2xl font-sans" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Based in Jimboomba, Aussie Gleam services South East Queensland from Brisbane to the Gold Coast, Ipswich to the Scenic Rim, and across to the Sunshine Coast.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {areas.map(area => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}/`}
                className="group p-8 bg-white rounded-lg border card-hover"
                style={{ borderColor: '#E8EDF4' }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(200,150,12,0.12)' }}>
                  <svg className="w-5 h-5" fill="none" stroke="#C8960C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl mb-2 transition-colors group-hover:text-gold" style={{ color: '#0B1F3A' }}>{area.name}</h2>
                <p className="text-sm mb-4" style={{ color: '#5A7390' }}>{area.desc}</p>
                <p className="text-xs font-bold" style={{ color: '#C8960C' }}>View {area.name} services →</p>
              </Link>
            ))}
          </div>

          <div className="p-8 rounded-lg text-center" style={{ backgroundColor: '#F5F7FA', border: '1px solid #E8EDF4' }}>
            <h2 className="text-2xl font-serif mb-3" style={{ color: '#0B1F3A' }}>Not Sure If We Cover Your Area?</h2>
            <p className="text-sm mb-6" style={{ color: '#5A7390' }}>
              Our service area continues to expand. If you are outside the regions listed, contact us — we may still be able to help, especially for fleet cleaning contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:0479070056" className="btn-primary text-sm px-6 py-2.5">Call 0479 070 056</a>
              <Link href="/request-a-quote/" className="btn-navy text-sm px-6 py-2.5">Submit an Enquiry</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
