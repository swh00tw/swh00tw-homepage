import Head from "next/head";
import HeaderBar from "../components/HeaderBar.jsx";
import Footer from "../components/Footer.jsx";
import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

// move to _document.tsx
function Layout(props: React.PropsWithChildren<{}>) {
  const { children } = props;
  return (
    <>
      {/* TODO: change after finishe project */}
      <Head>
        <title>Frank Hsu - homepage</title>
        <meta name="description" content="Welcome to my cool website 👾" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://swh00tw.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Frank Hsu - homepage" />
        <meta
          property="og:description"
          content="Welcome to my cool website 👾"
        />
        <meta property="og:image" content="https://imgur.com/dZOWN5v.jpg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="swh00tw.vercel.app" />
        <meta property="twitter:url" content="https://swh00tw.vercel.app/" />
        <meta name="twitter:title" content="Frank Hsu - homepage" />
        <meta
          name="twitter:description"
          content="Welcome to my cool website 👾"
        />
        <meta name="twitter:image" content="https://imgur.com/dZOWN5v.jpg" />
      </Head>
      <HeaderBar />
      <Box
        bg={useColorModeValue("gray.100", "black")}
        alignItems="center"
        flexDirection="column"
        maxW="screen-md"
        mx="auto"
        overflow="visible"
        p="64px"
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
