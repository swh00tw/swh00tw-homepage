import Head from 'next/head'
import HeaderBar from '../components/HeaderBar.js'
import Footer from '../components/Footer.js'
import { motion } from 'framer-motion'
import { Box, useColorModeValue } from '@chakra-ui/react'

function Layout(props) {

    return (
      <>
        {/* TODO: change after finishe project */}
        <Head>
          <title>Frank Hsu - homepage</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeaderBar />

        <Box bg={useColorModeValue('gray.100', 'black')} maxW="screen-md" mx="auto" overflow="visible" p="64px">
            {props.children}
        </Box>

        <Footer />
      </>
    )
}

export default Layout;