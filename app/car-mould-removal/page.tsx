import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Car Mould Removal Services',
  description:
    'Professional car mould removal services in Logan and Gold Coast. Safe antimicrobial extraction, deep sanitisation, and moisture prevention. Fully insured. Call 0479 070 056.',
  alternates: { canonical: 'https://aussiegleam.com/car-mould-removal/' },
};

const SERVICE_SCHEMA = serviceSchema({
  name: 'Car Mould Removal Services',
  description: 'Professional car mould removal in Logan and Gold Coast. Safe antimicrobial extraction, deep sanitisation, and moisture prevention. Fully insured.',
  url: 'https://aussiegleam.com/car-mould-removal/',
  priceRange: 'Price on application',
});

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'Car Mould Removal', url: 'https://aussiegleam.com/car-mould-removal/' },
]);

const process = [
  { step: '01', title: 'Initial Assessment and Inspection', body: 'We assess the extent of mould growth, identify the moisture source, and determine the appropriate treatment protocol for your vehicle.' },
  { step: '02', title: 'Safe Mould Extraction', body: 'Using HEPA-filtered equipment and antimicrobial solutions, we safely extract mould from all affected surfaces without spreading spores.' },
  { step: '03', title: 'Deep Sanitisation and Treatment', body: 'All surfaces are deep-cleaned and treated with professional-grade antimicrobial agents that kill mould at the root and prevent regrowth.' },
  { step: '04', title: 'Moisture Control and Prevention', body: 'We identify and address moisture entry points, and recommend preventative measures to stop mould from returning.' },
];

export default function MouldRemovalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <section className="pt-36 pb-20 relative" style={{ backgroundColor: '#060F1D' }}>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80"
            alt="Clean car interior"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,15,29,0.92) 0%, rgba(11,31,58,0.85) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Health & Safety</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6 max-w-3xl">Car Mould Removal Services</h1>
          <p className="text-lg max-w-2xl mb-8 font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Professional mould elimination for your vehicle. Safe, thorough, and health-focused — serving Logan, Gold Coast, and surrounding Queensland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/request-a-quote/" className="btn-primary">Book Mould Removal</Link>
            <a href="tel:0479070056" className="btn-outline">Call 0479 070 056</a>
          </div>
        </div>
      </section>

      {/* Professional elimination */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <p className="section-label mb-3">The Problem</p>
              <h2 className="text-4xl font-serif mb-6" style={{ color: '#0B1F3A' }}>Professional Mould Elimination for Your Vehicle</h2>
              <div className="prose-gleam">
                <h3>What Causes Mould in Cars?</h3>
                <p>Mould thrives in warm, humid environments. Vehicles are particularly susceptible after water damage, flooding, leaving windows open in rain, or from persistent high humidity — especially here in South East Queensland. Damaged door seals, blocked drainage channels, and wet carpet are common contributors.</p>
                <h3>Health Risks of Car Mould</h3>
                <p>A car interior concentrates airborne particles in a confined space. Mould spores in your vehicle can cause respiratory irritation, allergic reactions, headaches, and worsening asthma. People with compromised immune systems are particularly at risk. Early intervention is critical.</p>
              </div>
            </div>
            <div>
              <p className="section-label mb-6">Our Process</p>
              <div className="space-y-6">
                {process.map(p => (
                  <div key={p.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-serif font-bold" style={{ backgroundColor: 'rgba(200,150,12,0.12)', color: '#C8960C' }}>
                      {p.step}
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-base mb-1.5" style={{ color: '#0B1F3A' }}>{p.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#5A7390' }}>{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="py-0">
        <div className="relative w-full" style={{ height: '380px' }}>
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80"
            alt="Clean car interior — fresh and mould-free after professional treatment"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(11,31,58,0.85) 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
            <p className="text-white font-serif text-2xl mb-1">Safe, Thorough Mould Elimination</p>
            <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.70)' }}>Using HEPA-filtered equipment and professional antimicrobial agents — your vehicle is left clean, fresh, and safe.</p>
          </div>
        </div>
      </section>

      {/* Guarantee + Give Back */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-lg border" style={{ borderColor: '#E8EDF4' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(200,150,12,0.12)' }}>
              <svg className="w-5 h-5" fill="none" stroke="#C8960C" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3" style={{ color: '#0B1F3A' }}>Service Guarantee</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#5A7390' }}>
              We stand behind every mould removal job. If you are not satisfied with the results, contact us within 48 hours and we will return to address any remaining areas at no additional cost.
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg border" style={{ borderColor: '#E8EDF4' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(75,156,211,0.12)' }}>
              <svg className="w-5 h-5" fill="none" stroke="#4B9CD3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3" style={{ color: '#0B1F3A' }}>We Give Back</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#5A7390' }}>
              Aussie Gleam donates a portion of profits to Australian wildlife conservation. When you book with us, you&apos;re supporting local business and helping protect Australian wildlife.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Deal with Car Mould Before It Gets Worse</h2>
          <p className="font-sans mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Mould spreads quickly in warm Queensland conditions. The sooner it is treated, the less damage to your vehicle&apos;s interior. Contact us for same-week appointments when available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote/" className="btn-primary">Book Mould Removal</Link>
            <a href="tel:0479070056" className="btn-outline">0479 070 056</a>
          </div>
          <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>Get $10 off your next service — mention when booking.</p>
        </div>
      </section>
    </>
  );
}
