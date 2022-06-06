import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Flex } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Flex
        w="full"
        h="full"
        alignItems="center"
        justifyItems="center"
        direction="column"
      >
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}

export default MyApp
