import type { Metadata } from 'next'
import { GameList } from '@/components/games/GameList'

export const metadata: Metadata = {
  title: 'Game list',
}

export default function GamesPage() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-center">
        <h1 className="text-2xl font-medium">Game List</h1>
      </div>
      <GameList />
    </section>
  )
}
