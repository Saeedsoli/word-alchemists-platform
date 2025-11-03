import { CTA } from '@/components/shared'
import { WebsiteJsonLd, BookJsonLd } from '@/components/shared'
import { SITE_CONFIG, BOOK_INFO } from '@/lib/constants'

export default function HomePage() {
  return (
    <div className="container-custom py-20">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
          جادوگران کلمه
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto text-balance">
          از مصرف‌کننده منفعل به معمار آگاه
        </p>
        <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
          From passive consumer to conscious architect
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#" className="btn-primary">
            خرید کتاب
          </a>
          <a 
            href="/diagrams" 
            className="bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            مشاهده دیاگرام‌ها
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 mb-20">
        <div className="card p-6">
          <h3 className="text-xl font-bold mb-3">📚 کتابخانه دیاگرام‌ها</h3>
          <p className="text-slate-600 mb-4">
            تمام دیاگرام‌های مینیمال کتاب را با کیفیت بالا مشاهده و دانلود کنید
          </p>
          <a href="/diagrams" className="text-primary-600 hover:text-primary-700 font-medium">
            مشاهده بیشتر ←
          </a>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-bold mb-3">🎨 کارگاه‌های عملی</h3>
          <p className="text-slate-600 mb-4">
            تمرین‌های عملی هر فصل را به همراه قالب‌های قابل تکمیل دریافت کنید
          </p>
          <a href="/workshops" className="text-primary-600 hover:text-primary-700 font-medium">
            مشاهده بیشتر ←
          </a>
        </div>

        <div className="card p-6">
          <h3 className="text-xl font-bold mb-3">🔓 فصل مخفی</h3>
          <p className="text-slate-600 mb-4">
            فصل شانزدهم: هنر شکستن قوانین - فقط برای خوانندگان کتاب
          </p>
          <a href="/secret/chapter-16" className="text-primary-600 hover:text-primary-700 font-medium">
            مشاهده بیشتر ←
          </a>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white rounded-2xl p-10 text-center mb-20">
        <h2 className="text-3xl font-bold mb-4">فلسفه کتاب</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          این کتاب برای کسانی نوشته شده که می‌خواهند از مصرف‌کننده‌ی منفعل کلمات
          به معمار آگاه آن‌ها تبدیل شوند. هر فصل، ابزاری است برای ساخت دنیای خودتان.
        </p>
      </section>

      {/* CTA Section */}
      <section className="mb-20">
        <CTA variant="centered" />
      </section>

      {/* Structured Data */}
      <WebsiteJsonLd
        name={SITE_CONFIG.nameFa}
        url={SITE_CONFIG.url}
        description={SITE_CONFIG.descriptionFa}
      />
      <BookJsonLd
        name={SITE_CONFIG.nameFa}
        author={BOOK_INFO.author}
        description={SITE_CONFIG.descriptionFa}
        isbn={BOOK_INFO.isbn}
      />
    </div>
  )
}