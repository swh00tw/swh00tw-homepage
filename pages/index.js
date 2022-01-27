import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../layout/layout.js'
import { Flex, Heading, Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Layout>
      <Box h='100vh' maxW="screen-md" mx="auto" overflow="visible" p="64px">
        <Flex h='90vh' justifyContent="center" mb={4} grow="1" flexDirection="column" alignItems="center"> 
            <Heading as="h1" size="4xl" fontWeight="bold" mb={4}>Hello, I am Frank.</Heading>
        </Flex>
      </Box>
    </Layout>
  )
}
