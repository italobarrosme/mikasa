'use client'

import { Icon } from '@iconify/react'
import { cn } from '@/lib/cn'

export type StarRatingProps = {
  label?: string
  value: number
  max?: number
  onChange: (value: number) => void
}

export function StarRating({ label, value, max = 5, onChange }: StarRatingProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <span className="font-bold">{label}</span>}
      <div className="flex items-center gap-1" role="radiogroup" aria-label={label}>
        {Array.from({ length: max }, (_, index) => index + 1).map((star) => {
          const active = star <= value
          return (
            <button
              key={star}
              type="button"
              role="radio"
              aria-checked={active}
              aria-label={`${star} star${star > 1 ? 's' : ''}`}
              className="transition-transform hover:scale-110"
              onClick={() => onChange(star)}
            >
              <Icon
                icon={active ? 'carbon:star-filled' : 'carbon:star'}
                width={32}
                className={cn(active ? 'text-brand-accent' : 'text-brand-dark/40')}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}
