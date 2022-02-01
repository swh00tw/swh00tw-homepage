import { 
    Flex, 
    Heading, 
    Box, 
    Text, 
    Button, 
    Tag, 
    useColorModeValue,
    Divider,
    TagLabel,
    Avatar,
    Badge
} from '@chakra-ui/react'
import useAllColorModeValues from '../data/color';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import projectStyle from '../styles/project.module.css';
import FrameworkTag from './FrameworkTag';
import { FaGithub } from "react-icons/fa";

function ProjectCard ({project, fullContent, githubInfo}){

    const {normalFontColor, themeColor, bgColor, BoxColor, starColor, tagColor} = useAllColorModeValues();
    const badgeColor = useColorModeValue('yellow','teal')

    return (
        <Box borderRadius='2xl' w='100%' bg={BoxColor}>
            <Flex py={10} flexDirection={{base: 'column',lg: 'row' }} w='100%' justifyContent="center" alignItems="center">
                <Flex w={{base: '80%', lg: '50%'}} justifyContent="center" alignItems={{base: 'center',md: 'start'}} flexDirection='column'>
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
                        {fullContent?<></>:
                            <Link href={project.detail}><a><Button px={5} mr={{md: 2}} mt={3} size='md' variant='outline' colorScheme={tagColor}>Profile</Button></a></Link>
                        }
                        <Button px={5} mr={{md: 2}} mt={3} size='md' variant='outline' colorScheme={tagColor} leftIcon={<FaGithub />} onClick={()=>{window.open(project.github, "_blank")}}>Github</Button>
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
                    <Divider borderWidth={1} w='80%' borderStyle='solid' mb={{lg: 10}} />
                    {/* Type */}
                    <Flex fontFamily='Montserrat' pb={{base: 3, lg: 5}} w={{base: '80%', lg: '90%'}} justify='space-between' align='center' flexDirection={{base: 'column', lg: 'row'}}>
                        <Flex pl={3} w={{base: '100%', lg: '20%'}} my={{base: 5,lg: 0}}>
                            <Text fontSize='lg' fontFamily='mono' fontWeight={600} color={themeColor}>Type</Text>
                        </Flex>
                        <Flex pl={3} w={{base: '100%', lg: '70%'}} flexDirection={{base: 'column', md: 'row'}}>
                            <Text pl={1} fontSize='lg' fontWeight={400} color={normalFontColor}>{project.type}</Text>
                        </Flex>
                    </Flex>
                    {/* collaboraters */}
                    {githubInfo.length > 0?
                        <Flex fontFamily='Montserrat' pb={{base: 3, lg: 5}} w={{base: '80%', lg: '90%'}} justify='space-between' align='center' flexDirection={{base: 'column', lg: 'row'}}>
                            <Flex pl={3} w={{base: '100%', lg: '20%'}} my={{base: 5,lg: 0}}>
                                <Text fontSize='lg' fontFamily='mono' fontWeight={600} color={themeColor}>Collaborators</Text>
                            </Flex>
                            <Flex pl={3} w={{base: '100%', lg: '70%'}} flexDirection={{base: 'column', md: 'row'}}>
                                {githubInfo.map((member)=>{
                                    return (
                                        <motion.div key={member.name} whileHover={{scale: 1.1}}>
                                            <Tag key={member.name} size='lg' m={1} colorScheme={tagColor} borderRadius='full'>
                                                <Avatar
                                                    src={member.info? member.info.avatar_url : ""}
                                                    size='xs'
                                                    ml={-1}
                                                    mr={2}
                                                    />
                                                <TagLabel>
                                                    <a href={member.info? member.info.html_url: 'https://github.com/swh00tw'}>
                                                        {member.name}
                                                    </a>
                                                </TagLabel>
                                            </Tag>
                                        </motion.div>
                                    )
                                })}
                            </Flex>
                        </Flex>
                        :
                        <></>
                    }
                    {/* my role */}
                    {project.role?
                        <Flex fontFamily='Montserrat' pb={{base: 3, lg: 5}} w={{base: '80%', lg: '90%'}} justify='space-between' align='center' flexDirection={{base: 'column', lg: 'row'}}>
                            <Flex pl={3} w={{base: '100%', lg: '20%'}} my={{base: 5,lg: 0}}>
                                <Text fontSize='lg' fontFamily='mono' fontWeight={600} color={themeColor}>Role</Text>
                            </Flex>
                            <Flex pl={3} w={{base: '100%', lg: '70%'}} flexDirection={{base: 'column', md: 'row'}}>
                                <Text pl={1} fontSize='lg' fontWeight={400} color={normalFontColor}>{project.role}</Text>
                            </Flex>
                        </Flex>
                        :
                        <></>
                    }   
                    {/* frameworks */}
                    <Flex fontFamily='Montserrat' pb={{base: 3, lg: 5}} w={{base: '80%', lg: '90%'}} justify='space-between' align='center' flexDirection={{base: 'column', lg: 'row'}}>
                        <Flex pl={3} w={{base: '100%', lg: '20%'}} my={{base: 5,lg: 0}}>
                            <Text fontSize='lg' fontFamily='mono' fontWeight={600} color={themeColor}>Frameworks</Text>
                        </Flex>
                        <Flex pl={3} w={{base: '100%', lg: '70%'}} flexDirection={{base: 'column', md: 'row'}}>
                            <Box align='start'>
                                {project.framework.map((framework_name)=>{
                                    return (<FrameworkTag key={framework_name} name={framework_name}/>)
                                })}
                            </Box>
                        </Flex>
                    </Flex>
                    {/* Achievements */}
                    <Flex fontFamily='Montserrat' pb={{base: 3, lg: 5}} w={{base: '80%', lg: '90%'}} justify='space-between' align='center' flexDirection={{base: 'column', lg: 'row'}}>
                        <Flex pl={3} w={{base: '100%', lg: '20%'}} my={{base: 5,lg: 0}}>
                            <Text fontSize='lg' fontFamily='mono' fontWeight={600} color={themeColor}>Achievements</Text>
                        </Flex>
                        <Flex pl={3} w={{base: '100%', lg: '70%'}} flexDirection={{base: 'column', md: 'row'}}>
                            <Box align='start'>
                                {project.achievements.map((item)=>{
                                    return (<Badge key={item} variant='solid' colorScheme={badgeColor} mx={1}>{item}</Badge>)
                                })}
                            </Box>
                        </Flex>
                    </Flex>
                    {/* Content */}
                    <Flex fontFamily='Montserrat' pb={10} w={{base: '80%', lg: '90%'}} justify='space-between' align='start' flexDirection={{base: 'column', lg: 'row'}}>
                        <Flex pl={3} w={{base: '100%', lg: '20%'}} my={{base: 5,lg: 0}} pt={1}>
                            <Text fontSize='lg' fontFamily='mono' fontWeight={600} color={themeColor}>Experience</Text>
                        </Flex>
                        <Flex pl={3} w={{base: '100%', lg: '70%'}} flexDirection={{base: 'column', md: 'row'}}>
                            <Box align='start'>
                                {project.content.map((item)=>{
                                    return (<Text key={item} mb={5}>{item}</Text>)
                                })}
                            </Box>
                        </Flex>
                    </Flex>
                </>
                :
                <></>
            }   
        </Box>
    )
}

export default ProjectCard;