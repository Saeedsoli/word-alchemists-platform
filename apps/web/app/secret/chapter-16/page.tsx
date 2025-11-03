import { client } from '@/lib/sanity'
import { SECRET_CHAPTER_QUERY } from '@/lib/sanity.queries'
import type { Chapter } from '@/types'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

async function getSecretChapter(): Promise<Chapter | null> {
  return client.fetch(SECRET_CHAPTER_QUERY)
}

export const metadata = {
  title: 'فصل ۱۶: هنر شکستن قوانین | The Word Alchemists',
  description: 'فصل مخفی - فقط برای کسانی که سفر را تا اینجا طی کرده‌اند',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function SecretChapterPage() {
  const chapter = await getSecretChapter()

  if (!chapter) {
    notFound()
  }

  return (
    <>
      {/* Secret Header */}
      <header className="border-b border-slate-700">
        <div className="container-custom py-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="text-5xl">🔐</div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-5xl font-bold">
                  فصل {chapter.chapterNumber}: {chapter.title}
                </h1>
              </div>
              {chapter.subtitle && (
                <p className="text-xl text-slate-300">{chapter.subtitle}</p>
              )}
            </div>
          </div>

          <div className="bg-amber-900/30 border border-amber-700/50 rounded-lg p-6 max-w-2xl">
            <p className="text-amber-200 leading-relaxed">
              🎉 <strong>تبریک!</strong> شما به فصل مخفی کتاب رسیدید. 
              این محتوا فقط از طریق QR Code داخل کتاب قابل دسترسی است 
              و برای کسانی است که سفر را تا اینجا ادامه داده‌اند.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container-custom py-12">
        <article className="max-w-3xl mx-auto">
          {/* Chapter Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <div className="chapter-content">
              <PortableText 
                value={chapter.content}
                components={{
                  block: {
                    h2: ({ children }) => (
                      <h2 className="text-3xl font-bold mt-12 mb-6 text-white border-b border-slate-700 pb-3">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-200">
                        {children}
                      </h3>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-primary-500 pl-6 my-8 italic text-slate-300 text-xl bg-slate-800/50 py-4 rounded-r-lg">
                        {children}
                      </blockquote>
                    ),
                    normal: ({ children }) => (
                      <p className="mb-6 text-slate-300 leading-relaxed text-lg">
                        {children}
                      </p>
                    ),
                  },
                }}
              />
            </div>
          </div>

          {/* Completion Certificate */}
          <div className="card bg-gradient-to-br from-primary-900/80 to-purple-900/80 p-10 text-center border-2 border-primary-500/50 mb-12">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-3xl font-bold mb-4">شما سفر را کامل کردید!</h2>
            <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
              با خواندن تمام فصول و رسیدن به اینجا، شما نشان دادید که 
              از یک مصرف‌کننده منفعل به یک معمار آگاه تبدیل شده‌اید.
            </p>
            <div className="inline-block bg-white/10 px-6 py-3 rounded-lg border border-white/20">
              <p className="text-sm text-slate-400 mb-1">گواهی تکمیل</p>
              <p className="text-2xl font-bold">The Word Alchemist</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/workshops"
              className="card bg-slate-800 hover:bg-slate-700 p-8 text-center transition-all hover:scale-105 border border-slate-700"
            >
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-bold mb-2">شروع کارگاه‌ها</h3>
              <p className="text-slate-400 text-sm">
                حالا وقت عمل است. با کارگاه‌ها مهارت خود را تقویت کنید
              </p>
            </Link>

            <Link
              href="/diagrams"
              className="card bg-slate-800 hover:bg-slate-700 p-8 text-center transition-all hover:scale-105 border border-slate-700"
            >
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-bold mb-2">مرور دیاگرام‌ها</h3>
              <p className="text-slate-400 text-sm">
                دیاگرام‌های کتاب را مرور کنید و مفاهیم را تقویت نمایید
              </p>
            </Link>
          </div>

          {/* Share */}
          <div className="mt-12 text-center">
            <p className="text-slate-400 text-sm mb-4">
              این فصل را با دوستانی که کتاب را دارند به اشتراک بگذارید
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors border border-slate-700">
                اشتراک‌گذاری
              </button>
              <Link
                href="/"
                className="bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-lg transition-colors"
              >
                بازگشت به خانه
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700 mt-20">
        <div className="container-custom py-8 text-center text-slate-400 text-sm">
          <p>این فصل بخشی از کتاب «جادوگران کلمه» است</p>
          <p className="mt-2">© 2024 - تمام حقوق محفوظ است</p>
        </div>
      </footer>
    </>
  )
}

export const revalidate = 3600