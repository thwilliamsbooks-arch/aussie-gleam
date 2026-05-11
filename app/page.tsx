import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSceneClient from '@/components/HeroSceneClient';

export const metadata: Metadata = {
  title: 'Fleet Cleaning & Mobile Car Detailing — Logan to Gold Coast',
  description:
    "Queensland's leading fleet cleaning and mobile car detailing specialists. Trusted by transport, construction, tourism and government fleets. Serving Brisbane, Logan, Gold Coast, Ipswich and beyond.",
};

const industries = [
  { icon: '🚛', name: 'Transport & Logistics', desc: 'Trucks, vans, delivery fleets' },
  { icon: '🏗️', name: 'Construction', desc: 'Utes, machinery, site vehicles' },
  { icon: '🏨', name: 'Tourism & Hospitality', desc: 'Coaches, shuttles, hire cars' },
  { icon: '🏛️', name: 'Government & Council', desc: 'Municipal & council fleets' },
  { icon: '🏥', name: 'Healthcare', desc: 'Ambulances, medical transport' },
  { icon: '🚗', name: 'Car Rental', desc: 'Hire car & rental fleets' },
];

const whyUs = [
  {
    title: 'We Come to You',
    body: 'Our fully-equipped mobile team arrives at your depot, yard or office. Zero downtime, zero disruption to operations.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Scheduled Contracts',
    body: 'Regular fortnightly or monthly cleaning schedules keep your fleet presentation-ready at all times, automatically.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Fully Insured',
    body: 'Insured through Allianz. Every job is covered — giving your business complete peace of mind on every clean.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Eco-Friendly Products',
    body: "Biodegradable, eco-conscious cleaning products. We protect your vehicles and Queensland's environment.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: "Aussie Gleam has been maintaining our 24-vehicle delivery fleet for over a year. The team is reliable, thorough, and our vans always look immaculate.",
    name: "Mark T.",
    company: "Logistics Manager, Logan",
    stars: 5,
  },
  {
    quote: "We needed a reliable fleet cleaner for our construction utes — Aussie Gleam turned up on time every fortnight without fail. Highly recommend.",
    name: "Steve R.",
    company: "Site Manager, Ipswich",
    stars: 5,
  },
  {
    quote: "Incredible attention to detail on our fleet of hire cars. Guests always comment on how clean our vehicles are. Worth every cent.",
    name: "Jenny L.",
    company: "Operations, Gold Coast Tourism Co.",
    stars: 5,
  },
];

const detailingServices = [
  {
    href: '/packages/',
    title: 'Car Detailing Packages',
    desc: 'Essential from $219 · Elevated from $299 · Pro from $399. Full interior & exterior.',
    icon: '✨',
  },
  {
    href: '/pre-sale-car-detailing/',
    title: 'Pre-Sale Detailing',
    desc: "Maximise your vehicle's sale value with a professional detail before it hits the market.",
    icon: '🏷️',
  },
  {
    href: '/car-mould-removal/',
    title: 'Car Mould Removal',
    desc: 'Safe, professional extraction using antimicrobial solutions. Health-safe and thorough.',
    icon: '🛡️',
  },
  {
    href: '/caravan-cleaning-services/',
    title: 'Caravan Detailing',
    desc: 'Interior & exterior caravan cleaning from $379. Motorhomes, RVs and campervans.',
    icon: '🚐',
  },
];

const areas = ['Brisbane', 'Logan', 'Gold Coast', 'Ipswich', 'Sunshine Coast', 'Scenic Rim'];

const vehicleTypes = [
  {
    name: 'Heavy Trucks & Semi-Trailers',
    desc: 'Long-haul transport, interstate freight and logistics fleets',
    img: 'https://images.unsplash.com/photo-1776521905669-97fa944bf30c?auto=format&fit=crop&w=800&q=80',
    href: '/fleet-contracts/',
  },
  {
    name: 'Utes & Light Commercial',
    desc: 'Trade vehicles, delivery vans and service fleet utes',
    img: '/fleet-depot-night.png',
    href: '/fleet-contracts/',
  },
  {
    name: 'Buses & Coaches',
    desc: 'Tourism operators, school buses and charter coaches',
    img: '/bus-fleet-wash.png',
    href: '/fleet-contracts/',
  },
  {
    name: 'Caravans & Motorhomes',
    desc: 'RVs, campervans and motorhomes — interior and exterior',
    img: 'https://images.unsplash.com/photo-1511533910568-be3ffdc229bb?auto=format&fit=crop&w=800&q=80',
    href: '/caravan-cleaning-services/',
  },
  {
    name: 'Corporate Vehicles',
    desc: 'Pool cars, executive sedans and professional fleet vehicles',
    img: 'https://images.unsplash.com/photo-1771210353591-20006eba7ad7?auto=format&fit=crop&w=800&q=80',
    href: '/commercial-car-cleaning/',
  },
  {
    name: 'Construction Vehicles',
    desc: 'Work utes, machinery carriers and construction site vehicles',
    img: 'https://images.unsplash.com/photo-1756024902483-2b175db47803?auto=format&fit=crop&w=800&q=80',
    href: '/industries/',
  },
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

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ backgroundColor: '#060F1D' }}
      >
        {/* Hero background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/fleet-depot-night.png"
            alt="Aussie Gleam team cleaning a fleet of vehicles at night"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(6,15,29,0.82) 0%, rgba(11,31,58,0.74) 50%, rgba(13,40,71,0.70) 100%)' }} />
        </div>

        <HeroSceneClient />

        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(200,150,12,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(75,156,211,0.10) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">
            <div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border"
              style={{ borderColor: 'rgba(200,150,12,0.35)', backgroundColor: 'rgba(200,150,12,0.1)' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse-gold" style={{ backgroundColor: '#C8960C' }} />
              <span className="section-label text-xs" style={{ color: '#E8B52A' }}>
                Queensland&apos;s Fleet Cleaning Specialists
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
              Your Fleet,{' '}
              <span className="text-gradient-gold">Always Gleaming</span>
            </h1>

            <p className="text-lg sm:text-xl mb-3 font-sans leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Queensland&apos;s trusted mobile fleet cleaning service. We come to your depot, clean your vehicles on schedule, and keep your brand looking sharp — from Logan to the Gold Coast and beyond.
            </p>

            <p className="text-sm mb-10 font-sans" style={{ color: 'rgba(255,255,255,0.42)' }}>
              Serving Brisbane · Logan · Gold Coast · Ipswich · Sunshine Coast · Scenic Rim
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/fleet-contracts/" className="btn-primary text-base px-8 py-4">
                Fleet Cleaning Contracts
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/commercial-car-cleaning/" className="btn-outline text-base px-8 py-4">
                Our Fleet Services
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              {['Fully Insured (Allianz)', 'ABN: 43 193 457 086', 'Family Owned', 'Eco-Friendly Products'].map(t => (
                <div key={t} className="flex items-center gap-2">
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="#C8960C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.58)' }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs font-sans tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 text-white animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── FLEET INTRO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">What We Do Best</p>
              <h2 className="text-4xl lg:text-5xl font-serif mb-6" style={{ color: '#0B1F3A' }}>
                Professional Fleet Cleaning Across South East Queensland
              </h2>
              <p className="text-lg leading-relaxed mb-5" style={{ color: '#5A7390' }}>
                We are Queensland&apos;s go-to mobile fleet cleaning partner for businesses that depend on their vehicles. From 5-van delivery fleets to 50-vehicle corporate accounts, Aussie Gleam delivers consistent, scheduled cleaning at your premises — so your team never loses productive time.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: '#5A7390' }}>
                Our fleet contracts offer fortnightly or monthly scheduled cleans at competitive per-vehicle rates from $70. We handle the scheduling, the equipment, the eco-friendly products — all you do is unlock the gate.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { stat: 'From $70', label: 'Per vehicle per visit' },
                  { stat: '5★', label: 'Customer rating' },
                  { stat: 'No lock-in', label: 'Adjust or cancel anytime' },
                  { stat: 'Fully insured', label: 'Allianz policy holder' },
                ].map(s => (
                  <div key={s.stat} className="p-4 rounded-lg border" style={{ borderColor: '#E8EDF4', backgroundColor: '#F5F7FA' }}>
                    <p className="text-lg font-serif font-bold mb-0.5" style={{ color: '#C8960C' }}>{s.stat}</p>
                    <p className="text-xs font-sans" style={{ color: '#5A7390' }}>{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/fleet-contracts/" className="btn-primary">View Fleet Contracts</Link>
                <a href="tel:0479070056" className="btn-navy">Call 0479 070 056</a>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ aspectRatio: '1/1' }}>
              <Image
                src="/fleet-depot-night.png"
                alt="Aussie Gleam team cleaning a fleet of white utes at a Queensland depot"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 0 0 1px rgba(200,150,12,0.2)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Who We Serve</p>
            <h2 className="text-4xl font-serif mb-4" style={{ color: '#0B1F3A' }}>
              Fleet Cleaning Across Every Industry
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#5A7390' }}>
              From small trade fleets to large corporate accounts, Aussie Gleam has the experience and processes to keep your vehicles performing and presenting at their best.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {industries.map(ind => (
              <div key={ind.name} className="p-5 bg-white rounded-lg text-center card-hover border" style={{ borderColor: '#E8EDF4' }}>
                <div className="text-3xl mb-3">{ind.icon}</div>
                <p className="text-xs font-sans font-bold mb-1" style={{ color: '#0B1F3A' }}>{ind.name}</p>
                <p className="text-xs" style={{ color: '#5A7390' }}>{ind.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/industries/" className="btn-navy">See All Industries We Serve</Link>
          </div>
        </div>
      </section>

      {/* ── VEHICLE TYPES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What We Clean</p>
            <h2 className="text-4xl font-serif mb-4" style={{ color: '#0B1F3A' }}>
              Every Vehicle Type, Every Fleet
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#5A7390' }}>
              From single utes to 50-vehicle transport fleets, Aussie Gleam cleans every type of commercial vehicle across South East Queensland.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleTypes.map(vt => (
              <a key={vt.name} href={vt.href} className="group rounded-xl overflow-hidden border card-hover block" style={{ borderColor: '#E8EDF4' }}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <Image
                    src={vt.img}
                    alt={vt.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="font-serif font-bold text-lg mb-1" style={{ color: '#0B1F3A' }}>{vt.name}</h3>
                  <p className="text-sm mb-3" style={{ color: '#5A7390' }}>{vt.desc}</p>
                  <p className="text-xs font-bold font-sans" style={{ color: '#C8960C' }}>Learn more →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AUSSIE GLEAM ── */}
      <section className="py-20 bg-navy" style={{ backgroundColor: '#0B1F3A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Why Choose Us</p>
            <h2 className="text-4xl font-serif text-white mb-4">The Aussie Gleam Difference</h2>
            <p className="max-w-2xl mx-auto font-sans" style={{ color: 'rgba(255,255,255,0.58)' }}>
              We are not a franchise. We are a family business that shows up, every time, and does the job right.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(item => (
              <div key={item.title} className="p-7 rounded-lg border" style={{ borderColor: '#162D52', backgroundColor: 'rgba(22,45,82,0.5)' }}>
                <div className="mb-4" style={{ color: '#C8960C' }}>{item.icon}</div>
                <h3 className="text-white font-serif text-lg mb-3">{item.title}</h3>
                <p className="text-sm font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Where We Work</p>
            <h2 className="text-4xl font-serif mb-4" style={{ color: '#0B1F3A' }}>Covering South East Queensland</h2>
            <p className="max-w-xl mx-auto" style={{ color: '#5A7390' }}>
              Based in Jimboomba, we serve businesses and residents across a wide radius of South East Queensland.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {areas.map(area => (
              <Link
                key={area}
                href={`/service-areas/${area.toLowerCase().replace(' ', '-')}/`}
                className="group p-6 rounded-lg text-center border card-hover"
                style={{ borderColor: '#E8EDF4', backgroundColor: '#F5F7FA' }}
              >
                <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: 'rgba(200,150,12,0.12)' }}>
                  <svg className="w-5 h-5" fill="none" stroke="#C8960C" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="font-sans font-bold text-sm transition-colors group-hover:text-gold" style={{ color: '#0B1F3A' }}>{area}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/service-areas/" className="btn-navy">View All Service Areas</Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ backgroundColor: '#F5F7FA' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Client Reviews</p>
            <h2 className="text-4xl font-serif mb-4" style={{ color: '#0B1F3A' }}>What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="p-8 bg-white rounded-lg border" style={{ borderColor: '#E8EDF4' }}>
                <Stars count={t.stars} />
                <p className="mt-4 leading-relaxed text-sm font-sans italic" style={{ color: '#1C2B3A' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 pt-4 border-t" style={{ borderColor: '#E8EDF4' }}>
                  <p className="font-sans font-bold text-sm" style={{ color: '#0B1F3A' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: '#5A7390' }}>{t.company}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials/" className="btn-navy">Read All Reviews</Link>
          </div>
        </div>
      </section>

      {/* ── CAR DETAILING (Secondary) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Also Available</p>
            <h2 className="text-4xl font-serif mb-4" style={{ color: '#0B1F3A' }}>Mobile Car Detailing Services</h2>
            <p className="max-w-2xl mx-auto" style={{ color: '#5A7390' }}>
              Beyond fleet cleaning, we offer premium mobile car detailing for private vehicles across South East Queensland.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {detailingServices.map(s => (
              <Link key={s.href} href={s.href} className="group p-7 bg-white border rounded-lg card-hover" style={{ borderColor: '#E8EDF4' }}>
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-serif text-lg font-bold mb-2 transition-colors group-hover:text-gold" style={{ color: '#0B1F3A' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5A7390' }}>{s.desc}</p>
                <p className="mt-4 text-xs font-sans font-bold" style={{ color: '#C8960C' }}>Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(200,150,12,0.15) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Ready to Get Started?</p>
          <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">
            Let&apos;s Keep Your Fleet Gleaming
          </h2>
          <p className="text-lg font-sans mb-10 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Get a free, no-obligation quote for your fleet. Tell us the number of vehicles, your location, and how often you need cleaning — we&apos;ll send a tailored contract proposal within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote/" className="btn-primary text-base px-10 py-4">Get a Free Fleet Quote</Link>
            <a href="tel:0479070056" className="btn-outline text-base px-10 py-4">Call 0479 070 056</a>
          </div>
        </div>
      </section>
    </>
  );
}
