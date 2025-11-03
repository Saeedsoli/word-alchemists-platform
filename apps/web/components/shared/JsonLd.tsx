interface BookJsonLdProps {
  name: string
  author: string
  description: string
  isbn?: string
  numberOfPages?: number
  inLanguage?: string
}

export function BookJsonLd({
  name,
  author,
  description,
  isbn,
  numberOfPages,
  inLanguage = 'fa',
}: BookJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name,
    author: {
      '@type': 'Person',
      name: author,
    },
    description,
    inLanguage,
    ...(isbn && { isbn }),
    ...(numberOfPages && { numberOfPages }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

interface WebsiteJsonLdProps {
  name: string
  url: string
  description: string
}

export function WebsiteJsonLd({ name, url, description }: WebsiteJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}