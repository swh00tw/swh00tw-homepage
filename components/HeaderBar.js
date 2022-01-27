import { Flex, Box, Spacer, Icon, Button, Text, HStack, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { FaGithub } from "react-icons/fa";
import Link from 'next/link' 
import { useState } from 'react'
import { motion } from 'framer-motion'

function HeaderBar(){
  const { colorMode, toggleColorMode } = useColorMode()
  const NavbarFontColor = useColorModeValue('#000', '#fff')

  return (
    <Flex bg={useColorModeValue('gray.100', 'black')} w='100%' h='8vh' position='fixed' flexDirection="row" justifyContent="center" alignItems="center" zIndex="1000">
      <Flex w='80%' alignItems='center' justifyContent="center">
        <Link href='/'><a><HStack><Text mr='0%' fontSize='xl' color={NavbarFontColor} fontWeight={900} fontFamily='mono'> Shu-Wei Hsu </Text></HStack></a></Link>

        <Spacer/>
        <Flex w='20%'>
          <Link href='/projects'><a><Text fontSize='sm' color={NavbarFontColor} fontWeight={400} fontFamily='mono'>Projects</Text></a></Link>
          <Spacer/>
          <Link href='/projects'><a><Text fontSize='sm' color={NavbarFontColor} fontWeight={400} fontFamily='mono'>Posts</Text></a></Link>
          <Spacer/>
          <Link href='/projects'><a><HStack w='80px'><FaGithub color={NavbarFontColor}/><Text fontSize='sm' color={NavbarFontColor} fontWeight={400} fontFamily='mono'>Github</Text></HStack></a></Link>
        </Flex>
        
        <Spacer/>
        <Button bg='whiteAlpha.400' onClick={toggleColorMode}>
          {colorMode==='dark'?
          <MoonIcon color='purple.300'/>
          :
          <SunIcon color='orange.600'/>}
        </Button>
      </Flex>
    </Flex>
  )
}

export default HeaderBar;