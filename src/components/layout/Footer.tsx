import type { ReactNode } from 'react'

export type FooterProps = {
  children?: ReactNode
  copyright: string
}

export function Footer({ children, copyright }: FooterProps) {
  return (
    <footer className="container mx-auto flex w-full items-center justify-between p-4">
      {children}
      <span className="mx-4">{copyright}</span>
    </footer>
  )
}
