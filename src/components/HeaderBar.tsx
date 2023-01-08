import {
  Flex,
  Box,
  Spacer,
  Button,
  Text,
  HStack,
  useColorModeValue,
  Stack,
  ButtonProps,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaBolt, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

function NavBarItem(props: ButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
      <Button bg={"transparent"} _focus={{ border: "none" }} {...props} />
    </motion.div>
  );
}

function HeaderBar(props: { readonly isScrolled: boolean }) {
  const { isScrolled } = props;

  const NavbarFontColor = useColorModeValue("#000", "#fff");
  const BgColor = useColorModeValue("gray.100", "black");

  return (
    <Box zIndex="1000" top={0} position="sticky">
      <Flex
        bg={BgColor}
        w="100%"
        h="64px"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        position="fixed"
        sx={{
          backdropFilter: "blur(10px)",
          bg: "#00000050",
          borderBottom: `0.2px solid ${
            isScrolled ? "#ffffff50" : "transparent"
          }`,
          transition: "all 0.3s ease-in-out",
          ":before": {
            position: "absolute",
            display: "block",
            content: '""',
            top: "-50%",
            left: "-50%",
            right: "-50%",
            bottom: "-50%",
            borderBottom: "1px solid #000",
            transform: "scale(0.5)",
          },
        }}
      >
        <Flex w="80%" alignItems="center" justifyContent="center">
          <Link href="/">
            <a>
              <HStack h="100%">
                <Image
                  priority
                  src="/Images/laptop_parrot.gif"
                  alt="parrot"
                  height="30%"
                  width="30%"
                />
                <Box display={{ base: "none", md: "block" }} w="1px" />
                <Text
                  mr="0%"
                  fontSize="xl"
                  color={NavbarFontColor}
                  fontWeight={900}
                  fontFamily="mono"
                >
                  {" "}
                  Shu-Wei Hsu{" "}
                </Text>
              </HStack>
            </a>
          </Link>
          <Spacer />
          <Stack
            direction={{ base: "column", md: "row" }}
            display={{ base: "none", md: "flex" }}
            width={{ base: "full", md: "10%" }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            justifyContent="end"
            gap={10}
          >
            <ScrollLink to="myWorks" smooth={true} duration={400}>
              <NavBarItem>
                <HStack>
                  <FaBolt color={NavbarFontColor} />
                  <Text
                    fontSize="sm"
                    color={NavbarFontColor}
                    fontWeight={400}
                    fontFamily="mono"
                  >
                    Works
                  </Text>
                </HStack>
              </NavBarItem>
            </ScrollLink>
            <ScrollLink to="contactMe" smooth={true} duration={400}>
              <NavBarItem>
                <HStack>
                  <FaPhoneAlt color={NavbarFontColor} />
                  <Text
                    fontSize="sm"
                    color={NavbarFontColor}
                    fontWeight={400}
                    fontFamily="mono"
                  >
                    Contact
                  </Text>
                </HStack>
              </NavBarItem>
            </ScrollLink>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default HeaderBar;
