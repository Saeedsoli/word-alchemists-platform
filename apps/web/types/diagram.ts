export interface Diagram {
  _id: string
  title: string
  slug: {
    current: string
  }
  chapterNumber: number
  description: string
  image: {
    asset: {
      _ref: string
      _type: string
    }
    alt: string
  }
  order: number
  publishedAt: string
}