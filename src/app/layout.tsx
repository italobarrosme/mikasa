import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import { ApolloProvider } from '@/lib/apollo/apollo-provider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Game Over',
    template: 'Game Over | %s',
  },
  description: "Application for cataloging the games I've finished",
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen font-mono">
        <ApolloProvider>
          <Navbar />
          <main className="p-12">{children}</main>
          <Footer copyright={`Copyright ${new Date().getFullYear()} YellowScreen`} />
        </ApolloProvider>
      </body>
    </html>
  )
}
