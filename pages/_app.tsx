import '@/styles/globals.scss'
import '@/styles/tailwind.scss'
import type { AppProps } from 'next/app'
import DefaultLayout from '../layouts/DefaultLayout'

import { ApolloProvider } from '@apollo/client'
import { client } from '../graphQl/apollo'
import 'tailwindcss/tailwind.css'

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
