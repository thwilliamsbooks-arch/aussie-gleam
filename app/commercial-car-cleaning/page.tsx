import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Commercial Car Cleaning and Fleet Detailing Gold Coast',
  description:
    'Professional mobile fleet cleaning and commercial car cleaning across Gold Coast, Brisbane, Logan and Ipswich. Tailored fleet packages from $70 per vehicle. Fully insured. Family owned.',
  alternates: { canonical: 'https://aussiegleam.com/commercial-car-cleaning/' },
};

const features = [
  { title: 'Onsite Mobile Service', body: 'We bring our fully-equipped van to your depot, yard, or office car park. No transport required.' },
  { title: 'Fortnightly & Monthly Plans', body: 'Set-and-forget scheduling keeps your fleet consistently clean without any admin on your end.' },
  { title: 'Interior & Exterior Options', body: 'Choose from exterior-only washes or full interior/exterior deep cleans based on your needs and budget.' },
  { title: 'Wax, Polish & Protection', body: 'Advanced paint protection treatments available to extend the life of your fleet livery and paintwork.' },
  { title: 'Fully Insured Coverage', body: 'Every clean is covered by our Allianz insurance policy (Policy No: 132AN21172COM).' },
  { title: 'Competitive Fleet Rates', body: 'Volume discounts available for fleets of 10+ vehicles. Fleet contracts from $70 per vehicle.' },
];

const clients = ['Logistics & Delivery', 'Construction', 'Healthcare', 'Government', 'Tourism', 'Car Rental'];

const SERVICE_SCHEMA = serviceSchema({
  name: 'Commercial Car Cleaning and Fleet Detailing',
  description: 'Professional mobile fleet cleaning and commercial car cleaning across Gold Coast, Brisbane, Logan and Ipswich. Tailored fleet packages from $70 per vehicle. Fully insured.',
  url: 'https://aussiegleam.com/commercial-car-cleaning/',
  priceRange: 'From $70 per vehicle',
});

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'Commercial Car Cleaning', url: 'https://aussiegleam.com/commercial-car-cleaning/' },
]);

export default function CommercialCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      {/* Hero */}
      <section className="pt-36 pb-20 relative" style={{ backgroundColor: '#060F1D' }}>
        <div className="absolute inset-0">
          <Image
            src="/bus-fleet-wash.png"
            alt="Aussie Gleam team washing a large commercial bus — fleet cleaning Queensland"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,15,29,0.88) 0%, rgba(11,31,58,0.80) 100%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(200,150,12,0.1) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Fleet & Commercial</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 max-w-3xl">
            Commercial Car Cleaning Gold Coast
          </h1>
          <p className="text-lg max-w-2xl mb-8 font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Professional mobile fleet cleaning for businesses across the Gold Coast, Brisbane, Logan, and Beaudesert. We clean your vehicles at your premises — no disruption, no transport costs, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/request-a-quote/" className="btn-primary">Get a Fleet Quote</Link>
            <Link href="/fleet-contracts/" className="btn-outline">View Fleet Contracts</Link>
          </div>
        </div>
      </section>

      {/* Corporate Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-3">What's Included</p>
              <h2 className="text-4xl font-serif mb-6" style={{ color: '#0B1F3A' }}>Corporate Detailing Services</h2>
              <p className="leading-relaxed mb-5" style={{ color: '#5A7390' }}>
                Aussie Gleam provides tailored commercial cleaning programs for businesses of all sizes. Whether you operate 5 vehicles or 50, we design a cleaning schedule that keeps your fleet in top condition and your brand looking professional.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: '#5A7390' }}>
                Our mobile service eliminates the time and cost of taking vehicles off the road. We arrive at your location, fully equipped, and work efficiently around your operational hours.
              </p>
              <div className="p-6 rounded-lg border-l-4 mb-6" style={{ backgroundColor: '#F5F7FA', borderColor: '#C8960C' }}>
                <p className="font-sans font-bold text-sm mb-1" style={{ color: '#0B1F3A' }}>Fleet packages from $70 per vehicle</p>
                <p className="text-sm" style={{ color: '#5A7390' }}>Fortnightly or monthly scheduling available. Volume discounts for 10+ vehicle fleets.</p>
              </div>
              <Link href="/request-a-quote/" className="btn-primary">Request a Free Info Pack & Quote</Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {features.map(f => (
                <div key={f.title} className="flex gap-4 p-5 rounded-lg border" style={{ borderColor: '#E8EDF4' }}>
                  <div className="w-6 h-6 rounded-full shrink-0 mt-0.5 flex items-center justify-center" style={{ backgroundColor: 'rgba(200,150,12,0.15)' }}>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="#C8960C" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-bold text-sm mb-1" style={{ color: '#0B1F3A' }}>{f.title}</p>
                    <p className="text-sm" style={{ color: '#5A7390' }}>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Packages */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Pricing</p>
            <h2 className="text-4xl font-serif mb-4" style={{ color: '#0B1F3A' }}>Fleet Detailing Packages</h2>
            <p className="max-w-xl mx-auto" style={{ color: '#5A7390' }}>
              All packages delivered mobile to your location. Contact us for volume pricing on fleets of 10+ vehicles.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { name: 'Exterior Wash', price: 'From $70', desc: 'per vehicle', features: ['Foam pre-wash', 'Hand wash & rinse', 'Microfibre dry', 'Tyre dress'] },
              { name: 'Full Detail', price: 'From $120', desc: 'per vehicle', features: ['Full exterior wash', 'Interior vacuum', 'Surface wipe-down', 'Window clean', 'Tyre dress'], highlight: true },
              { name: 'Deep Clean', price: 'POA', desc: 'contact for quote', features: ['Full exterior & interior', 'Carpet shampoo', 'Upholstery steam clean', 'Engine bay', 'Polish & wax'] },
            ].map(pkg => (
              <div
                key={pkg.name}
                className="p-8 rounded-lg border"
                style={{
                  borderColor: pkg.highlight ? '#C8960C' : '#E8EDF4',
                  backgroundColor: pkg.highlight ? '#0B1F3A' : 'white',
                }}
              >
                <p className="font-sans font-bold text-xs tracking-widest uppercase mb-3" style={{ color: pkg.highlight ? '#E8B52A' : '#5A7390' }}>{pkg.name}</p>
                <p className="text-4xl font-serif font-bold mb-1" style={{ color: pkg.highlight ? 'white' : '#0B1F3A' }}>{pkg.price}</p>
                <p className="text-sm mb-6" style={{ color: pkg.highlight ? 'rgba(255,255,255,0.55)' : '#5A7390' }}>{pkg.desc}</p>
                <ul className="space-y-2.5">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke={pkg.highlight ? '#E8B52A' : '#C8960C'} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{ color: pkg.highlight ? 'rgba(255,255,255,0.8)' : '#1C2B3A' }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/request-a-quote/" className="btn-primary">Get a Custom Fleet Quote</Link>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Our Commercial Clients</p>
          <h2 className="text-3xl font-serif mb-8" style={{ color: '#0B1F3A' }}>Trusted by Industries Across Queensland</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {clients.map(c => (
              <span key={c} className="px-5 py-2.5 rounded-full border font-sans text-sm font-semibold" style={{ borderColor: '#E8EDF4', color: '#0B1F3A' }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="py-0">
        <div className="relative w-full" style={{ height: '420px' }}>
          <Image
            src="/truck-commercial.png"
            alt="Aussie Gleam team washing a heavy truck at a Queensland business depot"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(11,31,58,0.85) 100%)' }} />
        </div>
      </section>

      {/* About + CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-white mb-6">About Aussie Gleam</h2>
          <p className="font-sans leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.68)' }}>
            We are a family-operated mobile detailing business serving the Gold Coast, Brisbane, Logan, and Beaudesert. Fully insured through Allianz (ABN: 43 193 457 086), we bring professional-grade equipment directly to your business.
          </p>
          <p className="font-sans leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Contact us by phone or through the quote form to discuss your fleet requirements. We typically respond within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote/" className="btn-primary">Request a Quote</Link>
            <a href="tel:0479070056" className="btn-outline">Call 0479 070 056</a>
          </div>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Or email: info@aussiegleam.com</p>
        </div>
      </section>
    </>
  );
}
