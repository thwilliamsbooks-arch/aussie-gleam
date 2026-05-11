import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Pre Sale Car Detailing Gold Coast',
  description:
    'Mobile pre-sale car detailing across the Gold Coast, Logan and Beaudesert. Maximise your vehicle\'s sale value. Elevated from $299, Pro from $399. Book online or call 0479 070 056.',
  alternates: { canonical: 'https://aussiegleam.com/pre-sale-car-detailing/' },
};

const SERVICE_SCHEMA = serviceSchema({
  name: 'Pre-Sale Car Detailing Gold Coast',
  description: 'Mobile pre-sale car detailing across the Gold Coast, Logan and Beaudesert. Maximise your vehicle\'s sale value with a professional detail before it goes to market.',
  url: 'https://aussiegleam.com/pre-sale-car-detailing/',
  priceRange: 'From $299 per vehicle',
});

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'Pre-Sale Car Detailing', url: 'https://aussiegleam.com/pre-sale-car-detailing/' },
]);

const whyPreSale = [
  { title: 'Increase Sale Price', body: 'A professionally detailed car consistently achieves a higher private sale or trade-in price. The detail pays for itself.' },
  { title: 'Sell Faster', body: 'Clean, fresh-smelling vehicles attract more buyer interest and sell in less time on the market.' },
  { title: 'First Impressions Count', body: 'Buyers form an opinion within seconds of seeing a car. A clean car signals it has been well cared for.' },
  { title: 'Photography-Ready', body: 'A fully detailed car photographs beautifully for online listings, driving more enquiries.' },
];

export default function PreSaleDetailingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <section className="pt-36 pb-20 relative" style={{ backgroundColor: '#060F1D' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1400&q=80"
            alt="Professional car detailing — polishing a vehicle to a showroom finish"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,15,29,0.90) 0%, rgba(11,31,58,0.82) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Sell for More</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 max-w-3xl">
            Pre Sale Car Detailing Gold Coast
          </h1>
          <p className="text-lg max-w-2xl mb-8 font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Maximise your vehicle&apos;s sale value with a professional mobile detail before it goes to market. We serve Logan, Beaudesert, Gold Coast and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/request-a-quote/" className="btn-primary">Book a Pre-Sale Detail</Link>
            <a href="tel:0479070056" className="btn-outline">Call 0479 070 056</a>
          </div>
        </div>
      </section>

      {/* Why pre-sale */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-3">Logan & Beaudesert</p>
              <h2 className="text-4xl font-serif mb-6" style={{ color: '#0B1F3A' }}>Why Pre-Sale Detailing?</h2>
              <p className="leading-relaxed mb-8" style={{ color: '#5A7390' }}>
                Before you list your car for sale, a professional detail is one of the highest-ROI investments you can make. Buyers judge a car&apos;s condition by its cleanliness — a spotless interior and gleaming exterior signals a well-maintained vehicle and justifies a premium price.
              </p>
              <div className="space-y-5">
                {whyPreSale.map(w => (
                  <div key={w.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(200,150,12,0.12)' }}>
                      <svg className="w-4 h-4" fill="none" stroke="#C8960C" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans font-bold text-sm mb-1" style={{ color: '#0B1F3A' }}>{w.title}</p>
                      <p className="text-sm leading-relaxed" style={{ color: '#5A7390' }}>{w.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="section-label mb-4">Our Pre Sale Car Detailing Prices</p>
              {[
                { name: 'Elevated Package', price: '$299+', features: ['Foam wash & hand dry', 'Full interior vacuum', 'Upholstery steam clean', 'Interior surface clean', 'Window clean', 'Tyre dress'] },
                { name: 'Pro Package', price: '$399+', features: ['Everything in Elevated', 'Spot stain treatment', 'Deep brush agitation', 'Engine bay clean', 'Machine polish'], highlight: true },
              ].map(pkg => (
                <div key={pkg.name} className="p-7 rounded-lg border" style={{ borderColor: pkg.highlight ? '#C8960C' : '#E8EDF4', backgroundColor: pkg.highlight ? '#0B1F3A' : 'white' }}>
                  <div className="flex justify-between items-start mb-4">
                    <p className="font-serif font-bold text-xl" style={{ color: pkg.highlight ? 'white' : '#0B1F3A' }}>{pkg.name}</p>
                    <p className="font-serif font-bold text-2xl" style={{ color: '#C8960C' }}>{pkg.price}</p>
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke={pkg.highlight ? '#E8B52A' : '#C8960C'} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span style={{ color: pkg.highlight ? 'rgba(255,255,255,0.8)' : '#1C2B3A' }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="p-5 rounded-lg" style={{ backgroundColor: '#F5F7FA', border: '1px solid #E8EDF4' }}>
                <p className="text-sm font-sans" style={{ color: '#5A7390' }}>
                  <strong style={{ color: '#0B1F3A' }}>Note:</strong> Pre-sale packages require access to power and water. Maintenance pricing ($149–$169) available for repeat bookings within one month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image */}
      <section className="py-0">
        <div className="relative w-full" style={{ height: '400px' }}>
          <Image
            src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1400&q=80"
            alt="Professional car detailing — machine polishing a vehicle to a showroom finish"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(11,31,58,0.75) 0%, rgba(11,31,58,0.30) 60%, transparent 100%)' }} />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-white font-serif text-3xl mb-2 max-w-md">A Professional Detail That Pays for Itself</p>
              <p className="font-sans text-sm max-w-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>Buyers judge a car within seconds. A spotless vehicle commands a higher price and sells faster.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Savings reminder */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Ready to Maximise Your Sale Price?</h2>
          <p className="font-sans mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Book your pre-sale detail today. We serve Logan, Beaudesert, Gold Coast and surrounding areas. Contact us to confirm availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote/" className="btn-primary">Book Now</Link>
            <a href="tel:0479070056" className="btn-outline">0479 070 056</a>
          </div>
        </div>
      </section>
    </>
  );
}
