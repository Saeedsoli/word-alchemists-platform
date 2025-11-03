import type { Diagram } from '@/types'
import { DiagramCard } from './DiagramCard'

interface DiagramGridProps {
  diagrams: Diagram[]
  emptyMessage?: string
}

export function DiagramGrid({ 
  diagrams, 
  emptyMessage = 'هنوز دیاگرامی اضافه نشده است' 
}: DiagramGridProps) {
  if (diagrams.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">📊</div>
        <h2 className="text-2xl font-bold text-slate-700 mb-2">
          {emptyMessage}
        </h2>
        <p className="text-slate-500">
          به زودی دیاگرام‌های کتاب را اینجا خواهید دید
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {diagrams.map((diagram, index) => (
        <DiagramCard 
          key={diagram._id} 
          diagram={diagram}
          priority={index < 3} // اولین 3 تا priority دارند
        />
      ))}
    </div>
  )
}