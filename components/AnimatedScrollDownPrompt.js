import { Flex } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const AnimatedScrollDownPrompt = ({color, duration }) => {

  return (
    <Flex flexDirection='column' color={color} mt='7vh'>
        <motion.div animate={{opacity: [0.5, 1, 0.5, 0.5, 0.5]}} transition={{duration: 3, repeat: Infinity, ease: 'easeInOut'}}><ChevronDownIcon boxSize={'10vh'} mt='-7vh'/></motion.div>
        <motion.div animate={{opacity: [0.5, 0.5, 1, 0.5, 0.5]}} transition={{duration: 3, repeat: Infinity, ease: 'easeInOut'}}><ChevronDownIcon boxSize={'10vh'} mt='-7vh'/></motion.div>
        <motion.div animate={{opacity: [0.5, 0.5, 0.5, 1, 0.5]}} transition={{duration: 3, repeat: Infinity, ease: 'easeInOut'}}><ChevronDownIcon boxSize={'10vh'} mt='-7vh'/></motion.div>
    </Flex>
  )
}

export default AnimatedScrollDownPrompt;