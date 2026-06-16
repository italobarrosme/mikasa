import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function NotFound() {
  return (
    <section className="flex h-full items-center p-16">
      <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
        <div className="max-w-md text-center">
          <h2 className="mb-8 text-9xl font-extrabold text-brand-accent">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn&apos;t find this page.
          </p>
          <p className="mt-4 mb-8 text-brand-soft">
            But don&apos;t worry, you can find plenty of other things on our homepage.
          </p>
          <Link href="/" className="flex items-center justify-center gap-2 hover:text-brand-accent">
            <Icon icon="bi:arrow-left-circle" />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
