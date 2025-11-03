export default function SecretChapterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen">
      {children}
    </div>
  )
}