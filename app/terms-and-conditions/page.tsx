import type { Metadata } from 'next';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions for Aussie Gleam fleet cleaning and car detailing services.',
  alternates: { canonical: 'https://aussiegleam.com/terms-and-conditions/' },
};

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'Terms and Conditions', url: 'https://aussiegleam.com/terms-and-conditions/' },
]);

export default function TermsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <section className="pt-36 pb-16 relative" style={{ background: 'linear-gradient(135deg, #060F1D 0%, #0B1F3A 100%)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif text-white mb-4">Terms and Conditions</h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Last updated: 2024</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose-gleam">
          <h3>1. Services</h3>
          <p>Aussie Gleam provides mobile car detailing and fleet cleaning services across South East Queensland. All services are subject to availability and our assessment of the vehicle condition on arrival.</p>

          <h3>2. Pricing</h3>
          <p>All prices are listed in Australian Dollars (AUD) and are inclusive of GST where applicable. Quoted prices are starting prices and may vary based on vehicle size, type, and condition. We reserve the right to adjust pricing after initial inspection if the vehicle requires significantly more work than anticipated.</p>

          <h3>3. Bookings and Cancellations</h3>
          <p>Bookings are confirmed upon receipt of your enquiry and our confirmation. Please provide at least 24 hours notice for cancellations or rescheduling. Late cancellations (less than 24 hours) may incur a cancellation fee at our discretion.</p>

          <h3>4. Access Requirements</h3>
          <p>Clients must provide access to a working power point and water tap (standard garden hose connection) unless alternative arrangements have been agreed in advance. Failure to provide required access may result in rescheduling or cancellation with applicable fees.</p>

          <h3>5. Insurance</h3>
          <p>Aussie Gleam is fully insured through Allianz (Policy No: 132AN21172COM). We take all reasonable care with your vehicle. Any claims must be reported immediately and in writing.</p>

          <h3>6. Service Satisfaction Guarantee</h3>
          <p>If you are unsatisfied with the results of your service, please contact us within 48 hours. We will assess the concern and, where warranted, return to rectify specific issues at no additional cost. This guarantee does not cover pre-existing damage, stains deemed permanent at time of assessment, or issues arising after service completion.</p>

          <h3>7. Limitation of Liability</h3>
          <p>Aussie Gleam is not responsible for pre-existing damage, interior items left in the vehicle, or wear and tear discovered during the cleaning process. Our liability is limited to the cost of the service provided.</p>

          <h3>8. Fleet Contracts</h3>
          <p>Fleet cleaning contracts are subject to separate written agreements. Contract terms, pricing, scheduling, and cancellation provisions will be outlined in the individual contract document provided to each business client.</p>

          <h3>9. Privacy</h3>
          <p>We collect and use your personal information only for the purpose of providing our services and communicating with you about bookings and quotes. We do not sell or share your personal information with third parties.</p>

          <h3>10. Contact</h3>
          <p>For queries about these terms, contact us at info@aussiegleam.com or call 0479 070 056. ABN: 43 193 457 086.</p>
        </div>
      </section>
    </>
  );
}
