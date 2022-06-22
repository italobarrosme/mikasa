import './../styles/globals.scss'
import type { AppProps } from 'next/app'
import DefaultLayout from '../layouts/DefaultLayout'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import theme from '../theme/index'
import { ApolloProvider } from '@apollo/client'
import { client } from './../lib/apollo'

const applyTheme = extendTheme(theme)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={applyTheme}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
