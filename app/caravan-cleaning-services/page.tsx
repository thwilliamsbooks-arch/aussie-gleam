import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Caravan Detailing Services',
  description:
    'Mobile caravan, motorhome, RV and campervan cleaning across Gold Coast, Brisbane, Logan and Beaudesert. From $379 for up to 2 hours. Interior and exterior. Call 0479 070 056.',
  alternates: { canonical: 'https://aussiegleam.com/caravan-cleaning-services/' },
};

const SERVICE_SCHEMA = serviceSchema({
  name: 'Caravan Detailing Services',
  description: 'Mobile caravan, motorhome, RV and campervan cleaning across Gold Coast, Brisbane, Logan and Beaudesert. From $379 for up to 2 hours. Interior and exterior.',
  url: 'https://aussiegleam.com/caravan-cleaning-services/',
  priceRange: 'From $379',
});

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'Caravan Detailing Services', url: 'https://aussiegleam.com/caravan-cleaning-services/' },
]);

const interior = [
  'Deep upholstery and carpet cleaning',
  'Sanitisation of all surfaces',
  'Window and glass polishing',
  'Odour elimination treatment',
  'Kitchen and bathroom surface clean',
  'Blind and curtain wipe-down',
];

const exterior = [
  'High-pressure pre-rinse',
  'Full foam wash',
  'Hand wash and microfibre dry',
  'Roof and awning clean',
  'Protective waxing',
  'Wheel and tyre detailing',
];

export default function CaravanCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <section className="pt-36 pb-20 relative" style={{ background: 'linear-gradient(135deg, #060F1D 0%, #0B1F3A 100%)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Caravans & RVs</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 max-w-3xl">Caravan Detailing Services</h1>
          <p className="text-lg max-w-2xl mb-8 font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Professional mobile cleaning for caravans, motorhomes, campervans and RVs across Gold Coast, Brisbane, Logan, and Beaudesert. Eco-friendly products, thorough results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/request-a-quote/" className="btn-primary">Book Your Caravan Clean</Link>
            <a href="tel:0479070056" className="btn-outline">Call 0479 070 056</a>
          </div>
        </div>
      </section>

      {/* Caravan hero image */}
      <section className="py-0">
        <div className="relative w-full" style={{ height: '420px' }}>
          <Image
            src="https://images.unsplash.com/photo-1533591380348-14193f1de18f?auto=format&fit=crop&w=1400&q=80"
            alt="Motorhome parked in a beautiful Australian outdoor setting"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(11,31,58,0.88) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
            <p className="text-white font-serif text-3xl mb-2">Mobile Cleaning at Your Location</p>
            <p className="font-sans text-sm max-w-xl" style={{ color: 'rgba(255,255,255,0.72)' }}>We come to your driveway, storage site, or caravan park. No need to move your vehicle to us.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4" style={{ color: '#0B1F3A' }}>Campervan – RV – Motorhome Cleaning</h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#5A7390' }}>
              We clean all types of recreational vehicles. Whether it&apos;s a small campervan or a large motorhome, our mobile team brings everything needed for a complete detail.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-lg border" style={{ borderColor: '#E8EDF4' }}>
              <h3 className="font-serif text-2xl mb-6" style={{ color: '#0B1F3A' }}>Interior Caravan Cleaning</h3>
              <ul className="space-y-3">
                {interior.map(i => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="#C8960C" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: '#1C2B3A' }}>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-lg border" style={{ borderColor: '#E8EDF4' }}>
              <h3 className="font-serif text-2xl mb-6" style={{ color: '#0B1F3A' }}>Exterior Caravan Cleaning</h3>
              <ul className="space-y-3">
                {exterior.map(e => (
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

          {/* Pricing */}
          <div className="p-8 rounded-lg text-center border-2 max-w-2xl mx-auto" style={{ borderColor: '#C8960C', backgroundColor: '#F5F7FA' }}>
            <p className="section-label mb-3">Our Caravan Cleaning Prices</p>
            <p className="text-5xl font-serif font-bold mb-2" style={{ color: '#0B1F3A' }}>From $379</p>
            <p className="font-sans font-semibold mb-4" style={{ color: '#5A7390' }}>For up to 2 hours of cleaning</p>
            <p className="text-sm mb-6" style={{ color: '#5A7390' }}>Then $110 per hour thereafter. Pricing depends on vehicle size and condition.</p>
            <Link href="/request-a-quote/" className="btn-primary">Get a Quote for Your Van</Link>
          </div>
        </div>
      </section>

      {/* Why + Guarantee */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            {[
              { title: 'Attention to Detail', body: 'Every nook and cranny of your caravan or RV is attended to. No shortcuts, no half-measures.' },
              { title: 'Eco-Friendly Products', body: 'We use biodegradable, environmentally-responsible cleaning products throughout the service.' },
              { title: 'Service Guarantee', body: 'Not satisfied? Let us know within 48 hours and we will return to fix it at no extra cost.' },
            ].map(w => (
              <div key={w.title}>
                <h3 className="font-serif text-xl text-white mb-3">{w.title}</h3>
                <p className="text-sm font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>{w.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/request-a-quote/" className="btn-primary">Book Your Caravan Detail</Link>
          </div>
        </div>
      </section>
    </>
  );
}
