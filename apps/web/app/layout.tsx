import './globals.css'
import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { baseMetadata } from '@/lib/metadata'  // ⬅️ این خط رو اضافه کن

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

// ⬅️ از baseMetadata استفاده کن
export const metadata: Metadata = baseMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <main className="flex-grow">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  )
}