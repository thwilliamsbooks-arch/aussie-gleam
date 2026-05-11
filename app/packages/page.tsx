import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Car Detailing Packages',
  description:
    'Mobile car detailing packages across Logan and Gold Coast. Essential from $219, Elevated from $299, Pro from $399. Maintenance pricing from $139 for repeat bookings. Book online.',
  alternates: { canonical: 'https://aussiegleam.com/packages/' },
};

const SERVICE_SCHEMA = serviceSchema({
  name: 'Car Detailing Packages',
  description: 'Mobile car detailing packages across Logan and Gold Coast. Essential from $219, Elevated from $299, Pro from $399. Maintenance pricing from $139 for repeat bookings.',
  url: 'https://aussiegleam.com/packages/',
  priceRange: 'From $219 per vehicle',
});

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'Car Detailing Packages', url: 'https://aussiegleam.com/packages/' },
]);

const packages = [
  {
    name: 'Essential',
    price: 'From $219',
    tagline: 'A thorough refresh for everyday cars',
    features: [
      'Foam pre-wash & hand wash',
      'Microfibre hand dry',
      'Full interior vacuum',
      'Dashboard & surface wipe-down',
      'Window clean (interior & exterior)',
      'Tyre & wheel clean',
      'Tyre dressing',
    ],
  },
  {
    name: 'Elevated',
    price: 'From $299',
    tagline: 'Our most popular package',
    highlight: true,
    features: [
      'Everything in Essential',
      'Carpet shampooing',
      'Upholstery steam cleaning',
      'Leather conditioning (if applicable)',
      'Door jamb cleaning',
      'Exhaust tip polish',
    ],
  },
  {
    name: 'Pro',
    price: 'From $399',
    tagline: 'The full restoration treatment',
    features: [
      'Everything in Elevated',
      'Spot stain treatment',
      'Deep brush agitation',
      'Engine bay clean',
      'Clay bar treatment',
      'Machine polish & wax',
    ],
  },
];

const extras = [
  { name: 'Headlight Restoration', price: '$169' },
  { name: 'Engine Bay Cleaning', price: '$169' },
  { name: 'Leather Protection', price: '$159' },
  { name: 'Odour Elimination', price: '$89' },
  { name: 'Pet Hair Removal', price: 'From $60' },
];

const maintenance = [
  { name: 'Maintenance Essential', price: '$139', note: 'Booked within 1 month' },
  { name: 'Maintenance Elevated', price: '$159', note: 'Booked within 1 month' },
];

export default function PackagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      {/* Hero */}
      <section className="pt-36 pb-20 relative" style={{ backgroundColor: '#060F1D' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80"
            alt="Mobile car detailing — professional hand wash and detail service"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,15,29,0.92) 0%, rgba(11,31,58,0.85) 100%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(200,150,12,0.1) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">Car Detailing</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">Car Detailing Packages</h1>
          <p className="text-lg max-w-2xl mx-auto font-sans leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Mobile car detailing delivered to your home, workplace or anywhere across Logan and the Gold Coast. Professional results, zero hassle.
          </p>
          <Link href="/request-a-quote/" className="btn-primary">Book Your Detail</Link>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Our Packages</p>
            <h2 className="text-4xl font-serif mb-4" style={{ color: '#0B1F3A' }}>Our Car Detailing Service Packages</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {packages.map(pkg => (
              <div
                key={pkg.name}
                className="rounded-lg p-8 border"
                style={{
                  borderColor: pkg.highlight ? '#C8960C' : '#E8EDF4',
                  backgroundColor: pkg.highlight ? '#0B1F3A' : 'white',
                  position: 'relative',
                }}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: '#C8960C' }}>
                    Most Popular
                  </div>
                )}
                <p className="font-sans font-bold tracking-widest uppercase text-xs mb-2" style={{ color: pkg.highlight ? '#E8B52A' : '#5A7390' }}>{pkg.name}</p>
                <p className="text-4xl font-serif font-bold mb-1" style={{ color: pkg.highlight ? 'white' : '#0B1F3A' }}>{pkg.price}</p>
                <p className="text-sm mb-6" style={{ color: pkg.highlight ? 'rgba(255,255,255,0.5)' : '#5A7390' }}>{pkg.tagline}</p>
                <ul className="space-y-3">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke={pkg.highlight ? '#E8B52A' : '#C8960C'} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{ color: pkg.highlight ? 'rgba(255,255,255,0.8)' : '#1C2B3A' }}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link href="/request-a-quote/" className={pkg.highlight ? 'btn-primary w-full justify-center' : 'btn-navy w-full justify-center'}>
                    Book This Package
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Maintenance */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif mb-2 text-center" style={{ color: '#0B1F3A' }}>SAVE With Our Maintenance Packages</h2>
            <p className="text-center text-sm mb-8" style={{ color: '#5A7390' }}>Book your next detail within one month and save with our maintenance pricing.</p>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {maintenance.map(m => (
                <div key={m.name} className="p-6 rounded-lg border text-center" style={{ borderColor: '#E8EDF4', backgroundColor: '#F5F7FA' }}>
                  <p className="font-serif font-bold text-2xl mb-1" style={{ color: '#C8960C' }}>{m.price}</p>
                  <p className="font-sans font-semibold text-sm mb-1" style={{ color: '#0B1F3A' }}>{m.name}</p>
                  <p className="text-xs" style={{ color: '#5A7390' }}>{m.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Extras */}
          <div>
            <h2 className="text-3xl font-serif mb-8 text-center" style={{ color: '#0B1F3A' }}>Car Detailing Extra Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
              {extras.map(e => (
                <div key={e.name} className="p-5 rounded-lg border text-center" style={{ borderColor: '#E8EDF4' }}>
                  <p className="font-serif font-bold text-xl mb-1" style={{ color: '#C8960C' }}>{e.price}</p>
                  <p className="text-xs font-sans font-semibold" style={{ color: '#0B1F3A' }}>{e.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="py-0">
        <div className="relative w-full" style={{ height: '380px' }}>
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80"
            alt="Professional mobile car detailing — hand washing a vehicle to a mirror finish"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(11,31,58,0.80) 0%, rgba(11,31,58,0.35) 50%, transparent 100%)' }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-white font-serif text-3xl mb-2 max-w-md">Professional Results, Delivered to Your Door</p>
              <p className="font-sans text-sm max-w-xs" style={{ color: 'rgba(255,255,255,0.72)' }}>Every detail performed by our trained team using professional-grade products. Your vehicle, your location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why + discount */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            {[
              { title: 'Support Local', body: 'Family-owned Australian business. Every booking supports a local family, not a franchise.' },
              { title: 'Attention to Detail', body: 'We do not cut corners. Every nook, cranny and crevice is attended to before we consider a job done.' },
              { title: 'Convenience', body: 'We come to you. Book online, we arrive with everything we need — water, power, equipment.' },
            ].map(w => (
              <div key={w.title}>
                <h3 className="font-serif text-xl text-white mb-3">{w.title}</h3>
                <p className="text-sm font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.58)' }}>{w.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center p-8 rounded-lg border" style={{ borderColor: 'rgba(200,150,12,0.4)', backgroundColor: 'rgba(200,150,12,0.08)' }}>
            <p className="text-2xl font-serif text-white mb-2">Get $10 Off Your Next Service</p>
            <p className="text-sm font-sans mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>Mention this offer when you book. One per customer.</p>
            <Link href="/request-a-quote/" className="btn-primary">Claim Your $10 Discount</Link>
          </div>
        </div>
      </section>
    </>
  );
}
