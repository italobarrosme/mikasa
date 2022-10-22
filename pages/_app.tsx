import '@/styles/globals.scss'
import '@/styles/main.scss'

import type { AppProps } from 'next/app'
import DefaultLayout from '@/layouts/DefaultLayout'

import { ApolloProvider } from '@apollo/client'
import { client } from '@/services/graphQl/apollo'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ApolloProvider>
  )
}

export default MyApp
