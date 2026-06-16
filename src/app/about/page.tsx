import type { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <main className="container mx-auto flex h-[500px] flex-col items-center justify-center gap-4 text-center">
      <h1 className="mb-4 text-2xl font-medium">About</h1>
      <p className="max-w-2xl">
        This site is used to catalog the games I&apos;ve finished. I&apos;ve been doing this for 10
        years; PC games are a hobby of mine, and 90% of the games played are on the PC platform.
        Games are completed in campaign mode, most of them on normal or hard difficulty.
      </p>
      <Link href="/" className="mt-6 flex items-center gap-2 hover:text-brand-accent">
        <Icon icon="bi:arrow-left-circle" />
        Back to Home
      </Link>
    </main>
  )
}
