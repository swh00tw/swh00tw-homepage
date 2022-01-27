import { Flex, 
  Box, 
  Spacer, 
  Icon, 
  Button, 
  Text, 
  HStack, 
  useColorMode, 
  useColorModeValue, 
  useMediaQuery,Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Skeleton
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FaGithub } from "react-icons/fa";
import Link from 'next/link' 
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function HeaderBar(){
  const Query = useMediaQuery('(max-width: 700px)')
  const [isMobile, setIsMobile] = useState(null)
  useEffect(()=>{setIsMobile(Query[0])}, []) // eslint-disable-line react-hooks/exhaustive-deps

  const { colorMode, toggleColorMode } = useColorMode()
  const NavbarFontColor = useColorModeValue('#000', '#fff')
  const IconColor = useColorModeValue('orange.600', 'purple.300')
  const BgColor = useColorModeValue('gray.100', 'black')

  if (!isMobile){
    return (
      <Skeleton startColor='pink.500' endColor='orange.500' height='8vh' />
    )
  }

  return (
    <Flex bg={BgColor} w='100%' h='8vh' pt='3' position='fixed' flexDirection="row" justifyContent="center" alignItems="center" zIndex="1000">
      <Flex w='80%' alignItems='center' justifyContent="center">
        <Link href='/'><a><HStack><Text mr='0%' fontSize='xl' color={NavbarFontColor} fontWeight={900} fontFamily='mono'> Shu-Wei Hsu </Text></HStack></a></Link>

        {isMobile ? <></> :
        <>
          <Spacer/>
          <Flex w={[null, '45%', '35%', null,'25%']}>
            <Link href='/projects'><a><Text fontSize='sm' color={NavbarFontColor} fontWeight={400} fontFamily='mono'>Projects</Text></a></Link>
            <Spacer/>
            <Link href='/posts'><a><Text fontSize='sm' color={NavbarFontColor} fontWeight={400} fontFamily='mono'>Posts</Text></a></Link>
            <Spacer/>
            <Link href='https://github.com/swh00tw'><a><HStack w='80px'><FaGithub color={NavbarFontColor}/><Text fontSize='sm' color={NavbarFontColor} fontWeight={400} fontFamily='mono'>Github</Text></HStack></a></Link>
          </Flex>
        </>}
        
        <Spacer/>
        <Flex>
          <Button bg='whiteAlpha.400' onClick={toggleColorMode}>
            {colorMode==='dark'?
            <MoonIcon color={IconColor}/>
            :
            <SunIcon color={IconColor}/>}
          </Button>
          <Box bg={BgColor} w='5px'/>
          {isMobile?
          <Menu>
            <MenuButton as={Button} color={IconColor}>
              <HamburgerIcon />
            </MenuButton>
            <MenuList>
              <Link href='/projects'><a><MenuItem>Projects</MenuItem></a></Link>
              <Link href='/posts'><a><MenuItem>Posts</MenuItem></a></Link>
              <Link href='https://github.com/swh00tw'><a><MenuItem><HStack w='100px'><FaGithub color={NavbarFontColor}/><p>Github</p></HStack></MenuItem></a></Link>
            </MenuList>
          </Menu>
          :<></>}
        </Flex>

      </Flex>
    </Flex>
  )
}

export default HeaderBar;