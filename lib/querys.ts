import { gql, useQuery } from '@apollo/client'

export const GET_GAMES = gql`
  query GetGames {
    games {
    id
    title
    image {
      url
    }
  }
}`