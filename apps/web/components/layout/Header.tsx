'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="text-3xl group-hover:scale-110 transition-transform">
              ✨
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors">
                جادوگران کلمه
              </h1>
              <p className="text-xs text-slate-500 hidden md:block">
                The Word Alchemists
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              خانه
            </Link>
            <Link
              href="/diagrams"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              دیاگرام‌ها
            </Link>
            <Link
              href="/workshops"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
            >
              کارگاه‌ها
            </Link>
            <a
              href="#"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              خرید کتاب
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            aria-label="منوی موبایل"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-200 space-y-3">
            <Link
              href="/"
              className="block text-slate-600 hover:text-slate-900 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              خانه
            </Link>
            <Link
              href="/diagrams"
              className="block text-slate-600 hover:text-slate-900 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              دیاگرام‌ها
            </Link>
            <Link
              href="/workshops"
              className="block text-slate-600 hover:text-slate-900 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              کارگاه‌ها
            </Link>
            <a
              href="#"
              className="block bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium text-center"
            >
              خرید کتاب
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}