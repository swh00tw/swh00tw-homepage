import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "@/styles/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
            rel="stylesheet"
          />
          {/* Favicon */}
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
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
