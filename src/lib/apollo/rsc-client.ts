import { HttpLink } from '@apollo/client'
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/client-integration-nextjs'

const authHeaders = process.env.NEXT_PUBLIC_API_TOKEN
  ? { authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` }
  : undefined

/**
 * Apollo client for React Server Components. The client is created per request
 * so cached data never leaks between users.
 */
export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_API_URL,
      headers: authHeaders,
    }),
  })
})
