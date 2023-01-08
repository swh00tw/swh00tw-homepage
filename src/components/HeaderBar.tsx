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
import { FaDownload, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

interface NavBarProps extends ButtonProps {
  link?: string;
}

function NavBarItem(props: NavBarProps) {
  const { link, ...restProps } = props;

  const body = (
    <a>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button
          bg={"transparent"}
          h="6vh"
          _focus={{ border: "none" }}
          {...restProps}
        />
      </motion.div>
    </a>
  );
  if (!link) {
    return body;
  }
  return <Link href={link}>{body}</Link>;
}

function HeaderBar(props: { readonly isScrolled: boolean }) {
  const { pathname } = useRouter();
  const { isScrolled } = props;

  const NavbarFontColor = useColorModeValue("#000", "#fff");
  const IconColor = useColorModeValue("orange.600", "purple.300");
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
            <NavBarItem>
              <a href="/Frank_resume.pdf" download="Frank_resume.pdf">
                <HStack w="80px">
                  <FaDownload color={NavbarFontColor} />
                  <Text
                    fontSize="sm"
                    color={NavbarFontColor}
                    fontWeight={400}
                    fontFamily="mono"
                  >
                    Resume
                  </Text>
                </HStack>
              </a>
            </NavBarItem>
            <NavBarItem link="https://github.com/swh00tw">
              <HStack w="80px">
                <FaGithub color={NavbarFontColor} />
                <Text
                  fontSize="sm"
                  color={NavbarFontColor}
                  fontWeight={400}
                  fontFamily="mono"
                >
                  Github
                </Text>
              </HStack>
            </NavBarItem>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default HeaderBar;
