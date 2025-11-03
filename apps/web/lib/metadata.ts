import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'The Word Alchemists | جادوگران کلمه',
    template: '%s | The Word Alchemists',
  },
  description: 'From passive consumer to conscious architect - از مصرف‌کننده منفعل به معمار آگاه. راهنمای جامع برای کشف و شکوفایی استعداد نویسندگی',
  keywords: [
    'نویسندگی',
    'خلاقیت',
    'جادوگران کلمه',
    'writing',
    'creativity',
    'word alchemy',
    'کتاب نویسندگی',
    'آموزش نویسندگی',
    'هنر نوشتن',
  ],
  authors: [{ name: 'نام نویسنده', url: siteUrl }],
  creator: 'The Word Alchemists',
  publisher: 'نام ناشر',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: siteUrl,
    siteName: 'The Word Alchemists',
    title: 'The Word Alchemists | جادوگران کلمه',
    description: 'From passive consumer to conscious architect',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Word Alchemists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Word Alchemists',
    description: 'From passive consumer to conscious architect',
    creator: '@yourhandle',
    images: ['/og-image.jpg'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
}

// Helper برای ساخت metadata صفحات
export function createMetadata(override: Metadata): Metadata {
  return {
    ...baseMetadata,
    ...override,
    openGraph: {
      ...baseMetadata.openGraph,
      ...override.openGraph,
    },
    twitter: {
      ...baseMetadata.twitter,
      ...override.twitter,
    },
  }
}