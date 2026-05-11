import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description:
    'Frequently asked questions about Aussie Gleam fleet cleaning and mobile car detailing. Learn about our services, pricing, service areas, and fleet contracts.',
  alternates: { canonical: 'https://aussiegleam.com/faq/' },
};

const FAQ_SCHEMA = faqSchema([
  { q: 'What is included in a fleet cleaning contract?', a: 'A fleet contract includes scheduled mobile cleaning visits at your premises on an agreed frequency — typically fortnightly or monthly. We handle all logistics, equipment, and supplies. You choose whether you want exterior-only washes, or full interior and exterior details.' },
  { q: 'What does fleet cleaning cost?', a: 'Fleet cleaning contracts start from $70 per vehicle for exterior washes, and from $115 per vehicle for full interior and exterior details. Pricing depends on fleet size, vehicle type, and cleaning frequency. Contact us for a tailored quote.' },
  { q: 'Do you come to our premises?', a: 'Yes — that is our core service. We are a fully mobile team. We bring all equipment, water, and supplies to your depot, carpark, yard, or office. Your vehicles stay on-site and your operations are uninterrupted.' },
  { q: 'How many vehicles do you need to set up a fleet contract?', a: 'We can work with fleets of as few as 5 vehicles. The more vehicles you have, the better the per-vehicle rate. Contact us regardless of fleet size and we will find a solution that works.' },
  { q: 'Are your fleet contracts locked in?', a: 'No lock-in contracts. We believe in earning your business every visit. You can adjust your schedule or cancel with reasonable notice. Most clients stay with us long-term because the service speaks for itself.' },
  { q: 'What industries do you service?', a: 'We serve transport and logistics, construction, tourism, government and council, healthcare, and car rental fleets — among others. If you operate vehicles and need regular cleaning, we can almost certainly help.' },
  { q: 'How does mobile car detailing work?', a: 'You book online or by phone, we confirm a time, and our detailer arrives at your home or workplace with all equipment. We require access to a power point and water tap (garden hose connection). The detail takes 2–4 hours depending on the package.' },
  { q: 'What is the difference between the packages?', a: 'Essential ($219+) covers a thorough exterior wash and interior clean. Elevated ($299+) adds carpet shampooing and upholstery steam cleaning. Pro ($399+) adds machine polish, clay bar treatment, engine bay, and deep stain treatment.' },
  { q: 'Do I need to provide power and water?', a: 'Yes. We ask for access to a standard power point and a garden tap. If this is not possible, please mention it when booking and we will discuss alternatives.' },
  { q: 'How long does a detail take?', a: 'The Essential package takes approximately 2–2.5 hours. Elevated takes 2.5–3.5 hours. Pro takes 3.5–5 hours. Timing depends on the size and condition of your vehicle.' },
  { q: 'Do you offer a discount for repeat bookings?', a: 'Yes. If you book your next detail within one month, you qualify for our maintenance pricing: $139 for Maintenance Essential and $159 for Maintenance Elevated — saving $60–$140 compared to standard rates.' },
  { q: 'What areas do you service?', a: 'We are based in Jimboomba and service the Logan City area, Gold Coast, Brisbane, Ipswich, Beaudesert, and the Scenic Rim. We also cover parts of the Sunshine Coast for fleet contracts.' },
  { q: 'Are you insured?', a: 'Yes. We are fully insured through Allianz (Policy No: 132AN21172COM). We also hold a registered ABN (43 193 457 086). Business clients can request a Certificate of Currency on request.' },
  { q: 'Can I get a tax invoice?', a: 'Yes. We issue GST invoices for all services. Business clients on fleet contracts receive regular invoices suited to their accounts payable process.' },
  { q: 'How do I book?', a: 'Use the quote form on our website, call Trent on 0479 070 056, or email info@aussiegleam.com. We typically respond within a few hours during business hours.' },
]);

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'FAQ', url: 'https://aussiegleam.com/faq/' },
]);

const faqs = [
  {
    category: 'Fleet Cleaning',
    questions: [
      {
        q: 'What is included in a fleet cleaning contract?',
        a: 'A fleet contract includes scheduled mobile cleaning visits at your premises on an agreed frequency — typically fortnightly or monthly. We handle all logistics, equipment, and supplies. You choose whether you want exterior-only washes, or full interior and exterior details.',
      },
      {
        q: 'What does fleet cleaning cost?',
        a: 'Fleet cleaning contracts start from $70 per vehicle for exterior washes, and from $115 per vehicle for full interior and exterior details. Pricing depends on fleet size, vehicle type, and cleaning frequency. Contact us for a tailored quote.',
      },
      {
        q: 'Do you come to our premises?',
        a: 'Yes — that is our core service. We are a fully mobile team. We bring all equipment, water, and supplies to your depot, carpark, yard, or office. Your vehicles stay on-site and your operations are uninterrupted.',
      },
      {
        q: 'How many vehicles do you need to set up a fleet contract?',
        a: 'We can work with fleets of as few as 5 vehicles. The more vehicles you have, the better the per-vehicle rate. Contact us regardless of fleet size and we will find a solution that works.',
      },
      {
        q: 'Are your fleet contracts locked in?',
        a: 'No lock-in contracts. We believe in earning your business every visit. You can adjust your schedule or cancel with reasonable notice. Most clients stay with us long-term because the service speaks for itself.',
      },
      {
        q: 'What industries do you service?',
        a: 'We serve transport and logistics, construction, tourism, government and council, healthcare, and car rental fleets — among others. If you operate vehicles and need regular cleaning, we can almost certainly help.',
      },
    ],
  },
  {
    category: 'Mobile Car Detailing',
    questions: [
      {
        q: 'How does mobile car detailing work?',
        a: 'You book online or by phone, we confirm a time, and our detailer arrives at your home or workplace with all equipment. We require access to a power point and water tap (garden hose connection). The detail takes 2–4 hours depending on the package.',
      },
      {
        q: 'What is the difference between the packages?',
        a: 'Essential ($219+) covers a thorough exterior wash and interior clean. Elevated ($299+) adds carpet shampooing and upholstery steam cleaning. Pro ($399+) adds machine polish, clay bar treatment, engine bay, and deep stain treatment. See our Packages page for full details.',
      },
      {
        q: 'Do I need to provide power and water?',
        a: 'Yes. We ask for access to a standard power point and a garden tap. If this is not possible, please mention it when booking and we will discuss alternatives.',
      },
      {
        q: 'How long does a detail take?',
        a: 'The Essential package takes approximately 2–2.5 hours. Elevated takes 2.5–3.5 hours. Pro takes 3.5–5 hours. Timing depends on the size and condition of your vehicle.',
      },
      {
        q: 'Do you offer a discount for repeat bookings?',
        a: 'Yes. If you book your next detail within one month, you qualify for our maintenance pricing: $139 for Maintenance Essential and $159 for Maintenance Elevated — saving $60–$140 compared to standard rates.',
      },
    ],
  },
  {
    category: 'Service Area & Logistics',
    questions: [
      {
        q: 'What areas do you service?',
        a: 'We are based in Jimboomba and service the Logan City area, Gold Coast, Brisbane, Ipswich, Beaudesert, and the Scenic Rim. We also cover parts of the Sunshine Coast for fleet contracts. Contact us if you are unsure whether we cover your location.',
      },
      {
        q: 'Are you insured?',
        a: 'Yes. We are fully insured through Allianz (Policy No: 132AN21172COM). We also hold a registered ABN (43 193 457 086). Business clients can request a Certificate of Currency on request.',
      },
      {
        q: 'Can I get a tax invoice?',
        a: 'Yes. We issue GST invoices for all services. Business clients on fleet contracts receive regular invoices suited to their accounts payable process.',
      },
      {
        q: 'How do I book?',
        a: 'Use the quote form on our website, call Trent on 0479 070 056, or email info@aussiegleam.com. We typically respond within a few hours during business hours.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <section className="pt-36 pb-20 relative" style={{ background: 'linear-gradient(135deg, #060F1D 0%, #0B1F3A 100%)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Got Questions?</p>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-lg max-w-2xl font-sans" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Everything you need to know about Aussie Gleam fleet cleaning and car detailing. Can&apos;t find what you&apos;re looking for? Call us.
          </p>
        </div>
      </section>

      {/* Image break between hero and FAQ content */}
      <section className="py-0">
        <div className="relative w-full" style={{ height: '320px' }}>
          <Image
            src="/truck-fleet-wash.png"
            alt="Aussie Gleam team pressure washing a large truck — professional fleet cleaning Queensland"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(11,31,58,0.55)' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white font-serif text-3xl text-center px-4">Everything You Need to Know</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqs.map(cat => (
            <div key={cat.category} className="mb-14">
              <h2 className="text-2xl font-serif mb-8 pb-3 border-b" style={{ color: '#0B1F3A', borderColor: '#E8EDF4' }}>
                {cat.category}
              </h2>
              <div className="space-y-6">
                {cat.questions.map(faq => (
                  <div key={faq.q} className="p-6 rounded-lg border" style={{ borderColor: '#E8EDF4', backgroundColor: '#FAFBFD' }}>
                    <h3 className="font-serif font-bold text-base mb-3" style={{ color: '#0B1F3A' }}>{faq.q}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#5A7390' }}>{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="p-8 rounded-lg text-center" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}>
            <h2 className="text-2xl font-serif text-white mb-3">Still Have Questions?</h2>
            <p className="text-sm font-sans mb-6" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Give us a call or drop us an email. We are happy to answer any question about our fleet or detailing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:0479070056" className="btn-primary text-sm px-6 py-2.5">Call 0479 070 056</a>
              <Link href="/contact/" className="btn-outline text-sm px-6 py-2.5">Contact Form</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
