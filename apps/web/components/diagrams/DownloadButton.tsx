'use client'

import { useState } from 'react'
import { Button } from '@/components/ui'
import { useDownload } from '@/hooks/useDownload'

interface DownloadButtonProps {
  url: string
  filename: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'outline'
  children?: React.ReactNode
}

export function DownloadButton({ 
  url, 
  filename,
  size = 'md',
  variant = 'primary',
  children = 'دانلود'
}: DownloadButtonProps) {
  const { download, isDownloading } = useDownload()
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = async () => {
    try {
      await download(url, filename)
      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 2000)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleDownload}
      disabled={isDownloading}
    >
      {isDownloading ? (
        <>
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          در حال دانلود...
        </>
      ) : downloaded ? (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          دانلود شد!
        </>
      ) : (
        <>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {children}
        </>
      )}
    </Button>
  )
}