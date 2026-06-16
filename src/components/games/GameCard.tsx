/* eslint-disable @next/next/no-img-element */
import type { Game } from '@/types/game'

export type GameCardProps = Pick<Game, 'title' | 'orderFinished' | 'image'>

export function GameCard({ title, orderFinished, image }: GameCardProps) {
  return (
    <article className="max-w-xs rounded-md bg-brand-primary p-6 text-brand-light shadow-md transition-colors hover:bg-brand-accent">
      <img
        src={image?.url}
        alt={title}
        className="h-56 w-full rounded-md object-cover object-center"
      />
      <div className="mt-6 mb-2 h-20">
        <span className="block text-xs font-medium uppercase tracking-widest">
          Order finished {orderFinished}º
        </span>
        <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
      </div>
    </article>
  )
}
