import PageMotionContainer from '../components/PageMotionContainer'
import { Flex, Heading, Box, useColorModeValue, HStack, Text, AspectRatio } from '@chakra-ui/react'
import useAllColorModeValues from '../data/color';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import memojiStyle from '../styles/memoji.module.css';
import getMediumPosts from '../utils/getMediumPosts'

export async function getServerSideProps() {
  const postItems = await getMediumPosts();
  return {
    props: {
      posts: postItems,
    },
  }
}


export default function Posts({ posts }) {

  const {
    normalFontColor, 
    themeColor, 
    bgColor, 
    BoxColor, 
    starColor, 
    tagColor
  } = useAllColorModeValues();

  if (!posts){
    return (
      <PageMotionContainer duration={0.75}>
        <Flex h='90vh' justifyContent="center" grow="1" flexDirection="row" alignItems="center"> 
            <Heading as="h1" size="4xl" fontWeight="bold" color={normalFontColor} mb={4}>Obviously, there are no posts right now. 🤣</Heading>
        </Flex>
      </PageMotionContainer>
    )
  } 
  
  else {
    return (
      <PageMotionContainer duration={0.75}>
          {/* heading */}
          <Box bg={bgColor} h={{base: '5vh', md: '8vh'}} display={{base: 'block',lg: 'none'}}/>
          <Flex py={{lg: '8vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
            
            <Flex flexDirection='column' w={{base: '100%', lg: '65%'}}>
                <Heading align='start' w={{base: '60%', md: '50%'}} fontSize={['3xl', '5xl']} mx='auto' fontWeight="bold" color={themeColor} mb={2}>Some </Heading>
                <Heading align='start' w={{base: '60%', md: '50%'}} fontSize={['3xl', '5xl']} mx='auto' fontWeight="bold" color={themeColor} mb={2}>Random</Heading>
                <Heading align='start' w={{base: '60%', md: '50%'}} fontSize={['3xl', '5xl']} mx='auto' fontWeight="bold" color={themeColor} mb={2}>Thoughts?</Heading>
            </Flex>

            <Flex w={{base: '100%', lg: '30%'}}>
              <motion.div whileTap={{scale: 1.2}} whileHover={{scale: 1.1}} className={memojiStyle.borderCircle}>
                <Image quality="100" priority src='/Images/posts.png' alt='hello' height='1000' width='1000'  className={memojiStyle.borderCircle}/>
              </motion.div>

              <Box h='3vh' position='relative' style={{marginTop: '0%', right: '30%'}}>
                <motion.div 
                style={{transformOrigin: 'center'}}
                animate={
                  {
                    opacity: [0, 1, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                    },
                    rotate: [10, 10, 10]
                  }
                }
                >
                  <Text fontFamily='Montserrat' fontWeight='600' fontSize='4xl'>?</Text>
                </motion.div>
              </Box>

              <Box h='3vh' position='relative' style={{marginTop: '3%', right: '28%'}}>
                <motion.div 
                style={{transformOrigin: 'center'}}
                animate={
                  {
                    opacity: [0, 1, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      delay: 0.8
                    },
                    rotate: [25, 25, 25]
                  }
                }
                >
                  <Text fontFamily='Montserrat' fontWeight='600' fontSize='4xl'>?</Text>
                </motion.div>
              </Box>

              <Box h='3vh' position='relative' style={{marginTop: '7%', right: '27%'}}>
                <motion.div 
                style={{transformOrigin: 'center'}}
                animate={
                  {
                    opacity: [0,1, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      delay: 1.5
                    },
                    rotate: [40, 40, 40]
                  }
                }
                >
                  <Text fontFamily='Montserrat' fontWeight='600' fontSize='4xl'>?</Text>
                </motion.div>
              </Box>
            </Flex>

          </Flex>
      </PageMotionContainer>
    )
  }
  
}