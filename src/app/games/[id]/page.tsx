/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation'
import { Icon } from '@iconify/react'
import { query } from '@/lib/apollo/rsc-client'
import { GET_GAME, type GetGameResponse } from '@/lib/apollo/queries'

export const revalidate = 30

type GamePageProps = {
  params: Promise<{ id: string }>
}

export default async function GameDetailsPage({ params }: GamePageProps) {
  const { id } = await params

  const { data } = await query<GetGameResponse>({
    query: GET_GAME,
    variables: { id },
  })

  const game = data?.game
  if (!game) {
    notFound()
  }

  const finishedDate = game.finished
    ? new Date(game.finished).toLocaleDateString('pt-BR')
    : null

  return (
    <section>
      <div className="container mx-auto">
        <div className="mx-auto flex flex-wrap gap-8">
          <img
            src={game.image.url}
            alt={game.title}
            className="h-72 w-96 rounded-md object-cover object-center"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2">
            <span className="mb-4 inline-block text-2xl font-medium text-brand-accent">
              {game.orderFinished}º Finished
            </span>
            {finishedDate && (
              <h2 className="text-sm tracking-widest">Finished date {finishedDate}</h2>
            )}
            <h1 className="mb-1 text-3xl font-bold text-brand-light">{game.title}</h1>
            <div className="mb-4 mt-2 flex items-center gap-1 text-brand-accent">
              {Array.from({ length: game.rating ?? 0 }, (_, index) => (
                <Icon key={index} icon="carbon:star-filled" width={20} />
              ))}
            </div>
            <p className="leading-relaxed">{game.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
