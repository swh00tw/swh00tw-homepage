import { hash_to_color_hex } from "../utils/colorAgent";
import { Tag, Text, useColorModeValue, Flex } from "@chakra-ui/react";

function FrameworkTag({name}){
    const lightColor = hash_to_color_hex(name, 0.7);
    const darkColor = hash_to_color_hex(name, 0.4);
    const color = useColorModeValue(darkColor, lightColor);

    return (
            <Tag color={color} borderRadius='full' size='sm' mx={1}>
                <Text fontSize='sm'>{name}</Text>
            </Tag>   
    )
}

export default FrameworkTag;