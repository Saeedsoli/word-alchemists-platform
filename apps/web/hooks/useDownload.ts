'use client'

import { useState } from 'react'
import { downloadFile } from '@/lib/utils'

export function useDownload() {
  const [isDownloading, setIsDownloading] = useState(false)

  const download = async (url: string, filename: string) => {
    try {
      setIsDownloading(true)
      downloadFile(url, filename)
    } catch (error) {
      console.error('Download failed:', error)
      throw error
    } finally {
      setIsDownloading(false)
    }
  }

  return {
    download,
    isDownloading,
  }
}