import type { TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

export type TextAreaFieldProps = {
  label?: string
  hint?: string
  error?: string
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextAreaField({
  label,
  hint,
  error,
  name,
  rows = 5,
  className,
  ...props
}: TextAreaFieldProps) {
  return (
    <label className="flex flex-col gap-1">
      {label && <span className="font-bold">{label}</span>}
      <textarea
        name={name}
        rows={rows}
        className={cn(
          'w-full resize-none rounded-sm bg-white p-3 text-sm font-medium text-brand-dark outline-none',
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
