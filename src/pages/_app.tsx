import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <HeaderBar />
      <Box w="100%" minH="100vh">
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
