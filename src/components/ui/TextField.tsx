import type { InputHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type TextFieldProps = {
  label?: string
  hint?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

export function TextField({ label, hint, error, name, className, ...props }: TextFieldProps) {
  return (
    <label className="flex flex-col gap-1">
      {label && <span className="font-bold">{label}</span>}
      <input
        name={name}
        className={cn(
          'h-10 w-full rounded-sm bg-white px-3 text-sm font-medium text-brand-dark outline-none',
          'focus:ring-2 focus:ring-brand-accent',
          error && 'ring-2 ring-error',
          className,
        )}
        {...props}
      />
      {error ? (
        <span className="text-xs text-red-600">{error}</span>
      ) : (
        hint && <span className="text-xs italic">{hint}</span>
      )}
    </label>
  )
}
