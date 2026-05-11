import type { Metadata } from 'next';
import { DM_Sans, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import { localBusinessSchema } from '@/lib/schema';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aussiegleam.com'),
  title: {
    default: 'Aussie Gleam | Fleet Cleaning & Mobile Car Detailing — Logan to Gold Coast',
    template: '%s | Aussie Gleam',
  },
  description:
    'Queensland\'s leading fleet cleaning and mobile car detailing service. Serving Brisbane, Logan, Gold Coast, Ipswich, Sunshine Coast and Scenic Rim. Fully insured. Family owned.',
  keywords: [
    'fleet cleaning Queensland',
    'commercial car cleaning Gold Coast',
    'mobile car detailing Logan',
    'fleet detailing Brisbane',
    'car detailing Gold Coast',
    'mobile car wash Logan',
    'fleet cleaning company Queensland',
    'commercial vehicle cleaning',
    'car detailing packages Gold Coast',
  ],
  authors: [{ name: 'Aussie Gleam' }],
  creator: 'Aussie Gleam',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://aussiegleam.com',
    siteName: 'Aussie Gleam',
    title: 'Aussie Gleam | Queensland\'s Fleet Cleaning Specialists',
    description:
      'Professional fleet cleaning and mobile car detailing across South East Queensland. Trusted by businesses. Family owned. Fully insured.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aussie Gleam — Queensland Fleet Cleaning Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aussie Gleam | Fleet Cleaning & Mobile Car Detailing',
    description: 'Queensland\'s trusted fleet cleaning specialists. Logan to Gold Coast.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${dmSans.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body className="font-sans bg-pearl text-charcoal antialiased">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontFamily: 'var(--font-dm-sans)',
              background: '#0B1F3A',
              color: '#F5F7FA',
              borderRadius: '4px',
              fontSize: '14px',
            },
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
