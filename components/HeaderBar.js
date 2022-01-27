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
  Stack
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FaGithub } from "react-icons/fa";
import Link from 'next/link' 
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function HeaderBar(){

  const { colorMode, toggleColorMode } = useColorMode()
  const NavbarFontColor = useColorModeValue('#000', '#fff')
  const IconColor = useColorModeValue('orange.600', 'purple.300')
  const BgColor = useColorModeValue('gray.100', 'black')

  return (
    <Flex bg={BgColor} w='100%' h='8vh' pt='3' position='fixed' flexDirection="row" justifyContent="center" alignItems="center" zIndex="1000">
      <Flex w='80%' alignItems='center' justifyContent="center">
        <Link href='/'><a><HStack><Text mr='0%' fontSize='xl' color={NavbarFontColor} fontWeight={900} fontFamily='mono'> Shu-Wei Hsu </Text></HStack></a></Link>



        <Spacer/>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: '10%' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Link href='/projects'><a><Text fontSize='sm' color={NavbarFontColor} fontWeight={400} fontFamily='mono'>Projects</Text></a></Link>
          <Spacer/>
          <Link href='/posts'><a><Text fontSize='sm' color={NavbarFontColor} fontWeight={400} fontFamily='mono'>Posts</Text></a></Link>
          <Spacer/>
          <Link href='https://github.com/swh00tw'><a><HStack w='80px'><FaGithub color={NavbarFontColor}/><Text fontSize='sm' color={NavbarFontColor} fontWeight={400} fontFamily='mono'>Github</Text></HStack></a></Link>
        </Stack>
        
        <Spacer/>
        <Flex>
          <Button bg='whiteAlpha.400' onClick={toggleColorMode}>
            {colorMode==='dark'?
            <MoonIcon color={IconColor}/>
            :
            <SunIcon color={IconColor}/>}
          </Button>
          <Box bg={BgColor} w='5px'/>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy autoSelect={false}>
              <MenuButton as={Button} color={IconColor}>
                <HamburgerIcon />
              </MenuButton>
              <MenuList>
                <Link href='/projects'><a><MenuItem>Projects</MenuItem></a></Link>
                <Link href='/posts'><a><MenuItem>Posts</MenuItem></a></Link>
                <Link href='https://github.com/swh00tw'><a><MenuItem><HStack w='100px'><FaGithub color={NavbarFontColor}/><p>Github</p></HStack></MenuItem></a></Link>
              </MenuList>
            </Menu>
          </Box>
        </Flex>

      </Flex>
    </Flex>
  )
}

export default HeaderBar;