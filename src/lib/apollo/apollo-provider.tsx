'use client'

import { HttpLink } from '@apollo/client'
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from '@apollo/client-integration-nextjs'
import type { ReactNode } from 'react'

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL,
    headers: process.env.NEXT_PUBLIC_API_TOKEN
      ? { authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` }
      : undefined,
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  })
}

export function ApolloProvider({ children }: { children: ReactNode }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
