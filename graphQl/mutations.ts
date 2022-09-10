import { gql, useQuery } from '@apollo/client'

export const REGISTER_GAME = gql`
  mutation InsertGame($data: game) {
  createGame(
    data: game
  ) {
    id
  }
}`