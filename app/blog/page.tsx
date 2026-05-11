import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Blog — Fleet Cleaning & Car Detailing Tips | Aussie Gleam',
  description:
    'Fleet cleaning tips, vehicle maintenance guides, and car detailing advice from the Aussie Gleam team — Southeast Queensland\'s mobile fleet cleaning specialists.',
  alternates: { canonical: 'https://aussiegleam.com/blog/' },
};

const BREADCRUMB_SCHEMA = breadcrumbSchema([
  { name: 'Home', url: 'https://aussiegleam.com/' },
  { name: 'Blog', url: 'https://aussiegleam.com/blog/' },
]);

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      <section className="pt-36 pb-20 relative" style={{ background: 'linear-gradient(135deg, #060F1D 0%, #0B1F3A 100%)' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-3">Tips & Insights</p>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-6">Blog</h1>
          <p className="text-lg max-w-xl font-sans" style={{ color: 'rgba(255,255,255,0.68)' }}>
            Fleet cleaning guides, vehicle maintenance advice, and car detailing tips from the Aussie Gleam team.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center font-sans" style={{ color: '#5A7390' }}>No posts yet — check back soon.</p>
          ) : (
            <div className="space-y-8">
              {posts.map(post => (
                <article key={post.slug} className="p-8 rounded-lg border card-hover" style={{ borderColor: '#E8EDF4' }}>
                  <p className="text-xs font-sans mb-2" style={{ color: '#5A7390' }}>{post.date}</p>
                  <h2 className="font-serif text-xl mb-3">
                    <Link href={`/blog/${post.slug}/`} className="hover:text-gold transition-colors" style={{ color: '#0B1F3A' }}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A7390' }}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}/`} className="text-xs font-bold font-sans" style={{ color: '#C8960C' }}>
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Need a Professional Fleet or Vehicle Clean?</h2>
          <p className="font-sans mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Get in touch and we'll put together a tailored quote for your fleet or vehicle anywhere in Southeast Queensland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/request-a-quote/" className="btn-primary">Get a Quote</Link>
            <a href="tel:0479070056" className="btn-outline">Call 0479 070 056</a>
          </div>
        </div>
      </section>
    </>
  );
}
