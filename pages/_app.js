import { ChakraProvider } from '@chakra-ui/react'
import theme from '../layout/theme'
import Layout from '../layout/layout'
import { AnimatePresence } from 'framer-motion'
import { Provider } from "react-redux";
import store from '../store/'

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Layout>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route}/>
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
