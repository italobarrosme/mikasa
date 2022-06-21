import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import DefaultLayout from '../layouts/DefaultLayout'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import theme from '../theme/index'

const applyTheme = extendTheme(theme)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={applyTheme}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  )
}

export default MyApp
