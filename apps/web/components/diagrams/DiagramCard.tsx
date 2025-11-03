import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'
import type { Diagram } from '@/types'
import { Badge } from '@/components/ui'

interface DiagramCardProps {
  diagram: Diagram
  priority?: boolean
}

export function DiagramCard({ diagram, priority = false }: DiagramCardProps) {
  const imageUrl = urlFor(diagram.image).width(800).height(600).url()
  const downloadUrl = urlFor(diagram.image).width(2000).url()

  return (
    <article className="card overflow-hidden group">
      {/* Image */}
      <Link 
        href={`/diagrams/${diagram.slug.current}`}
        className="block relative h-64 bg-slate-100 overflow-hidden"
      >
        <Image
          src={imageUrl}
          alt={diagram.image.alt}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          priority={priority}
        />
        <div className="absolute top-3 right-3">
          <Badge variant="primary">
            فصل {diagram.chapterNumber}
          </Badge>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="primary">
            فصل {diagram.chapterNumber}
          </Badge>
          <span className="text-xs text-slate-400">
            #{diagram.order}
          </span>
        </div>

        <Link href={`/diagrams/${diagram.slug.current}`}>
          <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-primary-600 transition-colors line-clamp-2">
            {diagram.title}
          </h3>
        </Link>

        <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed">
          {diagram.description}
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href={`/diagrams/${diagram.slug.current}`}
            className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-4 py-2 rounded-lg transition-colors text-sm"
          >
            مشاهده
          </Link>
          <a
            href={downloadUrl}
            download={`${diagram.slug.current}.jpg`}
            className="flex-1 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            دانلود
          </a>
        </div>
      </div>
    </article>
  )
}