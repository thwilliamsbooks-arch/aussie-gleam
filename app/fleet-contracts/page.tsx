import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Fleet Cleaning Contracts Queensland — Regular Scheduled Fleet Cleaning',
  description:
    'Aussie Gleam fleet cleaning contracts for Queensland businesses. Fortnightly or monthly scheduled mobile fleet cleaning at your premises. Tailored B2B packages from $70/vehicle. Get a quote today.',
  alternates: { canonical: 'https://aussiegleam.com/fleet-contracts/' },
};

const howItWorks = [
  { step: '01', title: 'Contact Us', body: 'Call, email, or submit the quote form with your fleet size, location, and preferred cleaning frequency.' },
  { step: '02', title: 'Receive a Proposal', body: "We'll send a tailored contract proposal within 24 hours, including per-vehicle pricing and a sample schedule." },
  { step: '03', title: 'Agree & Schedule', body: 'Sign off on the contract and we lock in your regular cleaning days. No ongoing admin on your end.' },
  { step: '04', title: 'We Show Up', body: 'Your Aussie Gleam team arrives at your site on schedule, cleans your fleet, and leaves. Simple as that.' },
];

const contractBenefits = [
  'Consistent brand presentation across your entire fleet',
  'Removes the burden of ad-hoc vehicle cleaning from your team',
  'Volume pricing — the more vehicles, the better the rate',
  'Flexible scheduling: fortnightly, monthly, or custom frequency',
  'Full documentation for compliance and vehicle maintenance records',
  'No lock-in contracts — cancel or adjust anytime with notice',
  'Priority scheduling over one-off bookings',
  'Dedicated account contact for all service queries',
];

const pricingTiers = [
  { vehicles: '5–10', exterior: 'From $80/vehicle', full: 'From $130/vehicle' },
  { vehicles: '11–25', exterior: 'From $70/vehicle', full: 'From $115/vehicle', highlight: true },
  { vehicles: '26+', exterior: 'POA', full: 'POA' },
];

const SERVICE_SCHEMA = serviceSchema({
  name: 'Fleet Cleaning Contracts Queensland',
  description: 'Scheduled mobile fleet cleaning contracts for Queensland businesses. Fortnightly or monthly cleaning at your premises from $70 per vehicle. No lock-in. Fully insured.',
  url: 'https://aussiegleam.com/fleet-contracts/',
  priceRange: 'From $70 per vehicle per visit',
});

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'Fleet Contracts', url: 'https://aussiegleam.com/fleet-contracts/' },
]);

export default function FleetContractsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      {/* Hero */}
      <section className="pt-36 pb-20 relative" style={{ backgroundColor: '#060F1D' }}>
        <div className="absolute inset-0">
          <Image
            src="/fleet-depot-night.png"
            alt="Aussie Gleam fleet cleaning — two workers at a commercial vehicle depot"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,15,29,0.88) 0%, rgba(11,31,58,0.80) 100%)' }} />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(200,150,12,0.12) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">B2B Fleet Cleaning</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 max-w-3xl">
            Fleet Cleaning Contracts for Queensland Businesses
          </h1>
          <p className="text-lg max-w-2xl mb-8 font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Set-and-forget fleet maintenance. We arrive at your premises on schedule, keep every vehicle spotless, and handle all the logistics — so you can focus on running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/request-a-quote/" className="btn-primary">Request a Fleet Contract Proposal</Link>
            <a href="tel:0479070056" className="btn-outline">Speak to Us: 0479 070 056</a>
          </div>
        </div>
      </section>

      {/* What is a fleet contract */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="section-label mb-3">What Is a Fleet Contract?</p>
              <h2 className="text-4xl font-serif mb-6" style={{ color: '#0B1F3A' }}>Scheduled Fleet Cleaning, On Your Terms</h2>
              <p className="leading-relaxed mb-5" style={{ color: '#5A7390' }}>
                A fleet contract with Aussie Gleam means your vehicles are cleaned on a regular, agreed schedule — fortnightly, monthly, or whatever frequency suits your operation. You set it up once, and we handle everything from there.
              </p>
              <p className="leading-relaxed mb-5" style={{ color: '#5A7390' }}>
                Unlike one-off bookings, our contract clients receive priority scheduling, dedicated account management, and competitive volume pricing. We treat your fleet like our own.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: '#5A7390' }}>
                Our mobile service means we come to you — your depot, yard, carpark or facility. Your vehicles stay on-site and your operations continue without interruption.
              </p>
              <div className="space-y-3">
                {contractBenefits.map(b => (
                  <div key={b} className="flex items-start gap-3">
                    <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="#C8960C" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm" style={{ color: '#1C2B3A' }}>{b}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <div className="relative rounded-xl overflow-hidden mb-8 shadow-lg" style={{ aspectRatio: '4/3' }}>
                <Image
                  src="/truck-fleet-wash.png"
                  alt="Aussie Gleam team pressure washing a large truck at a Queensland business premises"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="section-label mb-6">How It Works</p>
              <div className="space-y-6">
                {howItWorks.map(step => (
                  <div key={step.step} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-lg" style={{ backgroundColor: 'rgba(200,150,12,0.12)', color: '#C8960C' }}>
                      {step.step}
                    </div>
                    <div className="pt-2">
                      <h3 className="font-serif text-lg font-bold mb-2" style={{ color: '#0B1F3A' }}>{step.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#5A7390' }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Contract Pricing</p>
            <h2 className="text-4xl font-serif mb-4" style={{ color: '#0B1F3A' }}>Fleet Contract Rates</h2>
            <p className="max-w-xl mx-auto text-sm" style={{ color: '#5A7390' }}>
              Per-vehicle pricing based on fleet size. All rates are for regular scheduled visits. Contact us for custom pricing on large fleets or specialist vehicles.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto">
              <thead>
                <tr style={{ backgroundColor: '#0B1F3A' }}>
                  <th className="px-6 py-4 text-left text-sm font-sans font-bold text-white">Fleet Size</th>
                  <th className="px-6 py-4 text-left text-sm font-sans font-bold text-white">Exterior Wash</th>
                  <th className="px-6 py-4 text-left text-sm font-sans font-bold text-white">Full Interior & Exterior</th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, i) => (
                  <tr
                    key={tier.vehicles}
                    className="border-b"
                    style={{
                      borderColor: '#E8EDF4',
                      backgroundColor: tier.highlight ? 'rgba(200,150,12,0.06)' : i % 2 === 0 ? 'white' : '#FAFBFC',
                    }}
                  >
                    <td className="px-6 py-4 font-sans font-bold text-sm" style={{ color: '#0B1F3A' }}>
                      {tier.vehicles} vehicles
                      {tier.highlight && <span className="ml-2 px-2 py-0.5 rounded text-xs font-bold" style={{ backgroundColor: 'rgba(200,150,12,0.15)', color: '#C8960C' }}>Most Popular</span>}
                    </td>
                    <td className="px-6 py-4 text-sm" style={{ color: '#5A7390' }}>{tier.exterior}</td>
                    <td className="px-6 py-4 text-sm" style={{ color: '#5A7390' }}>{tier.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs mt-6 mb-10" style={{ color: '#5A7390' }}>
            All prices are per vehicle per visit. GST applicable. Pricing subject to vehicle size and condition assessment.
          </p>

          <div className="text-center">
            <Link href="/request-a-quote/" className="btn-primary">Get a Custom Fleet Quote</Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Who We Work With</p>
          <h2 className="text-3xl font-serif mb-4" style={{ color: '#0B1F3A' }}>Fleet Contracts Across Queensland Industries</h2>
          <p className="max-w-2xl mx-auto mb-8 text-sm" style={{ color: '#5A7390' }}>
            From transport and logistics to government councils, Aussie Gleam is trusted by businesses across South East Queensland.
          </p>
          <Link href="/industries/" className="btn-navy">See All Industries We Serve</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Ready to Set Up Your Fleet Contract?</h2>
          <p className="font-sans mb-10" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Fill in the quote form with your fleet details and we&apos;ll send a tailored contract proposal within 24 hours. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote/" className="btn-primary">Request a Proposal</Link>
            <a href="mailto:info@aussiegleam.com" className="btn-outline">info@aussiegleam.com</a>
          </div>
        </div>
      </section>
    </>
  );
}
