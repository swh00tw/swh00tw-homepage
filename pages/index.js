import PageMotionContainer from '../components/PageMotionContainer'
import { Flex, Heading, Box, useColorModeValue, Text, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import memojiStyle from '../styles/memoji.module.css'
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
import { StarIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { doFistBump, doneFistBumpAnimation } from '../actions'

export default function Home(props) {
  const dispatch = useDispatch();

  const isFistBumped = useSelector(state => state.isFistBumped);
  const isFistBumpAnimationCompleted = useSelector(state => state.isFistBumpedAnimationCompleted);

  const normalFontColor = useColorModeValue('#000', '#fff')
  const themeColor = useColorModeValue('orange.600', 'purple.300')
  const bgColor = useColorModeValue('gray.100', 'black')
  const BoxColor = useColorModeValue('gray.300','whiteAlpha.400')
  const starColor = useColorModeValue("yellow.400","yellow.200")

  // force to scroll to top when reload the page
  // ref: https://github.com/vercel/next.js/discussions/15337#discussioncomment-315401
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <PageMotionContainer>
      <Box bg={bgColor} h={{base: '5vh', md: '8vh'}} display={{base: 'block',lg: 'none'}}/>
      <Flex py={{lg: '8vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
        <Flex flexDirection='column' w={{base: '100%', lg: '65%'}}>
            <Heading fontSize={['4xl', '5xl']} fontWeight="bold" color={themeColor} mb={4}>Hello, I am Frank.</Heading>
            <Heading fontSize="xl" fontWeight="bold" color={normalFontColor} mb={1}>A web developer in Taiwan.</Heading>
            <Heading fontSize="xl" fontWeight="bold" color={normalFontColor}>Welcome to my website !</Heading>
            <AnimatePresence exitBeforeEnter>
              {!isFistBumped?
              <motion.div key="NotFistBumpedYet" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.75}} style={{margin: "auto"}}>
                <Box fontFamily='mono' bg={BoxColor} borderRadius='lg' h={{base: '14', md: '7'}} py={1} px={5} mx='auto' mt={5} textAlign="center">
                  <HStack>
                  <Text>Click me for a fist bump. </Text>
                  <Flex display={{base: 'inline-block', lg: 'none'}}><BsFillCaretDownFill /></Flex>
                  <Flex display={{base: 'none', lg: 'inline-block'}}><BsFillCaretRightFill /></Flex>
                  </HStack> 
                </Box>
              </motion.div>
              :
              <motion.div key="AlreadfyFistBumped" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.75}} style={{margin: "auto"}}>
                <Box fontFamily='mono' bg={BoxColor} borderRadius='lg' h={{base: '14', md: '7'}} py={1} px={5} mx='auto' mt={5} textAlign="center">
                  <HStack>
                  <Text>Nice 2 meet u! Scroll down to see more. 🔥</Text>
                  </HStack> 
                </Box>
              </motion.div>
              }
            </AnimatePresence>
        </Flex>
        <Flex w={{base: '100%', lg: '30%'}}>
          <motion.div whileTap={{scale: 1.2}} whileHover={{scale: 0.95}} className={memojiStyle.borderCircle} onClick={()=>{
            if (!isFistBumped) {
              dispatch(doFistBump())}
            }
          }>
            <Image priority src='/Images/homepage.png' alt='hello' height='1000' width='1000'  className={memojiStyle.borderCircle}/>
          </motion.div>
          {isFistBumped && !isFistBumpAnimationCompleted?
          <Box h='3vh' position='relative' style={{marginTop: '70%', right: '75%'}}>
            <motion.div 
            style={{transformOrigin: 'center'}}
            animate={
              {
                rotate: [0, 360],
                scale: [1, 15],
                y: [0, -100],
                opacity: [1, 0],
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 1
                }
              }
            }
            onAnimationComplete={()=>dispatch(doneFistBumpAnimation())}
            >
            <StarIcon color={starColor}/>
            </motion.div>
          </Box>
          :<></>
          }
        </Flex>
      </Flex>
      <Flex my={5} py={{lg: '4vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
          <Flex flexDirection='column' color={themeColor} mt='7vh'>
            <motion.div animate={{opacity: [0.5, 1, 0.5, 0.5, 0.5]}} transition={{duration: 3, repeat: Infinity, ease: 'easeInOut'}}><ChevronDownIcon boxSize={'10vh'} mt='-7vh'/></motion.div>
            <motion.div animate={{opacity: [0.5, 0.5, 1, 0.5, 0.5]}} transition={{duration: 3, repeat: Infinity, ease: 'easeInOut'}}><ChevronDownIcon boxSize={'10vh'} mt='-7vh'/></motion.div>
            <motion.div animate={{opacity: [0.5, 0.5, 0.5, 1, 0.5]}} transition={{duration: 3, repeat: Infinity, ease: 'easeInOut'}}><ChevronDownIcon boxSize={'10vh'} mt='-7vh'/></motion.div>
          </Flex>
      </Flex>
      <Flex py={{lg: '8vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
          <Box borderRadius='lg' h='50%' w='90%' bg={BoxColor}>
            hello, I am placeholder of the main bio content.
          </Box>
      </Flex>
    </PageMotionContainer>
  )
}
