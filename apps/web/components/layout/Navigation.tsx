'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/', label: 'خانه' },
  { href: '/diagrams', label: 'دیاگرام‌ها' },
  { href: '/workshops', label: 'کارگاه‌ها' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center gap-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
        
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'font-medium transition-colors relative pb-1',
              isActive
                ? 'text-slate-900'
                : 'text-slate-600 hover:text-slate-900'
            )}
          >
            {item.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}