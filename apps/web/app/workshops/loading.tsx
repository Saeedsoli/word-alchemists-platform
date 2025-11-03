export default function WorkshopsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-white border-b">
        <div className="container-custom py-12">
          <div className="h-12 bg-slate-200 rounded-lg w-64 mb-3 animate-pulse" />
          <div className="h-6 bg-slate-200 rounded-lg w-96 mb-6 animate-pulse" />
          <div className="h-20 bg-slate-200 rounded-lg max-w-2xl animate-pulse" />
        </div>
      </header>

      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="card p-6">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex gap-3">
                    <div className="h-8 bg-slate-200 rounded-full w-20 animate-pulse" />
                    <div className="h-8 bg-slate-200 rounded-full w-24 animate-pulse" />
                  </div>
                  <div className="h-8 bg-slate-200 rounded w-3/4 animate-pulse" />
                  <div className="h-20 bg-slate-200 rounded animate-pulse" />
                  <div className="flex gap-3">
                    <div className="h-10 bg-slate-200 rounded-lg w-32 animate-pulse" />
                    <div className="h-10 bg-slate-200 rounded-lg w-32 animate-pulse" />
                  </div>
                </div>
                <div className="hidden md:block w-20 h-20 bg-slate-200 rounded-2xl animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}