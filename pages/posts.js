import PageMotionContainer from '../components/PageMotionContainer'
import { Flex, Heading, Box, useColorModeValue, HStack, Text, AspectRatio, Button, Tag, Divider } from '@chakra-ui/react'
import useAllColorModeValues from '../data/color';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import memojiStyle from '../styles/memoji.module.css';
import getMediumPosts from '../utils/getMediumPosts'
import { useState } from 'react'
import AnimatedScrollDownPrompt from '../components/AnimatedScrollDownPrompt';
import PostCard from '../components/PostCard';

export async function getServerSideProps() {
  const postItems = await getMediumPosts();
  return {
    props: {
      posts: postItems,
    },
  }
}


export default function Posts({ posts }) {

  const [ shit, setShit ] = useState(false);

  const {
    normalFontColor, 
    themeColor, 
    bgColor, 
    BoxColor, 
    starColor, 
    tagColor
  } = useAllColorModeValues();

  const postcardColor = useColorModeValue("orange.100","purple.300");

  // main card animation
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.8
      }
    }
  };

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
            
            <Flex flexDirection='column' w={{base: '100%', md: '65%', lg: '55%'}}>
                <Heading align='start' w={{base: '60%', md: '75%'}} fontSize={['3xl', '5xl']} mx='auto' fontWeight="bold" color={themeColor} mb={2}>Some </Heading>
                <Heading align='start' w={{base: '60%', md: '75%'}} fontSize={['3xl', '5xl']} mx='auto' fontWeight="bold" color={themeColor} mb={2}>Random</Heading>
                <Heading align='start' w={{base: '60%', md: '75%'}} fontSize={['3xl', '5xl']} mx='auto' fontWeight="bold" color={themeColor} mb={2}>Thoughts?</Heading>
            </Flex>

            {shit?
              <Flex w={{base: '100%', lg: '30%'}}>
                  <motion.div 
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.9}}
                    className={memojiStyle.borderCircle} 
                    onClick={()=>{setShit(!shit)}}
                  >
                    <Image quality="100" priority src='/Images/shit.png' alt='hello' height='1000' width='1000' className={memojiStyle.borderCircle}/>
                  </motion.div>
                  <Box h='3vh' position='relative' style={{marginTop: '0%', right: '30%'}}>
                    <motion.div style={{transformOrigin: 'center'}}animate={{ opacity: 0} }>
                      <Text fontFamily='Montserrat' fontWeight='600' fontSize='4xl'>?</Text>
                    </motion.div>
                  </Box>
                  <Box h='3vh' position='relative' style={{marginTop: '3%', right: '28%'}}>
                    <motion.div style={{transformOrigin: 'center'}}animate={{ opacity: 0} }>
                      <Text fontFamily='Montserrat' fontWeight='600' fontSize='4xl'>?</Text>
                    </motion.div>
                  </Box>
                  <Box h='3vh' position='relative' style={{marginTop: '7%', right: '27%'}}>
                    <motion.div style={{transformOrigin: 'center'}}animate={{ opacity: 0} }>
                      <Text fontFamily='Montserrat' fontWeight='600' fontSize='4xl'>?</Text>
                    </motion.div>
                  </Box>
              </Flex>
            :
            <Flex w={{base: '100%', lg: '30%'}}>
                <motion.div 
                    whileHover={{scale: 1.3}}
                    whileTap={{scale: 0.9}}
                    className={memojiStyle.borderCircle} 
                    onClick={()=>{setShit(!shit)}}
                >
                  <Image quality="100" priority src='/Images/posts.png' alt='hello' height='1000' width='1000'  className={memojiStyle.borderCircle}/>
                </motion.div>
                {/* ??? */}
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
            }
          </Flex>
          
          <AnimatePresence exitBeforeEnter initial={true}>
            {shit?
            <motion.div key="shit" initial={{ y: -20, opacity: 0}} animate={{ y: 0, opacity: 1}} exit={{ y: 20, opacity: 0}} transition={{duration: 0.3}}>
              <Flex mt={{lg: -55}} py={{lg: '4vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
                  <Flex w='100%' borderRadius='lg' justifyContent='center'>
                    <Box bg={BoxColor} px={5} py={3} borderRadius='lg' fontFamily='mono'>Post something to make people feel I am smart.</Box>
                  </Flex>
              </Flex>
            </motion.div>
            :
            <motion.div key="noShit" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}>
              <Flex mt={{lg: -55}} py={{lg: '4vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
                  <Flex w='100%' borderRadius='lg' justifyContent='center'>
                    <Box bg={bgColor} px={5} py={3} borderRadius='lg' fontFamily='mono' color={bgColor}>Post something to make people feel I am smart.</Box>
                  </Flex>
              </Flex>
            </motion.div>
            }
          </AnimatePresence>

          <Flex mt={0} py={{lg: '4vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
              <AnimatedScrollDownPrompt color={themeColor}/>
          </Flex>

          <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.1 }} variants={cardVariants}>
            <Flex mt={0} py={{lg: '4vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
              {posts.map((post, index) => (
                  <PostCard key={post.title} post={post}/>
              ))}
            </Flex>
          </motion.div>

      </PageMotionContainer>
    )
  }
  
}