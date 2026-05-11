import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { areas, getAreaBySlug } from '@/lib/areas';
import { breadcrumbSchema } from '@/lib/schema';

export async function generateStaticParams() {
  return areas.map(a => ({ area: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ area: string }> }): Promise<Metadata> {
  const { area } = await params;
  const data = getAreaBySlug(area);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `https://aussiegleam.com/service-areas/${data.slug}/` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const data = getAreaBySlug(area);
  if (!data) notFound();

  const BREADCRUMB_SCHEMA = breadcrumbSchema([
    { name: 'Home', url: 'https://aussiegleam.com/' },
    { name: 'Service Areas', url: 'https://aussiegleam.com/service-areas/' },
    { name: data.name, url: `https://aussiegleam.com/service-areas/${data.slug}/` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      {/* Hero */}
      <section className="pt-36 pb-20 relative" style={{ backgroundColor: '#060F1D' }}>
        <div className="absolute inset-0">
          <Image
            src="/bus-fleet-wash.png"
            alt={`Aussie Gleam fleet cleaning in ${data.name}`}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,15,29,0.88) 0%, rgba(11,31,58,0.78) 100%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(200,150,12,0.10) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/service-areas/" className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.5)' }}>Service Areas</Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.7)' }}>{data.name}</span>
          </div>
          <p className="section-label mb-3">Service Area</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 max-w-3xl">{data.h1}</h1>
          <p className="text-lg max-w-2xl mb-8 font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
            {data.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/request-a-quote/" className="btn-primary">Get a Quote in {data.name}</Link>
            <a href="tel:0479070056" className="btn-outline">Call 0479 070 056</a>
          </div>
        </div>
      </section>

      {/* Fleet + Detailing content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Fleet */}
            <div>
              <p className="section-label mb-3">Fleet Cleaning in {data.name}</p>
              <h2 className="text-3xl font-serif mb-5" style={{ color: '#0B1F3A' }}>
                Commercial Fleet Cleaning {data.name}
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#5A7390' }}>{data.fleetPara}</p>
              <div className="space-y-3 mb-8">
                {[
                  'Mobile service — we come to your premises',
                  'Fortnightly or monthly scheduling',
                  'Fleet pricing from $70 per vehicle',
                  'Fully insured (Allianz)',
                  'No lock-in contracts',
                ].map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="#C8960C" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ color: '#1C2B3A' }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/fleet-contracts/" className="btn-primary">View Fleet Contract Options</Link>
            </div>

            {/* Detailing */}
            <div>
              <p className="section-label mb-3">Car Detailing in {data.name}</p>
              <h2 className="text-3xl font-serif mb-5" style={{ color: '#0B1F3A' }}>
                Mobile Car Detailing {data.name}
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: '#5A7390' }}>{data.detailingPara}</p>
              <div className="grid grid-cols-1 gap-3 mb-8">
                {[
                  { name: 'Essential', price: 'From $219', desc: 'Full exterior & interior clean' },
                  { name: 'Elevated', price: 'From $299', desc: 'Adds steam clean & shampooing' },
                  { name: 'Pro', price: 'From $399', desc: 'Full restoration & machine polish' },
                ].map(pkg => (
                  <div key={pkg.name} className="flex items-center justify-between p-4 rounded-lg border" style={{ borderColor: '#E8EDF4' }}>
                    <div>
                      <p className="font-sans font-bold text-sm" style={{ color: '#0B1F3A' }}>{pkg.name}</p>
                      <p className="text-xs" style={{ color: '#5A7390' }}>{pkg.desc}</p>
                    </div>
                    <p className="font-serif font-bold text-lg" style={{ color: '#C8960C' }}>{pkg.price}</p>
                  </div>
                ))}
              </div>
              <Link href="/packages/" className="btn-navy">See All Packages</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs */}
      <section className="py-16" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Suburbs We Cover in {data.name}</p>
          <div className="flex flex-wrap gap-3">
            {data.suburbs.map(suburb => (
              <span key={suburb} className="px-4 py-2 rounded-full border text-sm font-sans font-medium" style={{ borderColor: '#E8EDF4', backgroundColor: 'white', color: '#1C2B3A' }}>
                {suburb}
              </span>
            ))}
            <span className="px-4 py-2 rounded-full border text-sm font-sans" style={{ borderColor: '#E8EDF4', backgroundColor: 'white', color: '#5A7390' }}>
              + more surrounding suburbs
            </span>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      {data.nearbyAreas.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="section-label mb-4">Nearby Service Areas</p>
            <div className="flex flex-wrap gap-4">
              {data.nearbyAreas.map(nearby => (
                <Link
                  key={nearby.slug}
                  href={`/service-areas/${nearby.slug}/`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border font-sans font-semibold text-sm transition-colors hover:text-gold"
                  style={{ borderColor: '#E8EDF4', color: '#0B1F3A' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="#C8960C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {nearby.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-white mb-4">
            Ready for a Quote in {data.name}?
          </h2>
          <p className="font-sans mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Get in touch and we will put together a tailored fleet or detailing quote for your {data.name} location within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote/" className="btn-primary">Request a Quote</Link>
            <a href="tel:0479070056" className="btn-outline">Call 0479 070 056</a>
          </div>
        </div>
      </section>
    </>
  );
}
