import PageMotionContainer from '../components/PageMotionContainer'
import { Flex, Heading, Box, useColorModeValue, Text, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import memojiStyle from '../styles/memoji.module.css'
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";

export default function Home(props) {
  const normalFontColor = useColorModeValue('#000', '#fff')
  const themeColor = useColorModeValue('orange.600', 'purple.300')
  const bgColor = useColorModeValue('gray.100', 'black')

  return (
    <PageMotionContainer>
      <Box bg={bgColor} h={{base: '3vh', md: '6vh'}} display={{base: 'block',lg: 'none'}}/>
      <Flex h='90vh' w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
        <Flex flexDirection='column' w={{base: '100%', lg: '65%'}}>
            <Heading size='3xl' fontWeight="bold" color={themeColor} mb={4}>Hello, I am Frank.</Heading>
            <Heading as="h2" size="lg" fontWeight="bold" color={normalFontColor} mb={1}>A web developer in Taiwan.</Heading>
            <Heading as="h2" size="lg" fontWeight="bold" color={normalFontColor}>Welcome to my website !</Heading>
            <Box as='text' fontFamily='mono' bg={useColorModeValue('gray.300','whiteAlpha.400')} borderRadius='lg' h={{base: '14', md: '7'}} py={1} px={5} mx='auto' mt={5} textAlign="center">
              <HStack>
              <Text>Click me to do a fist bump. </Text>
              <Flex display={{base: 'inline-block', lg: 'none'}}><BsFillCaretDownFill /></Flex>
              <Flex display={{base: 'none', lg: 'inline-block'}}><BsFillCaretRightFill /></Flex>
              </HStack>
            </Box>
        </Flex>
        <Flex w={{base: '100%', lg: '30%'}}>
          <motion.div whileTap={{scale: 1.2}} whileHover={{scale: 0.95}} className={memojiStyle.borderCircle}>
            <Image priority src='/Images/homepage.png' alt='hello' height='1000' width='1000'  className={memojiStyle.borderCircle}/>
          </motion.div>
        </Flex>
      </Flex>
    </PageMotionContainer>
  )
}
