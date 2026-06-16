import { gql } from '@apollo/client'

/**
 * Creates a game entry in Hygraph (GraphCMS).
 *
 * NOTE: writes require a token with mutation scope. Run this from a server
 * action / route handler with a server-only token instead of the public
 * read token used for queries.
 */
export const REGISTER_GAME = gql`
  mutation InsertGame($data: GameCreateInput!) {
    createGame(data: $data) {
      id
    }
  }
`
