export const SITE_CONFIG = {
  name: 'The Word Alchemists',
  nameFa: 'جادوگران کلمه',
  description: 'From passive consumer to conscious architect',
  descriptionFa: 'از مصرف‌کننده منفعل به معمار آگاه',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
} as const

export const ROUTES = {
  home: '/',
  diagrams: '/diagrams',
  workshops: '/workshops',
  secretChapter: '/secret/chapter-16',
} as const

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/yourhandle',
  instagram: 'https://instagram.com/yourhandle',
  // اضافه کن هر چی می‌خوای
} as const

export const BOOK_INFO = {
  author: 'نام نویسنده',
  publishYear: 2024,
  chapters: 16,
  isbn: 'شابک کتاب',
} as const