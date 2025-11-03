'use client'

import { useState } from 'react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import type { Diagram } from '@/types'

interface DiagramViewerProps {
  diagram: Diagram
}

export function DiagramViewer({ diagram }: DiagramViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const imageUrl = urlFor(diagram.image).width(1200).height(900).url()
  const fullImageUrl = urlFor(diagram.image).width(3000).url()

  return (
    <>
      {/* Main Viewer */}
      <div className="card overflow-hidden">
        <div 
          className="relative bg-slate-100 cursor-zoom-in"
          style={{ aspectRatio: '4/3' }}
          onClick={() => setIsFullscreen(true)}
        >
          <Image
            src={imageUrl}
            alt={diagram.image.alt}
            fill
            className="object-contain p-8 hover:scale-105 transition-transform duration-300"
            priority
          />
        </div>
        <div className="p-6 bg-slate-50 border-t">
          <p className="text-sm text-slate-600 text-center flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
            برای بزرگ‌نمایی کلیک کنید
          </p>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 left-4 text-white hover:text-slate-300 p-2 rounded-lg bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="بستن"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative w-full h-full max-w-6xl">
            <Image
              src={fullImageUrl}
              alt={diagram.image.alt}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-lg backdrop-blur-sm">
            <p className="text-sm text-center">
              {diagram.title} - فصل {diagram.chapterNumber}
            </p>
          </div>
        </div>
      )}
    </>
  )
}