export type GameImage = {
  url: string
}

export type Game = {
  id: string
  title: string
  orderFinished: number
  description?: string
  finished?: string
  rating?: number
  image: GameImage
}

/** Shape used by the register form before a game is persisted. */
export type GameDraft = {
  orderFinished: number | ''
  title: string
  description: string
  finishedDate: string
  rating: number
  image: File | null
}
