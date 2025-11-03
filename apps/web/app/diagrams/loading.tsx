export default function DiagramsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white border-b">
        <div className="container-custom py-12">
          <div className="h-12 bg-slate-200 rounded-lg w-64 mb-3 animate-pulse" />
          <div className="h-6 bg-slate-200 rounded-lg w-96 animate-pulse" />
        </div>
      </header>

      <main className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card overflow-hidden">
              <div className="h-64 bg-slate-200 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-6 bg-slate-200 rounded animate-pulse" />
                <div className="h-4 bg-slate-200 rounded animate-pulse" />
                <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}