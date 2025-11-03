import { client, urlFor } from '@/lib/sanity'
import { DIAGRAM_BY_SLUG_QUERY } from '@/lib/sanity.queries'
import type { Diagram } from '@/types'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

async function getDiagram(slug: string): Promise<Diagram | null> {
  return client.fetch(DIAGRAM_BY_SLUG_QUERY, { slug })
}

export default async function DiagramDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const diagram = await getDiagram(params.slug)

  if (!diagram) {
    notFound()
  }

  const imageUrl = urlFor(diagram.image).width(1200).height(900).url()
  const downloadUrl = urlFor(diagram.image).width(3000).url()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container-custom py-8">
          <Link
            href="/diagrams"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            بازگشت به کتابخانه دیاگرام‌ها
          </Link>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full">
                  فصل {diagram.chapterNumber}
                </span>
                <span className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                  دیاگرام #{diagram.order}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                {diagram.title}
              </h1>

              <p className="text-lg text-slate-600 max-w-2xl">
                {diagram.description}
              </p>
            </div>

            <a
              href={downloadUrl}
              download={`${diagram.slug.current}.jpg`}
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 flex items-center gap-3 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              دانلود با کیفیت بالا
              <span className="text-xs opacity-80">(3000px)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Image */}
      <main className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          {/* Image Card */}
          <div className="card overflow-hidden mb-12">
            <div className="relative bg-slate-100" style={{ aspectRatio: '4/3' }}>
              <Image
                src={imageUrl}
                alt={diagram.image.alt}
                fill
                className="object-contain p-8"
                priority
              />
            </div>
            <div className="p-6 bg-slate-50 border-t">
              <p className="text-sm text-slate-600 text-center">
                💡 برای بزرگ‌نمایی، روی تصویر کلیک راست کنید و "باز کردن تصویر در تب جدید" را انتخاب کنید
              </p>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card p-6 text-center">
              <div className="text-3xl mb-2">📖</div>
              <div className="text-2xl font-bold text-slate-900 mb-1">
                فصل {diagram.chapterNumber}
              </div>
              <div className="text-sm text-slate-600">از ۱۶ فصل کتاب</div>
            </div>

            <div className="card p-6 text-center">
              <div className="text-3xl mb-2">📊</div>
              <div className="text-2xl font-bold text-slate-900 mb-1">
                دیاگرام #{diagram.order}
              </div>
              <div className="text-sm text-slate-600">از مجموعه دیاگرام‌ها</div>
            </div>

            <div className="card p-6 text-center">
              <div className="text-3xl mb-2">🎨</div>
              <div className="text-2xl font-bold text-slate-900 mb-1">
                مینیمال
              </div>
              <div className="text-sm text-slate-600">طراحی ساده و قدرتمند</div>
            </div>
          </div>

          {/* How to Use */}
          <div className="card p-8 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <span className="text-3xl">💡</span>
              چگونه از این دیاگرام استفاده کنیم؟
            </h2>
            <div className="space-y-4 text-slate-700">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-1">مطالعه فصل مربوطه</h3>
                  <p className="text-slate-600">ابتدا فصل {diagram.chapterNumber} کتاب را بخوانید تا با مفاهیم آشنا شوید</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-1">تأمل روی دیاگرام</h3>
                  <p className="text-slate-600">زمان بگذارید تا دیاگرام را به دقت مشاهده کنید و ارتباط آن با متن را درک کنید</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-1">دانلود و استفاده</h3>
                  <p className="text-slate-600">دیاگرام را دانلود کنید و در یادداشت‌ها، پروژه‌ها یا ارائه‌های خود استفاده کنید</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold mb-1">انجام کارگاه</h3>
                  <p className="text-slate-600">با انجام کارگاه مرتبط، مفاهیم را عملی کنید</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Content */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">محتوای مرتبط</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href={`/workshops?chapter=${diagram.chapterNumber}`}
                className="card p-6 hover:shadow-xl transition-shadow group"
              >
                <div className="text-4xl mb-3">📝</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                  کارگاه فصل {diagram.chapterNumber}
                </h3>
                <p className="text-slate-600 text-sm">
                  با انجام کارگاه عملی، مفاهیم این فصل را تمرین کنید
                </p>
                <div className="mt-4 text-primary-600 font-medium flex items-center gap-2">
                  مشاهده کارگاه
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link
                href="/diagrams"
                className="card p-6 hover:shadow-xl transition-shadow group"
              >
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                  سایر دیاگرام‌ها
                </h3>
                <p className="text-slate-600 text-sm">
                  مشاهده تمام دیاگرام‌های کتاب
                </p>
                <div className="mt-4 text-primary-600 font-medium flex items-center gap-2">
                  مشاهده کتابخانه
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Download Options */}
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-blue-50 border-2 border-primary-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">گزینه‌های دانلود</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href={urlFor(diagram.image).width(1200).url()}
                download
                className="bg-white hover:bg-slate-50 p-4 rounded-lg text-center transition-colors border border-slate-200"
              >
                <div className="font-bold text-slate-900 mb-1">کیفیت متوسط</div>
                <div className="text-sm text-slate-600 mb-2">1200 × 900 پیکسل</div>
                <div className="text-xs text-slate-500">برای نمایش روی صفحه</div>
              </a>

              <a
                href={urlFor(diagram.image).width(2000).url()}
                download
                className="bg-white hover:bg-slate-50 p-4 rounded-lg text-center transition-colors border border-slate-200"
              >
                <div className="font-bold text-slate-900 mb-1">کیفیت بالا</div>
                <div className="text-sm text-slate-600 mb-2">2000 × 1500 پیکسل</div>
                <div className="text-xs text-slate-500">برای چاپ A4</div>
              </a>

              <a
                href={urlFor(diagram.image).width(3000).url()}
                download
                className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-lg text-center transition-colors"
              >
                <div className="font-bold mb-1">کیفیت حرفه‌ای</div>
                <div className="text-sm mb-2">3000 × 2250 پیکسل</div>
                <div className="text-xs opacity-90">برای چاپ بزرگ</div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Generate static params
export async function generateStaticParams() {
  const diagrams = await client.fetch<Diagram[]>(
    `*[_type == "diagram"]{ slug }`
  )

  return diagrams.map((diagram) => ({
    slug: diagram.slug.current,
  }))
}

export const revalidate = 3600