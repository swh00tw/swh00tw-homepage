import PageMotionContainer from '../components/PageMotionContainer'
import { Flex, Heading, Box, useColorModeValue, Text, HStack, Divider, List, ListItem, ListIcon, Tag } from '@chakra-ui/react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import memojiStyle from '../styles/memoji.module.css'
import profileStyle from '../styles/profile.module.css'
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
import { StarIcon, ChevronDownIcon, CloseIcon, CircleIcon } from '@chakra-ui/icons'
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
  const tagColor = useColorModeValue('orange','purple')

  const bioList=[
    {year: 'June, 2000', content: 'Born in Kaohsiung, Taiwan'},
    {year: 'Feb, 2022 - Present', content: 'Working as a Engineer Intern at Kinetik'},
    {year: 'June, 2022', content: 'Graduated from National Taiwan University'},
  ];

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
            <Image quality="100" priority src='/Images/homepage.png' alt='hello' height='1000' width='1000'  className={memojiStyle.borderCircle}/>
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
          <Box borderRadius='2xl' h='50%' w={{base: '100%', lg: '90%'}} bg={BoxColor} p={10}>
            <Flex w='85%' flexDirection={{base: 'column',lg: 'row'}} justifyContent='center' >
              <Flex flexDirection='column' w={{base: '100%', lg: '75%'}} alignItems={{base: 'center', lg: 'start'}} justifyContent='center'>
                <Heading fontFamily='mono' fontSize={['2xl', '4xl']} fontWeight="bold" color={normalFontColor} mb={4}>Shu-Wei Hsu</Heading>
                <Heading fontFamily='mono' fontSize={['sm', 'lg']} color={normalFontColor}> Student <CloseIcon boxSize='0.6em'/> Developer </Heading>
              </Flex>
              <Flex flexDirection='column' w={{base: '100%', lg: '25%'}} my={{base: '4vh', lg: '0vh'}}>
                <Image quality="100" priority src='/Images/me.jpg' alt='me' height='400' width='400' className={useColorModeValue(profileStyle.light, profileStyle.dark)}/>
              </Flex>
            </Flex>
            <Flex py={2} w='90%' flexDirection='column'>
              {/* About Me */}
              <Divider size='5px'/>
              <Flex justifyContent='start'  flexDirection={{base: 'column', lg: 'row'}}>
                <Heading align='start' w={{base: '100%', lg: '20%'}} py={3} fontFamily='mono' fontSize={['md', '2xl']} color={themeColor}> About Me </Heading>
                <Flex flexDirection='column' w={{base: '100%', lg: '80%'}} py={3} px={{base: 0, lg: 5}}>
                  <Text align='start' fontFamily='Montserrat' fontWeight={500} mb={2}>
                    Hey! I am Shu-Wei Hsu. You can call me Frank. I was born in Kaohsiung City of Taiwan, but study in Taipei. Currently, I am a senior student in the Department of Electrical Engineering at the Nation Taiwan University.
                  </Text>
                  <Text align='start' fontFamily='Montserrat' fontWeight={500}>
                    I am also a developer who loves to create things. I am currently working on improving my skills in the field of web programming.
                  </Text>
                </Flex>
              </Flex>
              {/* Bio */}
              <Divider size='5px'/>
              <Flex justifyContent='start'  flexDirection={{base: 'column', lg: 'row'}}>
                <Heading align='start' w={{base: '100%', lg: '20%'}} py={3} fontFamily='mono' fontSize={['md', '2xl']} color={themeColor}> Bio </Heading>
                <Flex flexDirection='column' w={{base: '100%', lg: '80%'}} py={3} px={{base: 0, lg: 5}}>
                <List spacing={3} align='start' fontFamily='Montserrat'>
                  {bioList.map((item)=>{
                    return (
                      <ListItem key={item.year}>
                        <Box>
                          <Tag size='md' colorScheme={tagColor} variant='outline' mb={1}>{item.year}</Tag>
                          <Text>{item.content}</Text>
                        </Box>
                      </ListItem>
                    )
                  })}
                </List>
                </Flex>
              </Flex>
            </Flex>
          </Box>
      </Flex>
    </PageMotionContainer>
  )
}
