export default function DiagramDetailLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white border-b">
        <div className="container-custom py-8">
          <div className="h-6 bg-slate-200 rounded w-48 mb-6 animate-pulse" />
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex-1">
              <div className="flex gap-3 mb-3">
                <div className="h-8 bg-slate-200 rounded-full w-20 animate-pulse" />
                <div className="h-8 bg-slate-200 rounded-full w-24 animate-pulse" />
              </div>
              <div className="h-10 bg-slate-200 rounded w-96 mb-2 animate-pulse" />
              <div className="h-6 bg-slate-200 rounded w-64 animate-pulse" />
            </div>
            <div className="h-16 bg-slate-200 rounded-xl w-64 animate-pulse" />
          </div>
        </div>
      </header>

      <main className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          <div className="card overflow-hidden mb-12">
            <div className="bg-slate-200 animate-pulse" style={{ aspectRatio: '4/3' }} />
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card p-6">
                <div className="h-24 bg-slate-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}