import { useColorModeValue } from "@chakra-ui/react";

const useAllColorModeValues = () => {
    const normalFontColor = useColorModeValue('#000', '#fff')
    const themeColor = useColorModeValue('orange.600', 'purple.300')
    const bgColor = useColorModeValue('gray.100', 'black')
    const BoxColor = useColorModeValue('gray.300','whiteAlpha.400')
    const starColor = useColorModeValue("yellow.400","yellow.200")
    const tagColor = useColorModeValue('orange','purple')

    return {normalFontColor, themeColor, bgColor, BoxColor, starColor, tagColor}
}

export default useAllColorModeValues;