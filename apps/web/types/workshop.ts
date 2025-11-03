export interface Workshop {
  _id: string
  title: string
  slug: {
    current: string
  }
  chapterNumber: number
  description: string
  pdfFile?: {
    asset: {
      _ref: string
      _type: string
      url: string
    }
  }
  instructions?: any[] // Portable Text
  order: number
}