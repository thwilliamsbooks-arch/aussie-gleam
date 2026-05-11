import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Testimonials — What Our Clients Say',
  description:
    'Read reviews from Aussie Gleam fleet cleaning and car detailing clients across Logan, Gold Coast, Brisbane and Ipswich. 5-star rated family-owned service.',
  alternates: { canonical: 'https://aussiegleam.com/testimonials/' },
};

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'Testimonials', url: 'https://aussiegleam.com/testimonials/' },
]);

const testimonials = [
  { name: 'Mark T.', company: 'Logistics Manager, Logan', stars: 5, service: 'Fleet Contract', quote: "Aussie Gleam has been maintaining our 24-vehicle delivery fleet for over a year. The team is reliable, thorough, and our vans always look immaculate. They show up on schedule every fortnight without fail — that consistency is priceless for a fleet operation." },
  { name: 'Steve R.', company: 'Site Manager, Ipswich', stars: 5, service: 'Fleet Contract', quote: "We needed a reliable fleet cleaner for our construction utes. Aussie Gleam turned up on time every fortnight without fail. Our vehicles look professional on client sites now, which reflects well on the business. Highly recommend." },
  { name: 'Jenny L.', company: 'Operations Manager, Gold Coast Tourism Co.', stars: 5, service: 'Fleet Contract', quote: "Incredible attention to detail on our fleet of hire vehicles. Guests always comment on how clean our vehicles are, and we have not had a single complaint about vehicle presentation since we started with Aussie Gleam. Worth every cent." },
  { name: 'David W.', company: 'Business Owner, Logan', stars: 5, service: 'Pro Detailing Package', quote: "Used the Pro package on my work car before a major client meeting. The transformation was unbelievable — looked like a brand new car. Will absolutely be using Aussie Gleam again. The team was professional, punctual, and the results spoke for themselves." },
  { name: 'Sarah M.', company: 'Private Client, Gold Coast', stars: 5, service: 'Elevated Package', quote: "I was honestly shocked at how good the car looked after the Elevated package. The upholstery steam clean removed stains I thought were permanent. Trent was great — professional, friendly, and clearly takes pride in his work." },
  { name: 'Tony K.', company: 'Fleet Manager, Brisbane', stars: 5, service: 'Commercial Cleaning', quote: "We run a fleet of 15 service vehicles and were having trouble finding a reliable commercial cleaner. Aussie Gleam came in, assessed our needs, and set up a monthly schedule that runs like clockwork. The invoicing process is simple and the quality is consistently high." },
  { name: 'Rachel B.', company: 'Private Client, Logan', stars: 5, service: 'Car Mould Removal', quote: "After some water got into my car during a storm, I had a serious mould problem. Aussie Gleam treated it thoroughly — the car smells completely fresh now and there has been no sign of mould returning. Professional service and very reasonable pricing." },
  { name: 'Greg P.', company: 'Caravan Owner, Beaudesert', stars: 5, service: 'Caravan Detailing', quote: "Had our motorhome detailed before a big trip — inside and out. The team did an incredible job, especially on the interior which was in pretty rough shape after a few years of use. Will definitely book again before next season." },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" fill="#C8960C" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <section className="pt-36 pb-20 relative" style={{ background: 'linear-gradient(135deg, #060F1D 0%, #0B1F3A 100%)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">Client Reviews</p>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-6">What Our Clients Say</h1>
          <p className="text-lg max-w-2xl mx-auto font-sans" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Don&apos;t take our word for it. Here&apos;s what businesses and individuals across South East Queensland have to say about Aussie Gleam.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b" style={{ borderColor: '#E8EDF4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
            {[
              { stat: '5★', label: 'Average Rating' },
              { stat: '100%', label: 'Would Recommend' },
              { stat: 'SEQ', label: 'Service Coverage' },
            ].map(s => (
              <div key={s.stat}>
                <p className="text-3xl font-serif font-bold mb-1" style={{ color: '#C8960C' }}>{s.stat}</p>
                <p className="text-sm font-sans" style={{ color: '#5A7390' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="p-8 bg-white rounded-lg border" style={{ borderColor: '#E8EDF4' }}>
                <div className="flex items-start justify-between mb-4">
                  <Stars count={t.stars} />
                  <span className="text-xs font-sans font-bold px-2 py-1 rounded" style={{ backgroundColor: 'rgba(200,150,12,0.1)', color: '#C8960C' }}>
                    {t.service}
                  </span>
                </div>
                <p className="text-sm leading-relaxed italic font-sans mb-6" style={{ color: '#1C2B3A' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t" style={{ borderColor: '#E8EDF4' }}>
                  <p className="font-sans font-bold text-sm" style={{ color: '#0B1F3A' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: '#5A7390' }}>{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="py-0">
        <div className="relative w-full" style={{ height: '360px' }}>
          <Image
            src="/fleet-depot-night.png"
            alt="Aussie Gleam team cleaning a commercial fleet at a Queensland depot"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(11,31,58,0.65)' }}>
            <div className="text-center px-4">
              <p className="text-white font-serif text-4xl mb-3">Trusted Across South East Queensland</p>
              <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.70)' }}>Businesses from Logan to the Gold Coast rely on Aussie Gleam for consistent, professional fleet cleaning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Join Our Happy Clients</h2>
          <p className="font-sans mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Experience the Aussie Gleam difference for yourself. Get a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote/" className="btn-primary">Get a Free Quote</Link>
            <a href="tel:0479070056" className="btn-outline">Call 0479 070 056</a>
          </div>
        </div>
      </section>
    </>
  );
}
