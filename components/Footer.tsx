import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80" style={{ backgroundColor: '#0B1F3A' }}>
      {/* Top strip */}
      <div className="bg-gold py-3" style={{ backgroundColor: '#C8960C' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white font-sans font-bold text-sm tracking-wide">
            Queensland&apos;s Fleet Cleaning Specialists — Fully Insured · Family Owned
          </p>
          <a
            href="tel:0479070056"
            className="text-white font-sans font-bold text-sm flex items-center gap-1.5 hover:text-navy transition-colors"
            style={{ '--tw-text-opacity': '1' } as React.CSSProperties}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            0479 070 056
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 relative rounded-lg overflow-hidden bg-white p-0.5">
                <Image src="/logo.png" alt="Aussie Gleam" fill className="object-contain" />
              </div>
              <div>
                <span className="block text-white font-serif font-bold text-base tracking-wide">AUSSIE GLEAM</span>
                <span className="block text-gold-light text-xs font-sans tracking-widest uppercase">Fleet & Detailing</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-5">
              Family-owned fleet cleaning and mobile car detailing specialists serving South East Queensland since day one.
            </p>
            <p className="text-xs text-white/40">ABN: 43 193 457 086</p>
            <p className="text-xs text-white/40">Insured through Allianz</p>
          </div>

          {/* Fleet Services */}
          <div>
            <h3 className="text-white font-sans font-bold text-sm tracking-widest uppercase mb-5">Fleet Services</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/commercial-car-cleaning/', label: 'Commercial Car Cleaning' },
                { href: '/fleet-contracts/', label: 'Fleet Contracts' },
                { href: '/industries/', label: 'Industries We Serve' },
                { href: '/request-a-quote/', label: 'Get a Fleet Quote' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-gold-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Car Detailing */}
          <div>
            <h3 className="text-white font-sans font-bold text-sm tracking-widest uppercase mb-5">Car Detailing</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/packages/', label: 'Detailing Packages' },
                { href: '/pre-sale-car-detailing/', label: 'Pre-Sale Detailing' },
                { href: '/car-mould-removal/', label: 'Car Mould Removal' },
                { href: '/caravan-cleaning-services/', label: 'Caravan Detailing' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-gold-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Areas */}
          <div>
            <h3 className="text-white font-sans font-bold text-sm tracking-widest uppercase mb-5">Company</h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { href: '/about/', label: 'About Us' },
                { href: '/testimonials/', label: 'Testimonials' },
                { href: '/faq/', label: 'FAQ' },
                { href: '/blog/', label: 'Blog' },
                { href: '/contact/', label: 'Contact Us' },
                { href: '/terms-and-conditions/', label: 'Terms & Conditions' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-gold-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-sans font-bold text-sm tracking-widest uppercase mb-3">Service Areas</h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5">
              {['Brisbane', 'Logan', 'Gold Coast', 'Ipswich', 'Sunshine Coast', 'Scenic Rim'].map(a => (
                <Link
                  key={a}
                  href={`/service-areas/${a.toLowerCase().replace(' ', '-')}/`}
                  className="text-xs text-white/50 hover:text-gold-light transition-colors"
                >
                  {a}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Aussie Gleam. All rights reserved. Based in Jimboomba, QLD.</p>
          <p className="text-xs text-white/40">Built with care in Australia 🇦🇺</p>
        </div>
      </div>
    </footer>
  );
}
