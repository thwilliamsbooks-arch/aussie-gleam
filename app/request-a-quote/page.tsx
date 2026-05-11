import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import { breadcrumbSchema } from '@/lib/schema';

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'Request a Quote', url: 'https://aussiegleam.com/request-a-quote/' },
]);

export const metadata: Metadata = {
  title: 'Request a Quote — Fleet Cleaning & Car Detailing',
  description:
    'Request a free quote for fleet cleaning or mobile car detailing from Aussie Gleam. Serving Logan, Gold Coast, Brisbane and Ipswich. Fast response within 24 hours.',
  alternates: { canonical: 'https://aussiegleam.com/request-a-quote/' },
};

export default function RequestAQuotePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <section className="pt-36 pb-20 relative" style={{ background: 'linear-gradient(135deg, #060F1D 0%, #0B1F3A 100%)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-3">Free No-Obligation Quote</p>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-6">Request a Quote</h1>
          <p className="text-lg max-w-2xl mx-auto font-sans" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Fill in the form below and we will send a tailored quote within 24 hours. For urgent enquiries, call Trent directly on 0479 070 056.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
