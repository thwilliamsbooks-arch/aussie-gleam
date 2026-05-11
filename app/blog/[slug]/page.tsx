import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { marked } from 'marked';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import { breadcrumbSchema } from '@/lib/schema';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://aussiegleam.com/blog/${slug}/` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: 'article',
      publishedTime: post.date,
      siteName: 'Aussie Gleam',
    },
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = await marked(post.content, { async: false });

  const BREADCRUMB_SCHEMA = breadcrumbSchema([
    { name: 'Home',  url: 'https://aussiegleam.com/' },
    { name: 'Blog',  url: 'https://aussiegleam.com/blog/' },
    { name: post.title, url: `https://aussiegleam.com/blog/${slug}/` },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Aussie Gleam',
      url: 'https://aussiegleam.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aussie Gleam',
      url: 'https://aussiegleam.com',
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section
        className="pt-36 pb-16 relative"
        style={{ background: 'linear-gradient(135deg, #060F1D 0%, #0B1F3A 100%)' }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/blog/" className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Blog
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>/</span>
            <span className="text-xs font-sans" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {post.title.length > 50 ? post.title.slice(0, 50) + '…' : post.title}
            </span>
          </div>
          <p className="text-xs font-sans mb-4" style={{ color: '#C8960C' }}>{post.date}</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-base font-sans leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose-ag"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </article>

      {/* Back to blog */}
      <section className="py-8 bg-white border-t" style={{ borderColor: '#E8EDF4' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog/"
            className="text-sm font-sans font-bold"
            style={{ color: '#C8960C' }}
          >
            ← Back to Blog
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #162D52 100%)' }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-white mb-4">
            Ready for a Professional Clean?
          </h2>
          <p className="font-sans mb-8" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Aussie Gleam is Southeast Queensland's mobile fleet and vehicle cleaning specialist.
            We come to you — home, office, or worksite.
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
