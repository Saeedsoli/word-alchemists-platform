import { client, urlFor } from '@/lib/sanity'
import { DIAGRAMS_QUERY } from '@/lib/sanity.queries'
import type { Diagram } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

async function getDiagrams(): Promise<Diagram[]> {
  return client.fetch(DIAGRAMS_QUERY)
}

export const metadata = {
  title: 'کتابخانه دیاگرام‌ها | The Word Alchemists',
  description: 'مشاهده و دانلود تمام دیاگرام‌های مینیمال کتاب The Word Alchemists',
}

export default async function DiagramsPage() {
  const diagrams = await getDiagrams()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container-custom py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            کتابخانه دیاگرام‌ها
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            تمام دیاگرام‌های مینیمال کتاب را با کیفیت بالا مشاهده و دانلود کنید.
            هر دیاگرام، نمایی بصری از یک مفهوم کلیدی است.
          </p>
        </div>
      </header>

      {/* Diagrams Grid */}
      <main className="container-custom py-12">
        {diagrams.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📊</div>
            <h2 className="text-2xl font-bold text-slate-700 mb-2">
              هنوز دیاگرامی اضافه نشده
            </h2>
            <p className="text-slate-500">
              به زودی دیاگرام‌های کتاب را اینجا خواهید دید
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagrams.map((diagram) => (
              <DiagramCard key={diagram._id} diagram={diagram} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

function DiagramCard({ diagram }: { diagram: Diagram }) {
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
        />
      </Link>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            فصل {diagram.chapterNumber}
          </span>
          <span className="text-xs text-slate-400">
            #{diagram.order}
          </span>
        </div>

        <Link href={`/diagrams/${diagram.slug.current}`}>
          <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-primary-600 transition-colors">
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
            className="flex-1 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm"
          >
            دانلود
          </a>
        </div>
      </div>
    </article>
  )
}

// Revalidate every hour
export const revalidate = 3600