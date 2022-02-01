import { AnimatePresence, motion } from 'framer-motion'
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const IconColor = useColorModeValue('orange.600', 'purple.300');

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, rotateY: 270 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <Button
          aria-label="Toggle theme"
          bg={useColorModeValue('gray.200', 'gray.800')}
          onClick={toggleColorMode}
          _focus={{border: 'none'}}
        >{useColorModeValue(<MoonIcon color={IconColor}/>, <SunIcon color={IconColor}/>)}</Button>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton