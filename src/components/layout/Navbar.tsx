'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon } from '@iconify/react'
import { cn } from '@/lib/cn'

const pages = [
  { name: 'Home', href: '/', icon: 'mdi:home' },
  { name: 'Game List', href: '/games', icon: 'mdi:gamepad-variant' },
  { name: 'About', href: '/about', icon: 'mdi:information' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="container mx-auto flex items-center justify-between p-4">
      <div className="hidden text-3xl text-brand-light lg:block">
        <Icon icon="simple-icons:pcgamingwiki" />
      </div>
      <ul className="flex items-center gap-6">
        {pages.map((page) => {
          const active = pathname === page.href
          return (
            <li key={page.name}>
              <Link
                href={page.href}
                className={cn(
                  'flex items-center gap-2 transition-colors hover:text-brand-accent',
                  active && 'text-brand-accent',
                )}
              >
                <Icon icon={page.icon} />
                <span>{page.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
