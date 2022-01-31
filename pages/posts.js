import PageMotionContainer from '../components/PageMotionContainer'
import { Flex, Heading, Box, useColorModeValue } from '@chakra-ui/react'

export default function Posts() {
  const normalFontColor = useColorModeValue('#000', '#fff')

  return (
    <PageMotionContainer duration={0.75}>
      <Flex h='90vh' justifyContent="center" grow="1" flexDirection="row" alignItems="center"> 
          <Heading as="h1" size="4xl" fontWeight="bold" color={normalFontColor} mb={4}>Obviously, there are no posts right now. 🤣</Heading>
      </Flex>
    </PageMotionContainer>
  )
}