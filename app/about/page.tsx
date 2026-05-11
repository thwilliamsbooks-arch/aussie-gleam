import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Aussie Gleam — Family Owned Fleet Cleaning Queensland',
  description:
    'Aussie Gleam is a family-owned mobile fleet cleaning and car detailing business based in Jimboomba, Queensland. Fully insured through Allianz. ABN: 43 193 457 086.',
  alternates: { canonical: 'https://aussiegleam.com/about/' },
};

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'About', url: 'https://aussiegleam.com/about/' },
]);

const values = [
  {
    title: 'Attention to Detail',
    body: 'We do not cut corners. Every vehicle we clean receives the same standard of care — whether it\'s one car or an entire fleet. If something is not right, we fix it.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Reliability',
    body: 'We show up when we say we will. Fleet clients depend on us for regular, scheduled cleans — and we take that responsibility seriously. No cancellations, no no-shows.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    body: 'We are transparent about pricing, honest about what is possible, and accountable for the quality of our work. No hidden fees, no inflated quotes.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Community',
    body: 'We are proud to operate as a local South East Queensland business. We support our community and donate a portion of profits to Australian wildlife conservation.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      {/* Hero */}
      <section className="pt-36 pb-20 relative" style={{ backgroundColor: '#060F1D' }}>
        <div className="absolute inset-0">
          <Image
            src="/fleet-depot-night.png"
            alt="Aussie Gleam fleet cleaning team at work"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,15,29,0.90) 0%, rgba(11,31,58,0.80) 100%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 40% 40%, rgba(200,150,12,0.10) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Our Story</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 max-w-3xl">
            Driven by Passion, Guided by Purpose
          </h1>
          <p className="text-lg max-w-2xl mb-8 font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Aussie Gleam is a family-owned mobile cleaning business built on hard work, honesty, and a genuine love for making vehicles look their best.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-3">Who We Are</p>
              <h2 className="text-4xl font-serif mb-6" style={{ color: '#0B1F3A' }}>A Family Business at Heart</h2>
              <div className="prose-gleam">
                <p>
                  Aussie Gleam was born from a simple belief: that every vehicle deserves to be properly looked after, and that every business deserves a cleaning partner they can genuinely rely on. We are a family-operated business based in Jimboomba, serving communities from Logan through to the Gold Coast, Brisbane, Ipswich, and the Scenic Rim.
                </p>
                <p>
                  Trent and Linda Williams founded Aussie Gleam with a focus on quality, consistency, and genuine customer care. What started as mobile car detailing quickly grew into a full fleet cleaning operation as local businesses discovered the value of a reliable, professional cleaning partner they could trust.
                </p>
                <p>
                  Today, Aussie Gleam services dozens of business fleet accounts alongside individual car detailing clients — all with the same family-owned attention to detail that defined us from day one.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'ABN', value: '43 193 457 086' },
                  { label: 'Insurance', value: 'Allianz (132AN21172COM)' },
                  { label: 'Based in', value: 'Jimboomba, QLD' },
                  { label: 'Service Area', value: 'South East Queensland' },
                ].map(d => (
                  <div key={d.label} className="p-4 rounded-lg" style={{ backgroundColor: '#F5F7FA' }}>
                    <p className="text-xs font-sans font-bold tracking-widest uppercase mb-1" style={{ color: '#C8960C' }}>{d.label}</p>
                    <p className="text-sm font-sans font-semibold" style={{ color: '#0B1F3A' }}>{d.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden shadow-lg" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/trent-williams.jpg"
                  alt="Trent Williams, owner of Aussie Gleam, in front of a vehicle at his Queensland depot"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 rounded-lg text-center" style={{ backgroundColor: '#F5F7FA', border: '1px solid #E8EDF4' }}>
                <p className="font-serif font-bold text-lg mb-1" style={{ color: '#0B1F3A' }}>Trent Williams</p>
                <p className="text-sm" style={{ color: '#5A7390' }}>Owner & Operator, Aussie Gleam</p>
              </div>

              <p className="section-label mb-6">Our Mission</p>
              <div className="p-8 rounded-lg border-l-4 mb-8" style={{ backgroundColor: '#F5F7FA', borderColor: '#C8960C' }}>
                <p className="text-lg font-serif italic" style={{ color: '#0B1F3A' }}>
                  &ldquo;To provide South East Queensland businesses and residents with the most reliable, professional, and eco-conscious vehicle cleaning service available — delivered with the personal care of a family business.&rdquo;
                </p>
              </div>

              <p className="section-label mb-4">We Give Back</p>
              <p className="leading-relaxed mb-6" style={{ color: '#5A7390' }}>
                Aussie Gleam donates a percentage of profits to Australian wildlife conservation organisations. We care about the environment we clean in — and believe that successful businesses have a responsibility to give back to the natural world we all share.
              </p>

              <p className="section-label mb-4">Contact Us</p>
              <div className="space-y-2">
                {[
                  { label: 'Trent', value: '0479 070 056', href: 'tel:0479070056' },
                  { label: 'Linda (Lawn enquiries)', value: '0404 450 634', href: 'tel:0404450634' },
                  { label: 'Email', value: 'info@aussiegleam.com', href: 'mailto:info@aussiegleam.com' },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wide" style={{ color: '#5A7390', minWidth: '6rem' }}>{c.label}</span>
                    <a href={c.href} className="text-sm font-sans font-semibold hover:text-gold transition-colors" style={{ color: '#0B1F3A' }}>{c.value}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What We Stand For</p>
            <h2 className="text-4xl font-serif mb-4" style={{ color: '#0B1F3A' }}>Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="p-7 bg-white rounded-lg border" style={{ borderColor: '#E8EDF4' }}>
                <div className="mb-4" style={{ color: '#C8960C' }}>{v.icon}</div>
                <h3 className="font-serif text-lg mb-3" style={{ color: '#0B1F3A' }}>{v.title}</h3>
                <p className="text-sm font-sans leading-relaxed" style={{ color: '#5A7390' }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Work With Us</h2>
          <p className="font-sans mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Whether you need a one-off detail or a long-term fleet cleaning contract, we would love to hear from you. Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote/" className="btn-primary">Get a Free Quote</Link>
            <Link href="/contact/" className="btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
