import PageMotionContainer from '../components/PageMotionContainer'
import { Flex, Heading, Box, useColorModeValue, Text, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import memojiStyle from '../styles/memoji.module.css'
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
import {useState, useEffect} from 'react'

export default function Home(props) {
  const [isFistBumped, setIsFistBumped ] = useState(false);

  const normalFontColor = useColorModeValue('#000', '#fff')
  const themeColor = useColorModeValue('orange.600', 'purple.300')
  const bgColor = useColorModeValue('gray.100', 'black')

  useEffect(() => {
    console.log(isFistBumped);
  },[isFistBumped])

  return (
    <PageMotionContainer>
      <Box bg={bgColor} h={{base: '8vh', md: '8vh'}} display={{base: 'block',lg: 'none'}}/>
      <Flex  w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
        <Flex flexDirection='column' w={{base: '100%', lg: '65%'}}>
            <Heading fontSize={['4xl', '5xl']} fontWeight="bold" color={themeColor} mb={4}>Hello, I am Frank.</Heading>
            <Heading fontSize="xl" fontWeight="bold" color={normalFontColor} mb={1}>A web developer in Taiwan.</Heading>
            <Heading fontSize="xl" fontWeight="bold" color={normalFontColor}>Welcome to my website !</Heading>
            <Box fontFamily='mono' bg={useColorModeValue('gray.300','whiteAlpha.400')} borderRadius='lg' h={{base: '14', md: '7'}} py={1} px={5} mx='auto' mt={5} textAlign="center">
              {isFistBumped? 
              <HStack>
              <Text>Nice 2 meet u! Scroll down to see more.</Text>
              </HStack>
              :
              <HStack>
              <Text>Click me to do a fist bump. </Text>
              <Flex display={{base: 'inline-block', lg: 'none'}}><BsFillCaretDownFill /></Flex>
              <Flex display={{base: 'none', lg: 'inline-block'}}><BsFillCaretRightFill /></Flex>
              </HStack>
              } 
            </Box>
        </Flex>
        <Flex w={{base: '100%', lg: '30%'}}>
          <motion.div whileTap={{scale: 1.2}} whileHover={{scale: 0.95}} className={memojiStyle.borderCircle} onClick={()=>setIsFistBumped(true)}>
            <Image priority src='/Images/homepage.png' alt='hello' height='1000' width='1000'  className={memojiStyle.borderCircle}/>
          </motion.div>
        </Flex>
      </Flex>
    </PageMotionContainer>
  )
}
