import Link from 'next/link'
import { SOCIAL_LINKS, BOOK_INFO } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container-custom py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">✨</div>
              <div>
                <h3 className="text-xl font-bold">جادوگران کلمه</h3>
                <p className="text-sm text-slate-400">The Word Alchemists</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              از مصرف‌کننده منفعل به معمار آگاه. سفری برای کشف و شکوفایی 
              استعداد نویسندگی درون شما.
            </p>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="توییتر"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="اینستاگرام"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">دسترسی سریع</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  خانه
                </Link>
              </li>
              <li>
                <Link href="/diagrams" className="text-slate-400 hover:text-white transition-colors">
                  دیاگرام‌ها
                </Link>
              </li>
              <li>
                <Link href="/workshops" className="text-slate-400 hover:text-white transition-colors">
                  کارگاه‌ها
                </Link>
              </li>
            </ul>
          </div>

          {/* Book Info */}
          <div>
            <h4 className="font-bold mb-4">درباره کتاب</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>نویسنده: {BOOK_INFO.author}</li>
              <li>سال انتشار: {BOOK_INFO.publishYear}</li>
              <li>تعداد فصول: {BOOK_INFO.chapters}</li>
              <li className="text-xs pt-2">شابک: {BOOK_INFO.isbn}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © {currentYear} The Word Alchemists. تمام حقوق محفوظ است.
            </p>
            <p className="text-center">
              ساخته شده با ❤️ برای معماران آگاه کلمه
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}