import PageMotionContainer from '../components/PageMotionContainer'
import { Flex, Heading, Box, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import memojiStyle from '../styles/memoji.module.css'

export default function Home(props) {
  const normalFontColor = useColorModeValue('#000', '#fff')
  const themeColor = useColorModeValue('orange.600', 'purple.300')

  return (
    <PageMotionContainer>
      <Flex h='90vh' w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', md: 'row'}} alignItems="center"> 
        <Flex flexDirection='column' w={{base: '100%', md: '65%'}}>
            <Heading as="h1" size="4xl" fontWeight="bold" color={themeColor} mb={4}>Hello, I am Frank.</Heading>
            <Heading as="h2" size="xl" fontWeight="bold" color={normalFontColor} mb={4}>A web developer in Taiwan.</Heading>
            <Heading as="h2" size="lg" fontWeight="bold" color={normalFontColor} mb={4}>Welcome to my website !</Heading>
        </Flex>
        <Flex w={{base: '100%', md: '30%'}}>
          <motion.div whileTap={{scale: 0.9}} whileHover={{scale: 1.1}} className={memojiStyle.borderCircle}>
            <Image priority src='/Images/homepage.png' alt='hello' height='1000' width='1000'  className={memojiStyle.borderCircle}/>
          </motion.div>
        </Flex>
      </Flex>
    </PageMotionContainer>
  )
}
