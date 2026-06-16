import { gql } from '@apollo/client'
import type { Game } from '@/types/game'

export const GET_GAMES = gql`
  query GetGames {
    games(orderBy: createdAt_ASC) {
      id
      orderFinished
      title
      image {
        url
      }
    }
  }
`

export const GET_GAME = gql`
  query GetGame($id: ID!) {
    game(where: { id: $id }) {
      id
      orderFinished
      title
      description
      finished
      rating
      image {
        url
      }
    }
  }
`

export type GetGamesResponse = {
  games: Game[]
}

export type GetGameResponse = {
  game: Game | null
}
