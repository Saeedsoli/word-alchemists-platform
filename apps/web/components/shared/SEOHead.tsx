import { baseMetadata } from '@/lib/metadata'

interface SEOHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  author?: string
}

export function SEOHead({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  author,
}: SEOHeadProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const fullTitle = title
    ? `${title} | The Word Alchemists`
    : baseMetadata.title?.toString() || 'The Word Alchemists'
  const fullDescription = description || baseMetadata.description || ''
  const fullImage = image || '/og-image.jpg'
  const fullUrl = url || siteUrl

  // این component فقط برای نمایش ساختار SEO است
  // metadata واقعی در generateMetadata یا metadata export می‌شود

  return (
    <>
      {/* این component در Next.js 14 نیاز نیست */}
      {/* metadata را در page.tsx به صورت export می‌کنیم */}
    </>
  )
}

// Helper برای صفحات
export function generatePageMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  author,
}: SEOHeadProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: url || siteUrl,
      type,
      images: image ? [{ url: image }] : undefined,
      publishedTime,
      authors: author ? [author] : undefined,
    },
    twitter: {
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}