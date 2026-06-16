import type { Metadata } from 'next'
import { RegisterGame } from '@/components/games/RegisterGame'

export const metadata: Metadata = {
  title: 'Home',
  keywords: ['games'],
}

export default function HomePage() {
  return (
    <div className="flex h-[calc(100vh-16em)] items-center justify-center">
      <RegisterGame />
    </div>
  )
}
