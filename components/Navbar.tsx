'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const fleetLinks = [
  { href: '/commercial-car-cleaning/', label: 'Fleet & Commercial Cleaning' },
  { href: '/fleet-contracts/', label: 'Fleet Contracts' },
  { href: '/industries/', label: 'Industries We Serve' },
];

const detailingLinks = [
  { href: '/packages/', label: 'Detailing Packages' },
  { href: '/pre-sale-car-detailing/', label: 'Pre-Sale Detailing' },
  { href: '/car-mould-removal/', label: 'Car Mould Removal' },
  { href: '/caravan-cleaning-services/', label: 'Caravan Detailing' },
];

const areaLinks = [
  { href: '/service-areas/brisbane/', label: 'Brisbane' },
  { href: '/service-areas/logan/', label: 'Logan' },
  { href: '/service-areas/gold-coast/', label: 'Gold Coast' },
  { href: '/service-areas/ipswich/', label: 'Ipswich' },
  { href: '/service-areas/sunshine-coast/', label: 'Sunshine Coast' },
  { href: '/service-areas/scenic-rim/', label: 'Scenic Rim' },
];

const mobileLinks = [
  { href: '/', label: 'Home' },
  { href: '/commercial-car-cleaning/', label: 'Fleet & Commercial' },
  { href: '/fleet-contracts/', label: 'Fleet Contracts' },
  { href: '/industries/', label: 'Industries We Serve' },
  { href: '/packages/', label: 'Car Detailing Packages' },
  { href: '/pre-sale-car-detailing/', label: 'Pre-Sale Detailing' },
  { href: '/car-mould-removal/', label: 'Mould Removal' },
  { href: '/caravan-cleaning-services/', label: 'Caravan Detailing' },
  { href: '/service-areas/', label: 'Service Areas' },
  { href: '/about/', label: 'About' },
  { href: '/testimonials/', label: 'Testimonials' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeAll = () => { setOpenDropdown(null); setMobileOpen(false); };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy shadow-lg border-b border-navy-light'
            : 'bg-gradient-to-b from-navy-dark/80 to-transparent'
        }`}
        style={{ backgroundColor: scrolled ? '#0B1F3A' : undefined }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0" onClick={closeAll}>
              <div className="w-10 h-10 lg:w-12 lg:h-12 relative rounded-lg overflow-hidden bg-white p-0.5">
                <Image
                  src="/logo.png"
                  alt="Aussie Gleam"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <span className="block font-serif text-white text-lg font-bold tracking-wide leading-none">
                  AUSSIE GLEAM
                </span>
                <span className="block text-gold-light text-xs font-sans font-medium tracking-widest uppercase mt-0.5">
                  Fleet & Detailing Specialists
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Fleet Cleaning */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('fleet')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="nav-link flex items-center gap-1 px-3 py-2 rounded">
                  Fleet Cleaning
                  <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'fleet' && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-navy-dark border border-navy-light rounded shadow-xl py-2">
                    {fleetLinks.map(l => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block px-4 py-2.5 text-sm font-sans text-white/90 hover:text-gold-light hover:bg-navy-light transition-colors"
                        onClick={closeAll}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Car Detailing */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('detailing')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="nav-link flex items-center gap-1 px-3 py-2 rounded">
                  Car Detailing
                  <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'detailing' && (
                  <div className="absolute top-full left-0 mt-1 w-60 bg-navy-dark border border-navy-light rounded shadow-xl py-2">
                    {detailingLinks.map(l => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block px-4 py-2.5 text-sm font-sans text-white/90 hover:text-gold-light hover:bg-navy-light transition-colors"
                        onClick={closeAll}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Service Areas */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown('areas')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="nav-link flex items-center gap-1 px-3 py-2 rounded">
                  Service Areas
                  <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openDropdown === 'areas' && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-navy-dark border border-navy-light rounded shadow-xl py-2">
                    {areaLinks.map(l => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block px-4 py-2.5 text-sm font-sans text-white/90 hover:text-gold-light hover:bg-navy-light transition-colors"
                        onClick={closeAll}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about/" className="nav-link px-3 py-2">About</Link>
              <Link href="/blog/" className="nav-link px-3 py-2">Blog</Link>
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/request-a-quote/"
                className="hidden sm:inline-flex btn-primary text-xs px-4 py-2.5"
              >
                Get a Quote
              </Link>
              <a
                href="tel:0479070056"
                className="hidden md:flex items-center gap-1.5 text-white/80 hover:text-gold-light transition-colors text-sm font-sans"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0479 070 056
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-white"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-navy-dark/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-navy shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-navy-light">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 relative rounded-lg overflow-hidden bg-white p-0.5">
                  <Image src="/logo.png" alt="Aussie Gleam" fill className="object-contain" />
                </div>
                <span className="text-white font-serif font-bold text-base tracking-wide">AUSSIE GLEAM</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-white/70 hover:text-white" aria-label="Close">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1 p-4">
              {/* Fleet section */}
              <div className="mb-2">
                <p className="section-label px-3 py-2">Fleet Cleaning</p>
                {fleetLinks.map(l => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeAll}
                    className="block px-3 py-2.5 text-sm font-sans text-white/90 hover:text-gold-light border-b border-navy-light/50 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              {/* Detailing section */}
              <div className="mb-2 mt-4">
                <p className="section-label px-3 py-2">Car Detailing</p>
                {detailingLinks.map(l => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeAll}
                    className="block px-3 py-2.5 text-sm font-sans text-white/90 hover:text-gold-light border-b border-navy-light/50 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              {/* Areas */}
              <div className="mb-2 mt-4">
                <p className="section-label px-3 py-2">Service Areas</p>
                {areaLinks.map(l => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeAll}
                    className="block px-3 py-2.5 text-sm font-sans text-white/90 hover:text-gold-light border-b border-navy-light/50 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              {/* Other */}
              <div className="mt-4">
                {[
                  { href: '/about/', label: 'About Us' },
                  { href: '/testimonials/', label: 'Testimonials' },
                  { href: '/faq/', label: 'FAQ' },
                  { href: '/blog/', label: 'Blog' },
                  { href: '/contact/', label: 'Contact' },
                ].map(l => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={closeAll}
                    className="block px-3 py-3 text-sm font-sans text-white/90 hover:text-gold-light border-b border-navy-light/50 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="p-5 space-y-3 border-t border-navy-light">
              <Link href="/request-a-quote/" onClick={closeAll} className="btn-primary w-full justify-center text-sm">
                Get a Free Quote
              </Link>
              <a href="tel:0479070056" className="flex items-center justify-center gap-2 text-gold-light text-sm font-sans font-semibold">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0479 070 056
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
