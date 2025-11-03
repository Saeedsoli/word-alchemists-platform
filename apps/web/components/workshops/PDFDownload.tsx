'use client'

import { DownloadButton } from '@/components/diagrams/DownloadButton'

interface PDFDownloadProps {
  url?: string
  filename: string
  title?: string
}

export function PDFDownload({ url, filename, title = 'قالب کارگاه' }: PDFDownloadProps) {
  if (!url) {
    return (
      <div className="card p-6 bg-slate-50 border-2 border-slate-200 text-center">
        <div className="text-4xl mb-3">📄</div>
        <p className="text-slate-600">
          فایل PDF برای این کارگاه به زودی اضافه می‌شود
        </p>
      </div>
    )
  }

  return (
    <div className="card p-8 bg-gradient-to-r from-primary-50 to-blue-50 border-2 border-primary-200">
      <div className="flex items-center justify-between flex-wrap gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl shadow-sm">
            📄
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-1">
              {title}
            </h3>
            <p className="text-slate-600">
              فایل PDF شامل دستورالعمل‌ها، تمرین‌ها و قالب‌های قابل تکمیل
            </p>
          </div>
        </div>
        <DownloadButton
          url={url}
          filename={filename}
          size="lg"
        >
          <span>دانلود PDF</span>
          <span className="text-xs opacity-80">(کیفیت بالا)</span>
        </DownloadButton>
      </div>
    </div>
  )
}