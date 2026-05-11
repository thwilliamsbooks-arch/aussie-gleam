import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { breadcrumbSchema } from '@/lib/schema';

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'Contact', url: 'https://aussiegleam.com/contact/' },
]);

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Aussie Gleam for fleet cleaning and car detailing across Logan, Gold Coast, Brisbane and Ipswich. Call Trent on 0479 070 056 or email info@aussiegleam.com.',
  alternates: { canonical: 'https://aussiegleam.com/contact/' },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <section className="pt-36 pb-20 relative" style={{ background: 'linear-gradient(135deg, #060F1D 0%, #0B1F3A 100%)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-6">Contact Us</h1>
          <p className="text-lg max-w-xl font-sans" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Ready to book, or just have a question? Get in touch. We typically respond within a few hours during business hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Contact details */}
            <div>
              <p className="section-label mb-6">Our Details</p>
              <div className="space-y-6 mb-10">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Trent (Fleet & Detailing)',
                    value: '0479 070 056',
                    href: 'tel:0479070056',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: 'Linda (Enquiries)',
                    value: '0404 450 634',
                    href: 'tel:0404450634',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: 'Email',
                    value: 'info@aussiegleam.com',
                    href: 'mailto:info@aussiegleam.com',
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: 'Based in',
                    value: 'Jimboomba, QLD (service area: Logan to Gold Coast)',
                    href: null,
                  },
                ].map(c => (
                  <div key={c.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(200,150,12,0.12)', color: '#C8960C' }}>
                      {c.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color: '#5A7390' }}>{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="font-sans font-semibold hover:text-gold transition-colors" style={{ color: '#0B1F3A' }}>{c.value}</a>
                      ) : (
                        <p className="font-sans font-semibold" style={{ color: '#0B1F3A' }}>{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F5F7FA', border: '1px solid #E8EDF4' }}>
                <p className="font-sans font-bold text-sm mb-1" style={{ color: '#0B1F3A' }}>Business Details</p>
                <p className="text-sm" style={{ color: '#5A7390' }}>ABN: 43 193 457 086</p>
                <p className="text-sm" style={{ color: '#5A7390' }}>Insured through Allianz (Policy No: 132AN21172COM)</p>
                <p className="text-sm mt-2" style={{ color: '#5A7390' }}>Certificates of Currency available on request for fleet clients.</p>
              </div>

              <div className="mt-8">
                <p className="section-label mb-4">Service Areas</p>
                <div className="flex flex-wrap gap-2">
                  {['Logan', 'Gold Coast', 'Brisbane', 'Ipswich', 'Beaudesert', 'Scenic Rim', 'Sunshine Coast'].map(a => (
                    <span key={a} className="px-3 py-1.5 rounded-full text-xs font-semibold border" style={{ borderColor: '#E8EDF4', color: '#0B1F3A' }}>{a}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form note */}
            <div>
              <p className="section-label mb-6">Send a Message</p>
              <div className="p-8 rounded-lg border" style={{ borderColor: '#E8EDF4', backgroundColor: '#F5F7FA' }}>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#5A7390' }}>
                  Use the contact form below to send us a message directly, or use our detailed quote form if you are enquiring about fleet cleaning or a specific detailing service.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="py-0">
        <div className="relative w-full" style={{ height: '340px' }}>
          <Image
            src="/truck-commercial.png"
            alt="Aussie Gleam team washing a large commercial truck at a Queensland business"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(11,31,58,0.60)' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="text-white font-serif text-3xl mb-2">Get in Touch Today</p>
              <p className="font-sans text-sm" style={{ color: 'rgba(255,255,255,0.72)' }}>Call Trent on 0479 070 056 or submit the form and we'll respond within a few hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-12" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif mb-4" style={{ color: '#0B1F3A' }}>About Us</h2>
          <p className="max-w-2xl mx-auto text-sm leading-relaxed" style={{ color: '#5A7390' }}>
            We are a family owned mobile car detailing and fleet cleaning business servicing the Logan area and surrounds through to the Gold Coast. Our priority is always quality, reliability, and making your experience as easy as possible.
          </p>
        </div>
      </section>
    </>
  );
}
