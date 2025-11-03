export interface Chapter {
  _id: string
  title: string
  chapterNumber: number
  subtitle?: string
  content: any[] // Portable Text
  isSecret: boolean
}