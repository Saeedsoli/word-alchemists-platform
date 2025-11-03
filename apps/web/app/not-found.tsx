export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">
          صفحه یافت نشد
        </h2>
        <p className="text-slate-600 mb-6">
          صفحه‌ای که دنبالش می‌گردید وجود ندارد
        </p>
        <a href="/" className="btn-primary">
          بازگشت به خانه
        </a>
      </div>
    </div>
  )
}