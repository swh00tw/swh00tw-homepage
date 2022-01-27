import Layout from '../layout/layout.js'
import { Flex, Heading, Box, useColorModeValue } from '@chakra-ui/react'

export default function Posts() {
  const normalFontColor = useColorModeValue('#000', '#fff')

  return (
    <Layout>
        <Flex h='90vh' justifyContent="center" grow="1" flexDirection="column" alignItems="center"> 
            <Heading as="h1" size="4xl" fontWeight="bold" color={normalFontColor} mb={4}>Posts.</Heading>
        </Flex>
    </Layout>
  )
}