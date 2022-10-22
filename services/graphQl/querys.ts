import { gql, useQuery } from '@apollo/client'

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
}`

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
  }`

export const REGISTER_GAME = gql`
  mutation InsertGame($data: game) {
  createGame(
    data: game
  ) {
    id
  }
}`
export interface GetGamesQueryResponse {
  games: {
    id: string
    title: string
    orderFinished: number
    image: {
      url: string
    }
    
  }[]
}