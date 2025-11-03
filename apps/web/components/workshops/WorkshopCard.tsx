import Link from 'next/link'
import type { Workshop } from '@/types'
import { Badge } from '@/components/ui'

interface WorkshopCardProps {
  workshop: Workshop
  index: number
}

export function WorkshopCard({ workshop, index }: WorkshopCardProps) {
  const pdfUrl = workshop.pdfFile?.asset.url
  const icon = getWorkshopIcon(index)

  return (
    <article className="card p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="primary">
              فصل {workshop.chapterNumber}
            </Badge>
            <Badge variant="secondary">
              کارگاه #{workshop.order}
            </Badge>
            {index === 0 && (
              <Badge variant="success">
                🆕 جدید
              </Badge>
            )}
          </div>

          {/* Title */}
          <Link href={`/workshops/${workshop.slug.current}`}>
            <h2 className="text-2xl font-bold text-slate-900 mb-3 hover:text-primary-600 transition-colors">
              {workshop.title}
            </h2>
          </Link>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed mb-6">
            {workshop.description}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/workshops/${workshop.slug.current}`}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-6 py-2 rounded-lg transition-colors text-sm"
            >
              مشاهده جزئیات
            </Link>
            
            {pdfUrl && (
              <a
                href={pdfUrl}
                download
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-2 rounded-lg transition-colors text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                دانلود PDF
              </a>
            )}

            <Link
              href={`/diagrams?chapter=${workshop.chapterNumber}`}
              className="border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-medium px-6 py-2 rounded-lg transition-colors text-sm"
            >
              دیاگرام این فصل
            </Link>
          </div>
        </div>

        {/* Icon */}
        <div className="hidden md:block">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center text-4xl">
            {icon}
          </div>
        </div>
      </div>
    </article>
  )
}

function getWorkshopIcon(index: number): string {
  const icons = ['📝', '🎨', '🏗️', '💡', '✍️', '🎯', '🔍', '⚡', '🌟', '🚀']
  return icons[index % icons.length]
}