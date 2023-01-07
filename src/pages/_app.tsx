import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/layout/theme";
import Layout from "@/layout/layout";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
