import { Flex, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bgColor = useColorModeValue("gray.100", "black");
  const fontColor = useColorModeValue("gray.400", "gray.600");

  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      bg={bgColor}
      color={fontColor}
      opacity={1}
      fontSize="sm"
      h="2vh"
      pb="8"
      pt="3"
    >
      &copy; {new Date().getFullYear()} Shu-Wei Hsu. All Rights Reserved.
    </Flex>
  );
};

export default Footer;
