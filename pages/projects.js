import PageMotionContainer from '../components/PageMotionContainer'
import { Flex, Heading, Box, useColorModeValue, Text, HStack, Divider, List, ListItem, Tag, Button, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import memojiStyle from '../styles/memoji.module.css'
import profileStyle from '../styles/profile.module.css'
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
import {useState, useEffect, useRef} from 'react'
import { doFistBump, doneFistBumpAnimation } from '../actions'
import Link from 'next/link'
import useAllColorModeValues from '../data/color'
import AnimatedScrollDownPrompt from '../components/AnimatedScrollDownPrompt'
import SkillModal from '../components/SkillModal'
import mySkills from '../data/skills'
import projectStyle from '../styles/project.module.css'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const dragRef = useRef(null);

  const {
    normalFontColor, 
    themeColor, 
    bgColor, 
    BoxColor, 
    starColor, 
    tagColor
  } = useAllColorModeValues();

  // force to scroll to top when reload the page
  // ref: https://github.com/vercel/next.js/discussions/15337#discussioncomment-315401
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <PageMotionContainer duration={0.75}>
      <Box bg={bgColor} h={{base: '5vh', md: '8vh'}} display={{base: 'block',lg: 'none'}}/>
      <Flex py={{lg: '8vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
        
        <Flex flexDirection='column' w={{base: '100%', lg: '65%'}}>
            <Heading fontSize={['4xl', '5xl']} fontWeight="bold" color={themeColor} mb={4}>{`What I've learnt so far,`}</Heading>
              <Box fontFamily='mono' bg={BoxColor} borderRadius='lg' h={{base: '14', md: '7'}} py={1} px={5} mx='auto' mt={5} textAlign="center">
                <motion.button whileHover={{scale: 1.1}} onClick={()=>{window.open('https://youtu.be/A7tT0-vdqAk','_blank')}}>
                    <HStack>
                    <Text>{`👽: Show me what you got`} </Text>
                    <Flex><BsFillCaretDownFill /></Flex>
                    </HStack> 
                </motion.button>
              </Box>
        </Flex>

        <Flex w={{base: '100%', lg: '30%'}}>
          <motion.div whileTap={{scale: 1.2}} whileHover={{scale: 1.1}} className={memojiStyle.borderCircle}>
            <Image quality="100" priority src='/Images/projects.png' alt='hello' height='1000' width='1000'  className={memojiStyle.borderCircle}/>
          </motion.div>
        </Flex>

      </Flex>

      <Flex mt={{base: -10, lg: -20}} py={{lg: '4vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
          <motion.div ref={dragRef} style={{width: "100%"}} dragElastic={0.0}>
            <Box bg={bgColor} borderRadius='3xl' w='100%' h={{base: '500px', md: '360px', lg: '25vh'}} align='center' justify='center'>
                {/* <SkillModal dragRef={dragRef} infoObject={mySkills[2]}/> */}
                {mySkills.map((skill, index) => {
                  return (
                    <SkillModal dragRef={dragRef} infoObject={skill} key={index}/>
                  )
                })}
            </Box>
          </motion.div>
      </Flex>

      <Flex mt={0} py={{lg: '4vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
          <AnimatedScrollDownPrompt color={themeColor}/>
      </Flex>

      {projects.map((project, index) => (
        <Flex mt={4} py={{lg: '4vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center" key={index}> 
          <ProjectCard project={project}/>
        </Flex>
      ))}
      
    </PageMotionContainer>
  )
}