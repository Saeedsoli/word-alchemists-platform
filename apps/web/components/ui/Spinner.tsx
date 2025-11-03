import React from 'react'
import { cn } from '@/lib/utils'

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Spinner({ size = 'md', className }: SpinnerProps) {
  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4',
  }

  return (
    <div
      className={cn(
        'inline-block animate-spin rounded-full border-slate-200 border-t-primary-600',
        sizes[size],
        className
      )}
      role="status"
      aria-label="در حال بارگذاری"
    >
      <span className="sr-only">در حال بارگذاری...</span>
    </div>
  )
}