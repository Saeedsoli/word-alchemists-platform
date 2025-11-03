'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          خطایی رخ داده است
        </h2>
        <p className="text-slate-600 mb-6">
          {error.message || 'متأسفانه مشکلی پیش آمده است'}
        </p>
        <button
          onClick={reset}
          className="btn-primary"
        >
          تلاش مجدد
        </button>
      </div>
    </div>
  )
}