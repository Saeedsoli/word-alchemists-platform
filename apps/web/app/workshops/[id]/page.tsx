import { client } from '@/lib/sanity'
import { WORKSHOP_BY_SLUG_QUERY } from '@/lib/sanity.queries'
import type { Workshop } from '@/types'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'

async function getWorkshop(slug: string): Promise<Workshop | null> {
  return client.fetch(WORKSHOP_BY_SLUG_QUERY, { slug })
}

export default async function WorkshopDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const workshop = await getWorkshop(params.id)

  if (!workshop) {
    notFound()
  }

  const pdfUrl = workshop.pdfFile?.asset.url

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container-custom py-12">
          <Link
            href="/workshops"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            بازگشت به کارگاه‌ها
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full">
              فصل {workshop.chapterNumber}
            </span>
            <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
              کارگاه #{workshop.order}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {workshop.title}
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl">
            {workshop.description}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          {/* Download Card */}
          {pdfUrl && (
            <div className="card p-8 mb-12 bg-gradient-to-r from-primary-50 to-blue-50 border-2 border-primary-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    قالب کارگاه
                  </h2>
                  <p className="text-slate-600">
                    فایل PDF شامل دستورالعمل‌ها، تمرین‌ها و قالب‌های قابل تکمیل
                  </p>
                </div>
                <a
                  href={pdfUrl}
                  download
                  className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 flex items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  دانلود PDF
                </a>
              </div>
            </div>
          )}

          {/* Instructions */}
          {workshop.instructions && (
            <div className="card p-8 mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                دستورالعمل کارگاه
              </h2>
              <div className="prose prose-lg max-w-none prose-slate">
                <PortableText value={workshop.instructions} />
              </div>
            </div>
          )}

          {/* Tips */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-12">
            <h3 className="text-xl font-bold text-amber-900 mb-3 flex items-center gap-2">
              <span>💡</span>
              نکات مهم
            </h3>
            <ul className="space-y-2 text-amber-800">
              <li>• زمان کافی (حداقل ۳۰ دقیقه) برای این کارگاه اختصاص دهید</li>
              <li>• محیطی آرام و بدون حواس‌پرتی انتخاب کنید</li>
              <li>• نگران درست یا غلط بودن پاسخ‌ها نباشید</li>
              <li>• صادقانه و از روی قلب بنویسید</li>
            </ul>
          </div>

          {/* Related Content */}
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href={`/diagrams?chapter=${workshop.chapterNumber}`}
              className="card p-6 hover:shadow-xl transition-shadow group"
            >
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                دیاگرام‌های فصل {workshop.chapterNumber}
              </h3>
              <p className="text-slate-600 text-sm">
                مشاهده دیاگرام‌های مرتبط با این کارگاه
              </p>
            </Link>

            <Link
              href="/workshops"
              className="card p-6 hover:shadow-xl transition-shadow group"
            >
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                سایر کارگاه‌ها
              </h3>
              <p className="text-slate-600 text-sm">
                مشاهده همه کارگاه‌های عملی کتاب
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

// Generate static params for all workshops
export async function generateStaticParams() {
  const workshops = await client.fetch<Workshop[]>(
    `*[_type == "workshop"]{ slug }`
  )

  return workshops.map((workshop) => ({
    id: workshop.slug.current,
  }))
}

export const revalidate = 3600