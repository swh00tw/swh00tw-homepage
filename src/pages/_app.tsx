import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isScrolled, setIsSrolled] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIsSrolled((window.scrollY ?? 0) > 0);
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <HeaderBar isScrolled={isScrolled} />
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
