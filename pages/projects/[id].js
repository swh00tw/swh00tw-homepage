import projects from "../../data/projects"
import getProjectData from "../../utils/getProjectData"
import PageMotionContainer from "../../components/PageMotionContainer"
import { Text, Button, Flex, Box, Heading, HStack} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion';
import { BsFillCaretDownFill } from 'react-icons/bs'
import Image from 'next/image'
import useAllColorModeValues from "../../data/color";
import memojiStyle from '../../styles/memoji.module.css'
import AnimatedScrollDownPrompt from "../../components/AnimatedScrollDownPrompt";
import { ChevronLeftIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import ProjectCard from "../../components/ProjectCard"

export async function getStaticPaths() {
    const paths = [
        {
            params: {id: 'myHomepage'}
        },
        {
            params: {id: 'ntuCourseNeo'}
        },
        {
            params: {id: 'dsTutor'}
        }
    ]
    return {
      paths,
      fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const project = await getProjectData('/projects/'+params.id, projects);
    return {
        props: {
            project
        }
    }
}

function Project({project}){

    const {
        normalFontColor, 
        themeColor, 
        bgColor, 
        BoxColor, 
        starColor, 
        tagColor
      } = useAllColorModeValues();

    return (
        <PageMotionContainer duration={0.5}>
            {/* heading */}
            <AnimatePresence exitBeforeEnter initial={true}>
                <motion.div key='projectPageHeading' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.5, delay: 0.5}}>
                    <Box bg={bgColor} h={{base: '5vh', md: '8vh'}} display={{base: 'block',lg: 'none'}}/>
                    <Flex py={{lg: '8vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
                        
                        <Flex flexDirection='column' w={{base: '100%', lg: '65%'}}>
                            <Heading fontSize={['4xl', '5xl']} fontWeight="bold" color={themeColor} mb={4}>{project.name}</Heading>
                            <motion.button whileHover={{scale: 1.1}}>
                                <Link href="/projects">
                                    <a>
                                    <Box as="button" fontFamily='mono' bg={BoxColor} borderRadius='lg' h={{base: '14', md: '14'}} py={2} px={5} mx='auto' mt={5} textAlign="center">
                                        <HStack>
                                            <ChevronLeftIcon/>
                                            <Text>Back to my projects</Text>
                                        </HStack> 
                                    </Box>
                                    </a>
                                </Link>
                            </motion.button>
                        </Flex>

                        <Flex w={{base: '100%', lg: '30%'}}>
                        <motion.div whileTap={{scale: 1.2}} whileHover={{scale: 1.1}} className={memojiStyle.borderCircle}>
                            <Image quality="100" priority src='/Images/projects.png' alt='hello' height='1000' width='1000'  className={memojiStyle.borderCircle}/>
                        </motion.div>
                        </Flex>

                    </Flex>
                </motion.div>
            </AnimatePresence>
            {/* content */}
            <Flex mt={{base: 0, lg: -20}} py={{lg: '4vh'}} w='70vw' justifyContent="center" grow="1" flexDirection={{base: 'column', lg: 'row'}} alignItems="center"> 
                <ProjectCard project={project} fullContent={true}/>
            </Flex>
        </PageMotionContainer>
    )
}

export default Project;