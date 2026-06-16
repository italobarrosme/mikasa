'use client'

import Link from 'next/link'
import { useQuery } from '@apollo/client/react'
import { GET_GAMES, type GetGamesResponse } from '@/lib/apollo/queries'
import { GameCard } from './GameCard'

export function GameList() {
  const { data, loading, error } = useQuery<GetGamesResponse>(GET_GAMES)

  if (loading) {
    return <p className="text-center">Loading games…</p>
  }

  if (error) {
    return <p className="text-center text-red-400">Could not load games.</p>
  }

  const games = data?.games ?? []

  if (games.length === 0) {
    return <p className="text-center">No games catalogued yet.</p>
  }

  return (
    <ul className="flex flex-wrap justify-center gap-4 p-4">
      {games.map((game) => (
        <li key={game.id}>
          <Link href={`/games/${game.id}`}>
            <GameCard title={game.title} orderFinished={game.orderFinished} image={game.image} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
