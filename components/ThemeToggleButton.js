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
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          aria-label="Toggle theme"
          bg={useColorModeValue('gray.200', 'gray.800')}
          onClick={toggleColorMode}
        >{useColorModeValue(<MoonIcon color={IconColor}/>, <SunIcon color={IconColor}/>)}</Button>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton