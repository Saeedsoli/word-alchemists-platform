'use client'

import { urlFor } from '@/lib/sanity'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export function useSanityImage(source: SanityImageSource) {
  const getUrl = (width?: number, height?: number) => {
    let builder = urlFor(source)
    
    if (width) builder = builder.width(width)
    if (height) builder = builder.height(height)
    
    return builder.url()
  }

  const getThumbnail = () => getUrl(400, 300)
  const getFull = () => getUrl(2000)

  return {
    getUrl,
    getThumbnail,
    getFull,
  }
}