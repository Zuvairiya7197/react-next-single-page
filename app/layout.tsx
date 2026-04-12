import type { Metadata } from 'next';

import '@fontsource/manrope/index.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@/app/globals.css';
import '@/styles/animations.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://emlakrealestatellc.vercel.app'),
  icons: {
    icon: '/images/favicon.svg',
    shortcut: '/images/favicon.svg',
    apple: '/images/favicon.svg',
  },
  title:
    'Emlak Real Estate LLC | Premium Real Estate Experiences in Dubai, UAE',
  description:
    'Emlak Real Estate LLC helps buyers, sellers, and investors discover high-value residential and commercial properties with confidence.',
  keywords: [
    'real estate agency',
    'luxury homes',
    'property investment',
    'commercial real estate',
    'residential properties',
    'real estate website',
  ],
  openGraph: {
    title:
      'Emlak Real Estate LLC | Premium Real Estate Experiences in Dubai, UAE',
    description:
      'Discover curated properties, market guidance, and end-to-end real estate support from Emlak Real Estate LLC.',
    url: 'https://emlakrealestatellc.vercel.app',
    siteName: 'Emlak Real Estate LLC',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Emlak Real Estate LLC real estate website preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Emlak Real Estate LLC | Premium Real Estate Experiences in Dubai, UAE',
    description:
      'Modern real estate solutions for buyers, sellers, and investors.',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[var(--color-background)] font-sans text-[var(--color-slate-900)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--color-slate-900)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
