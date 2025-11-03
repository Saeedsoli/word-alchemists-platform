import { groq } from 'next-sanity'

// Query برای گرفتن همه دیاگرام‌ها
export const DIAGRAMS_QUERY = groq`
  *[_type == "diagram"] | order(order asc) {
    _id,
    title,
    slug,
    chapterNumber,
    description,
    image {
      asset,
      alt
    },
    order,
    publishedAt
  }
`

// Query برای گرفتن یک دیاگرام با slug
export const DIAGRAM_BY_SLUG_QUERY = groq`
  *[_type == "diagram" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    chapterNumber,
    description,
    image {
      asset,
      alt
    },
    order,
    publishedAt
  }
`

// Query برای گرفتن همه کارگاه‌ها
export const WORKSHOPS_QUERY = groq`
  *[_type == "workshop"] | order(order asc) {
    _id,
    title,
    slug,
    chapterNumber,
    description,
    pdfFile {
      asset
    },
    order
  }
`

// Query برای گرفتن یک کارگاه با slug
export const WORKSHOP_BY_SLUG_QUERY = groq`
  *[_type == "workshop" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    chapterNumber,
    description,
    pdfFile {
      asset
    },
    instructions,
    order
  }
`

// Query برای گرفتن فصل 16 (مخفی)
export const SECRET_CHAPTER_QUERY = groq`
  *[_type == "chapter" && chapterNumber == 16][0] {
    _id,
    title,
    chapterNumber,
    subtitle,
    content,
    isSecret
  }
`