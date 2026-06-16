'use client'

import { useId, type ChangeEvent } from 'react'
import { Icon } from '@iconify/react'

export type FileFieldProps = {
  label?: string
  name?: string
  placeholder?: string
  accept?: string
  file: File | null
  onSelect: (file: File | null) => void
}

export function FileField({
  label,
  name,
  placeholder = 'Attach a file',
  accept = 'image/*',
  file,
  onSelect,
}: FileFieldProps) {
  const inputId = useId()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSelect(event.target.files?.[0] ?? null)
  }

  return (
    <div className="flex flex-col gap-1">
      {label && <span className="font-bold">{label}</span>}
      <label
        htmlFor={inputId}
        className="flex h-10 cursor-pointer items-center gap-2 rounded-sm bg-white px-3 text-sm font-medium text-brand-dark"
      >
        <Icon icon="bx:image-add" className="text-xl" />
        <span className="truncate">{file ? file.name : placeholder}</span>
      </label>
      <input
        id={inputId}
        name={name}
        type="file"
        accept={accept}
        className="sr-only"
        onChange={handleChange}
      />
    </div>
  )
}
