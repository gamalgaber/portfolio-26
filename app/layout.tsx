import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-bricolage',
})

const clashDisplay = localFont({
  src: [
    { path: '../public/fonts/clash-display-400.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/clash-display-500.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/clash-display-600.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/clash-display-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-clash',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gamalgaber.dev'),
  title: {
    default: 'Gamal Gaber — Full-Stack Developer',
    template: '%s | Gamal Gaber',
  },
  description:
    'Full-Stack Developer based in Cairo, Egypt. I build fast, beautiful digital products — from the database to the pixel. Specialising in Laravel, Next.js, and Shopify.',
  keywords: [
    'Full-Stack Developer',
    'Laravel Developer',
    'Next.js Developer',
    'React Developer',
    'Shopify Developer',
    'PHP Developer',
    'TypeScript',
    'Cairo Egypt',
    'Freelance Developer',
    'Arabic SaaS',
  ],
  authors: [{ name: 'Gamal Gaber', url: 'https://gamalgaber.dev' }],
  creator: 'Gamal Gaber',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gamalgaber.dev',
    siteName: 'Gamal Gaber',
    title: 'Gamal Gaber — Full-Stack Developer',
    description:
      'Full-Stack Developer based in Cairo, Egypt. Building fast, beautiful digital products with Laravel, Next.js, and Shopify.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gamal Gaber — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gamal Gaber — Full-Stack Developer',
    description: 'Full-Stack Developer based in Cairo, Egypt. Laravel · Next.js · Shopify.',
    creator: '@gamalgaber',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://gamalgaber.dev',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gamal Gaber',
  url: 'https://gamalgaber.dev',
  jobTitle: 'Full-Stack Developer',
  description:
    'Full-Stack Developer based in Cairo, Egypt specialising in Laravel, Next.js, and Shopify.',
  email: 'gamalgaber003@gmail.com',
  sameAs: [
    'https://github.com/gamalgaber',
    'https://linkedin.com/in/gamalgaber',
    'https://upwork.com/freelancers/gamal',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cairo',
    addressCountry: 'EG',
  },
  knowsAbout: ['Laravel', 'Next.js', 'React', 'PHP', 'TypeScript', 'PostgreSQL', 'Redis', 'Shopify', 'Docker'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${clashDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
