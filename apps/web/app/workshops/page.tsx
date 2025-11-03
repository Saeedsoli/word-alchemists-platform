import { client } from '@/lib/sanity'
import { WORKSHOPS_QUERY } from '@/lib/sanity.queries'
import type { Workshop } from '@/types'
import Link from 'next/link'

async function getWorkshops(): Promise<Workshop[]> {
  return client.fetch(WORKSHOPS_QUERY)
}

export const metadata = {
  title: 'کارگاه‌های عملی | The Word Alchemists',
  description: 'تمرین‌های عملی برای تبدیل شدن به معمار آگاه کلمات',
}

export default async function WorkshopsPage() {
  const workshops = await getWorkshops()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container-custom py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            کارگاه‌های عملی
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mb-6">
            از نظریه به عمل. هر کارگاه شامل تمرین‌های هدفمند و قالب‌های قابل دانلود است.
            این تمرین‌ها مسیر شما را از یادگیری به تسلط هموار می‌کنند.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl">
            <p className="text-sm text-blue-800">
              💡 <strong>نکته:</strong> هر کارگاه با یک فصل خاص کتاب مرتبط است. 
              پیشنهاد می‌کنیم ابتدا فصل را بخوانید، سپس کارگاه را انجام دهید.
            </p>
          </div>
        </div>
      </header>

      {/* Workshops List */}
      <main className="container-custom py-12">
        {workshops.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold text-slate-700 mb-2">
              هنوز کارگاهی اضافه نشده
            </h2>
            <p className="text-slate-500">
              به زودی کارگاه‌های عملی را اینجا خواهید دید
            </p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">
            {workshops.map((workshop, index) => (
              <WorkshopCard 
                key={workshop._id} 
                workshop={workshop} 
                index={index}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

function WorkshopCard({ 
  workshop, 
  index 
}: { 
  workshop: Workshop
  index: number 
}) {
  const pdfUrl = workshop.pdfFile?.asset.url

  return (
    <article className="card p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full">
              فصل {workshop.chapterNumber}
            </span>
            <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
              کارگاه #{workshop.order}
            </span>
            {index === 0 && (
              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                🆕 جدید
              </span>
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
            {getWorkshopIcon(index)}
          </div>
        </div>
      </div>
    </article>
  )
}

function getWorkshopIcon(index: number): string {
  const icons = ['📝', '🎨', '🏗️', '💡', '✍️', '🎯', '🔍', '⚡']
  return icons[index % icons.length]
}

export const revalidate = 3600