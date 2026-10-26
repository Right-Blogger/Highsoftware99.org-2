import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  metadataBase: new URL('https://highsoftware99.org'),
  title: {
    default: 'SEO, Digital Marketing and Web Development | HighSoftware99',
    template: '%s | HighSoftware99',
  },
  description: 'HighSoftware99 provides SEO audits, keyword research, website optimization, digital marketing, and web development services to help businesses grow online.',
  keywords: [
    'SEO by HighSoftware99',
    'SEO Instant Appear HighSoftware99',
    'SEO Services',
    'Digital Marketing',
    'Web Development',
    'Website Optimization',
    'Analytics and Tracking',
  ],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'SEO, Digital Marketing and Web Development | HighSoftware99',
    description: 'HighSoftware99 provides SEO audits, keyword research, website optimization, digital marketing, and web development services to help businesses grow online.',
    url: 'https://highsoftware99.org',
    siteName: 'HighSoftware99',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/home/hero-growth.png',
        width: 1200,
        height: 630,
        alt: 'HighSoftware99 - SEO, Digital Marketing and Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO, Digital Marketing and Web Development | HighSoftware99',
    description: 'HighSoftware99 provides SEO audits, keyword research, website optimization, digital marketing, and web development services to help businesses grow online.',
    images: ['/images/home/hero-growth.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="bg-white text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
