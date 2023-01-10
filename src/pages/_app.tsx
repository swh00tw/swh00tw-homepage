import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "@/styles/theme";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isScrolled, setIsSrolled] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setIsSrolled((window.scrollY ?? 0) > 0);
    });
  }, []);

  const { pathname } = useRouter();
  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
  }, [pathname]);

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
