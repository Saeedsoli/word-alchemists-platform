import Link from 'next/link'
import { Button } from '@/components/ui'

interface CTAProps {
  title?: string
  description?: string
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
  variant?: 'default' | 'centered' | 'split'
}

export function CTA({
  title = 'آماده برای شروع سفر خود؟',
  description = 'از مصرف‌کننده منفعل به معمار آگاه تبدیل شوید',
  primaryText = 'خرید کتاب',
  primaryHref = '#',
  secondaryText = 'مشاهده دیاگرام‌ها',
  secondaryHref = '/diagrams',
  variant = 'default',
}: CTAProps) {
  if (variant === 'centered') {
    return (
      <section className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-12 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryHref}
            className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 shadow-lg"
          >
            {primaryText}
          </a>
          <Link
            href={secondaryHref}
            className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors border-2 border-white/20"
          >
            {secondaryText}
          </Link>
        </div>
      </section>
    )
  }

  if (variant === 'split') {
    return (
      <section className="bg-slate-900 rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-xl text-slate-300 mb-6">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={primaryHref}
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition-colors text-center"
              >
                {primaryText}
              </a>
              <Link
                href={secondaryHref}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold transition-colors text-center border border-white/20"
              >
                {secondaryText}
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-600 to-blue-600 p-12 flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-7xl mb-4">✨</div>
              <p className="text-2xl font-bold">جادوگران کلمه</p>
              <p className="text-primary-100 mt-2">The Word Alchemists</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Default variant
  return (
    <section className="bg-primary-50 border-2 border-primary-200 rounded-2xl p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={primaryHref}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap text-center"
          >
            {primaryText}
          </a>
          <Link
            href={secondaryHref}
            className="bg-white hover:bg-slate-50 text-slate-700 px-6 py-3 rounded-lg font-medium transition-colors border-2 border-slate-200 whitespace-nowrap text-center"
          >
            {secondaryText}
          </Link>
        </div>
      </div>
    </section>
  )
}