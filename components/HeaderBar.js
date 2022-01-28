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
  Stack,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { ScaleFade, SlideFade } from '@chakra-ui/react'
import { FaGithub } from "react-icons/fa";
import Link from 'next/link' 
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

function NavBarItem (props){
  const bgColor = useColorModeValue('gray.100', 'black')

  return (
    <Link href={props.href}><a><motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.8}}><Button bg={bgColor}>
        {props.children}
    </Button></motion.div></a></Link>
  )
}

function HeaderBar(){
  const {pathname} = useRouter();

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
          <NavBarItem href='/projects'>
            <Text fontSize='sm' color={pathname==='/projects'?IconColor:NavbarFontColor} fontWeight={400} fontFamily='mono'>Projects</Text>
          </NavBarItem>
          <Spacer/>
          <NavBarItem href='/posts'>
            <Text fontSize='sm' color={pathname==='/posts'?IconColor:NavbarFontColor} fontWeight={400} fontFamily='mono'>Posts</Text>
          </NavBarItem>
          <Spacer/>
          <NavBarItem href='https://github.com/swh00tw'>
            <HStack w='80px'><FaGithub color={NavbarFontColor}/><Text fontSize='sm' color={NavbarFontColor} fontWeight={400} fontFamily='mono'>Github</Text></HStack>
          </NavBarItem>
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
              {({ isOpen }) => (
                <>                
                  <MenuButton as={Button} color={IconColor}>
                      <SlideFade offsetY={-10} in={isOpen} unmountOnExit reverse={true}><CloseIcon /></SlideFade>  
                      <SlideFade offsetY={10} in={!isOpen} unmountOnExit reverse={true}><HamburgerIcon/></SlideFade>
                  </MenuButton>
                  <MenuList>
                    <motion.div animate={isOpen?{opacity: 1, y: 0}:{opacity: 0.5, y: "-30%"}}>
                      <Link href='/projects'><a><MenuItem>Projects</MenuItem></a></Link>
                      <Link href='/posts'><a><MenuItem>Posts</MenuItem></a></Link>
                      <Link href='https://github.com/swh00tw'><a><MenuItem><HStack w='100px'><FaGithub color={NavbarFontColor}/><p>Github</p></HStack></MenuItem></a></Link>
                    </motion.div>
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
        </Flex>

      </Flex>
    </Flex>
  )
}

export default HeaderBar;