import {
  Flex,
  Box,
  Spacer,
  Button,
  Text,
  HStack,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  ButtonProps,
} from "@chakra-ui/react";
import Image from "next/image";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
// import ThemeToggleButton from "@/components/ThemeToggleButton";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

interface NavBarProps extends ButtonProps {
  link: string;
}

function NavBarItem(props: NavBarProps) {
  const { link, ...restProps } = props;
  const bgColor = useColorModeValue("gray.100", "black");

  return (
    <Link href={link}>
      <a>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Button
            bg={bgColor}
            h="6vh"
            _focus={{ border: "none" }}
            {...restProps}
          />
        </motion.div>
      </a>
    </Link>
  );
}

function HeaderBar() {
  const { pathname } = useRouter();

  const NavbarFontColor = useColorModeValue("#000", "#fff");
  const IconColor = useColorModeValue("orange.600", "purple.300");
  const BgColor = useColorModeValue("gray.100", "black");

  return (
    <Box>
      <Flex
        bg={BgColor}
        w="100%"
        h="64px"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        zIndex="1000"
        top={0}
        position="sticky"
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
            justifyContent="center"
            gap={10}
          >
            <NavBarItem link="/projects">
              <Text
                fontSize="sm"
                color={
                  pathname.includes("/projects") ? IconColor : NavbarFontColor
                }
                fontWeight={400}
                fontFamily="mono"
              >
                Projects
              </Text>
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
          <Spacer />
          <Flex>
            {/* <ThemeToggleButton /> */}
            <Box bg={BgColor} w="5px" />
            <Box ml={2} display={{ base: "inline-block", md: "none" }}>
              <Menu isLazy autoSelect={false}>
                {({ isOpen }) => (
                  <>
                    <MenuButton as={Button} color={IconColor}>
                      <AnimatePresence exitBeforeEnter initial={false}>
                        <motion.div
                          style={{ display: "inline-block" }}
                          key={isOpen ? "open" : "closed"}
                          initial={{ y: 0, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        </motion.div>
                      </AnimatePresence>
                    </MenuButton>
                    <MenuList>
                      <motion.div
                        animate={
                          isOpen
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0.5, y: "-30%" }
                        }
                      >
                        <Link href="/projects">
                          <a>
                            <MenuItem>Projects</MenuItem>
                          </a>
                        </Link>
                        <Link href="https://github.com/swh00tw">
                          <a>
                            <MenuItem>
                              <HStack w="100px">
                                <FaGithub color={NavbarFontColor} />
                                <p>Github</p>
                              </HStack>
                            </MenuItem>
                          </a>
                        </Link>
                      </motion.div>
                    </MenuList>
                  </>
                )}
              </Menu>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default HeaderBar;
