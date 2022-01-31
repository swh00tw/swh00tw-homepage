import { 
    Flex, 
    Heading, 
    Box, 
    Text, 
    Button, 
    Tag, 
    useColorModeValue,
    Divider,
} from '@chakra-ui/react'
import useAllColorModeValues from '../data/color';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import projectStyle from '../styles/project.module.css';

function ProjectCard ({project, fullContent}){

    const {normalFontColor, themeColor, bgColor, BoxColor, starColor, tagColor} = useAllColorModeValues();

    return (
        <Box borderRadius='2xl' w='100%' bg={BoxColor}>
            <Flex py={10} flexDirection={{base: 'column',lg: 'row' }} w='100%' justifyContent="center" alignItems="center">
                <Flex w={{base: '80%', lg: '50%'}} justifyContent="center" alignItems="start" flexDirection='column'>
                    <Heading fontFamily='Montserrat' pb={2}>{project.name}</Heading>
                    <Tag borderRadius='full' mt={1} mb={3} variant='solid' size='sm' colorScheme={useColorModeValue('yellow','teal')}>{project.time}</Tag>
                    {project.description.map((description, index) => (
                        <Text align="start" w={{base: '80%', lg: '70%'}} fontFamily='mono' key={index}>{description}</Text>
                    ))}
                    <Flex flexDirection={{base: 'column', md: 'row'}} w={{base: '100%', md:'100%'}} alignItems={{base: 'center', md: 'start'}}>
                        {project.website?
                            <Button px={5} mr={{md: 2}} mt={3} size='md' variant='solid' colorScheme={tagColor} onClick={
                                ()=>{window.open(project.website, '_blank')}
                            }>Website</Button>
                            :
                            <></>
                        }
                        <Link href={project.detail}><a><Button px={5} mr={{md: 2}} mt={3} size='md' variant='outline' colorScheme={tagColor}>Profile</Button></a></Link>
                        <Button px={5} mr={{md: 2}} mt={3} size='md' variant='outline' colorScheme={tagColor} onClick={()=>{window.open(project.github, "_blank")}}>Github</Button>
                    </Flex>
                </Flex>
                <Flex w={{base: '80%', lg: '40%'}} pt={{base: 8, lg: 0}} justifyContent="center" alignItems="center">
                    <motion.div whileHover={{scale: 1.1}}>
                        <Image quality="100" priority src={project.img_path} alt='homepage' height='1500' width='2800' className={projectStyle.projectPreview}/>
                    </motion.div>
                </Flex>
            </Flex>
            {fullContent?
                <>
                    <Divider borderWidth={1} w='80%' mb={10} borderStyle='solid' />
                </>
                :
                <></>
            }   
        </Box>
    )
}

export default ProjectCard;