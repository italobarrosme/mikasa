import type { ReactNode } from 'react'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/cn'

export type SideFormProps = {
  children: ReactNode
  title?: string
  open: boolean
  onClose: () => void
}

export function SideForm({ children, title = 'Form', open, onClose }: SideFormProps) {
  return (
    <>
      <div
        aria-hidden
        onClick={onClose}
        className={cn(
          'fixed inset-0 z-40 bg-black/40 transition-opacity duration-300',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          'fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-brand-secondary text-brand-light shadow-xl',
          'transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <header className="flex items-center justify-between border-b border-brand-light/20 p-6">
          <h2 className="text-xl font-bold">{title}</h2>
          <button type="button" aria-label="Close form" onClick={onClose}>
            <Icon icon="ep:circle-close-filled" className="text-2xl" />
          </button>
        </header>
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </aside>
    </>
  )
}
