import Layout from '../layout/layout.js'
import { Flex, Heading, Box, useColorModeValue } from '@chakra-ui/react'

export default function Home() {
  const normalFontColor = useColorModeValue('#000', '#fff')

  return (
    <Layout>
      <Box bg={useColorModeValue('gray.100', 'black')} h='100vh' maxW="screen-md" mx="auto" overflow="visible" p="64px">
        <Flex h='90vh' justifyContent="center" mb={4} grow="1" flexDirection="column" alignItems="center"> 
            <Heading as="h1" size="4xl" fontWeight="bold" color={normalFontColor} mb={4}>Hello, I am Frank.</Heading>
        </Flex>
      </Box>
    </Layout>
  )
}
