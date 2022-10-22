import PageMotionContainer from "../components/PageMotionContainer";
import {
  Flex,
  Heading,
  Box,
  useColorModeValue,
  Text,
  HStack,
  Divider,
  List,
  ListItem,
  Tag,
  Button,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import memojiStyle from "../styles/memoji.module.css";
import profileStyle from "../styles/profile.module.css";
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
import { StarIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doFistBump, doneFistBumpAnimation } from "../actions";
import Link from "next/link";
import bioList from "../data/bioList";
import hobbyList from "../data/hobbyList";
import useAllColorModeValues from "../data/color";
import AnimatedScrollDownPrompt from "../components/AnimatedScrollDownPrompt";

export default function Home(props) {
  const toast = useToast();
  const dispatch = useDispatch();
  const [hobbyIdx, setHobbyIdx] = useState(0);

  const isFistBumped = useSelector((state) => state.isFistBumped);
  const isFistBumpAnimationCompleted = useSelector(
    (state) => state.isFistBumpedAnimationCompleted
  );
  const fistBumpCount = useSelector((state) => state.fistBumpCount);

  const fistBumpThreshold = 10;

  const {
    normalFontColor,
    themeColor,
    bgColor,
    BoxColor,
    starColor,
    tagColor,
  } = useAllColorModeValues();

  // main card animation
  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.8,
      },
    },
  };

  // force to scroll to top when reload the page
  // ref: https://github.com/vercel/next.js/discussions/15337#discussioncomment-315401
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <PageMotionContainer duration={0.75}>
      <Box
        bg={bgColor}
        h={{ base: "5vh", md: "8vh" }}
        display={{ base: "block", lg: "none" }}
      />
      <Flex
        py={{ lg: "8vh" }}
        w="70vw"
        justifyContent="center"
        grow="1"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
      >
        <Flex flexDirection="column" w={{ base: "100%", lg: "65%" }}>
          <Heading
            fontSize={["4xl", "5xl"]}
            fontWeight="bold"
            color={themeColor}
            mb={4}
          >
            Hello, I am Frank.
          </Heading>
          <Heading
            fontSize="xl"
            fontWeight="bold"
            color={normalFontColor}
            mb={1}
          >
            A web developer in Taiwan.
          </Heading>
          <Heading fontSize="xl" fontWeight="bold" color={normalFontColor}>
            Welcome to my website !
          </Heading>
          <AnimatePresence exitBeforeEnter>
            {!isFistBumped ? (
              <motion.div
                key="NotFistBumpedYet"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75 }}
                style={{ margin: "auto" }}
              >
                <Box
                  fontFamily="mono"
                  bg={BoxColor}
                  borderRadius="lg"
                  h={{ base: "14", md: "7" }}
                  py={1}
                  px={5}
                  mx="auto"
                  mt={5}
                  textAlign="center"
                >
                  <HStack>
                    <Text>Click me for a fist bump. </Text>
                    <Flex display={{ base: "inline-block", lg: "none" }}>
                      <BsFillCaretDownFill />
                    </Flex>
                    <Flex display={{ base: "none", lg: "inline-block" }}>
                      <BsFillCaretRightFill />
                    </Flex>
                  </HStack>
                </Box>
              </motion.div>
            ) : (
              <motion.div
                key="AlreadfyFistBumped"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.75 }}
                style={{ margin: "auto" }}
              >
                <Box
                  fontFamily="mono"
                  bg={BoxColor}
                  borderRadius="lg"
                  h={{ base: "14", md: "7" }}
                  py={1}
                  px={5}
                  mx="auto"
                  mt={5}
                  textAlign="center"
                >
                  <HStack>
                    <Text>Nice 2 meet u! Scroll down to see more. 🔥</Text>
                  </HStack>
                </Box>
              </motion.div>
            )}
          </AnimatePresence>
        </Flex>
        <Flex w={{ base: "100%", lg: "30%" }}>
          <motion.div
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 0.95 }}
            className={memojiStyle.borderCircle}
            onClick={() => {
              dispatch(doFistBump());
              if (fistBumpCount >= fistBumpThreshold) {
                toast({
                  title: `Ok. You've already clicked ${fistBumpCount} times.`,
                  description: `That's too much. My fist is tired.\n It's time to scroll down.`,
                  position: "top",
                  isClosable: true,
                  status: "warning",
                });
              }
            }}
          >
            <AnimatePresence exitBeforeEnter initial={true}>
              {fistBumpCount > fistBumpThreshold ? (
                <motion.div
                  key="hello"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    quality="100"
                    priority
                    src="/Images/stopit.png"
                    alt="hello"
                    height="1000"
                    width="1000"
                    className={memojiStyle.borderCircle}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="tooMuch"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    quality="100"
                    priority
                    src="/Images/homepage.png"
                    alt="hello"
                    height="1000"
                    width="1000"
                    className={memojiStyle.borderCircle}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {isFistBumped && !isFistBumpAnimationCompleted ? (
            <Box
              h="3vh"
              position="relative"
              style={{ marginTop: "70%", right: "75%" }}
            >
              <motion.div
                style={{ transformOrigin: "center" }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 15],
                  y: [0, -100],
                  opacity: [1, 0],
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1,
                  },
                }}
                onAnimationComplete={() => dispatch(doneFistBumpAnimation())}
              >
                <StarIcon color={starColor} />
              </motion.div>
            </Box>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>

      <Flex
        my={5}
        py={{ lg: "4vh" }}
        w="70vw"
        justifyContent="center"
        grow="1"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
      >
        <AnimatedScrollDownPrompt color={themeColor} />
      </Flex>

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={cardVariants}
      >
        <Flex
          py={{ lg: "8vh" }}
          w="70vw"
          justifyContent="center"
          grow="1"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems="center"
        >
          <Box
            borderRadius="2xl"
            h="50%"
            w={{ base: "100%", lg: "90%" }}
            bg={BoxColor}
            p={10}
          >
            <Flex
              w="85%"
              flexDirection={{ base: "column", lg: "row" }}
              justifyContent="center"
            >
              <Flex
                flexDirection="column"
                w={{ base: "100%", lg: "75%" }}
                alignItems={{ base: "center", lg: "start" }}
                justifyContent="center"
              >
                <Heading
                  fontFamily="mono"
                  fontSize={["2xl", "4xl"]}
                  fontWeight="bold"
                  color={normalFontColor}
                  mb={4}
                >
                  Shu-Wei Hsu
                </Heading>
                <Heading
                  fontFamily="mono"
                  fontSize={["sm", "lg"]}
                  color={normalFontColor}
                >
                  {" "}
                  Student <CloseIcon boxSize="0.6em" /> Developer{" "}
                </Heading>
              </Flex>
              <Flex
                flexDirection="column"
                w={{ base: "100%", lg: "25%" }}
                my={{ base: "4vh", lg: "0vh" }}
              >
                <Image
                  quality="100"
                  priority
                  src="/Images/me.jpg"
                  alt="me"
                  height="400"
                  width="400"
                  className={useColorModeValue(
                    profileStyle.light,
                    profileStyle.dark
                  )}
                />
              </Flex>
            </Flex>
            <Flex py={2} w="90%" flexDirection="column">
              {/* About Me */}
              <Divider size="5px" />
              <Flex
                justifyContent="start"
                flexDirection={{ base: "column", lg: "row" }}
              >
                <Heading
                  align="start"
                  w={{ base: "100%", lg: "20%" }}
                  py={3}
                  fontFamily="mono"
                  fontSize={["md", "2xl"]}
                  color={themeColor}
                >
                  {" "}
                  About Me{" "}
                </Heading>
                <Flex
                  flexDirection="column"
                  w={{ base: "100%", lg: "80%" }}
                  py={3}
                  px={{ base: 0, lg: 5 }}
                >
                  <Text
                    align="start"
                    fontFamily="Montserrat"
                    fontWeight={500}
                    mb={2}
                  >
                    Hey! I am Shu-Wei Hsu. You can call me Frank. I was born in
                    Kaohsiung City of Taiwan, and study in Taipei now.
                    Currently, I am a senior student in the Department of
                    Electrical Engineering at the Nation Taiwan University.
                  </Text>
                  <Text align="start" fontFamily="Montserrat" fontWeight={500}>
                    I am also a developer who loves to create things. I am
                    currently working on improving my skills in the field of web
                    programming.
                  </Text>
                </Flex>
              </Flex>
              {/* Bio */}
              <Divider size="5px" />
              <Flex
                justifyContent="start"
                flexDirection={{ base: "column", lg: "row" }}
              >
                <Heading
                  align="start"
                  w={{ base: "100%", lg: "20%" }}
                  py={3}
                  fontFamily="mono"
                  fontSize={["md", "2xl"]}
                  color={themeColor}
                >
                  {" "}
                  Bio{" "}
                </Heading>
                <Flex
                  flexDirection="column"
                  w={{ base: "100%", lg: "80%" }}
                  py={3}
                  px={{ base: 0, lg: 5 }}
                >
                  <List spacing={3} align="start" fontFamily="Montserrat">
                    {bioList.map((item) => {
                      return (
                        <ListItem key={item.year}>
                          <Box>
                            <Tag
                              size="md"
                              colorScheme={tagColor}
                              variant="outline"
                              mb={1}
                            >
                              {item.year}
                            </Tag>
                            <Text>{item.content}</Text>
                          </Box>
                        </ListItem>
                      );
                    })}
                  </List>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </motion.div>

      <Flex
        my={5}
        py={{ lg: "4vh" }}
        w="70vw"
        justifyContent="center"
        grow="1"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
      >
        <AnimatedScrollDownPrompt color={themeColor} />
      </Flex>

      {/* auto animation gallery */}
      <Flex
        my={5}
        py={{ lg: "4vh" }}
        w="70vw"
        justifyContent="center"
        grow="1"
        flexDirection="column"
        alignItems="center"
      >
        <Heading fontSize={{ base: "3xl", lg: "5xl" }}>
          Aside from coding, I also enjoy...
        </Heading>
        <AnimatePresence exitBeforeEnter initial={true}>
          {hobbyList.map((item, index) => {
            return (
              index === hobbyIdx && (
                <div key={index}>
                  <motion.div
                    key={item.icon}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 2 }}
                    onAnimationComplete={() => {
                      setHobbyIdx((hobbyIdx + 1) % hobbyList.length);
                    }}
                  >
                    <Box mt={3} fontSize={{ base: "5xl", md: "8xl" }}>
                      {item.icon}
                    </Box>
                  </motion.div>
                  <motion.div
                    key={item.content}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                  >
                    <Heading fontSize={{ base: "lg", md: "3xl", lg: "4xl" }}>
                      {item.content}
                    </Heading>
                  </motion.div>
                </div>
              )
            );
          })}
        </AnimatePresence>
      </Flex>

      <Flex
        my={5}
        py={{ lg: "4vh" }}
        w="70vw"
        justifyContent="center"
        grow="1"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
      >
        <AnimatedScrollDownPrompt color={themeColor} />
      </Flex>

      {/* Links */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.0 }}
        variants={cardVariants}
      >
        <Flex
          my={20}
          py={{ lg: "4vh" }}
          w="70vw"
          justifyContent="center"
          grow="1"
          flexDirection="column"
          alignItems="center"
        >
          <Box
            borderRadius="xl"
            bg={BoxColor}
            w={{ base: "90%", lg: "60%" }}
            py={10}
            px={5}
          >
            <Heading fontSize={{ base: "4xl", lg: "6xl" }}>
              Learn more 🦦
            </Heading>
            <Flex
              flexDirection={{ base: "column", md: "row" }}
              w={{ base: "90%", md: "60%" }}
              justify="space-between"
              py={5}
            >
              <Link href="/projects" passHref={true}>
                <Button
                  size="lg"
                  my={2}
                  colorScheme={tagColor}
                  rightIcon={<ChevronRightIcon />}
                >
                  <motion.a whileHover={{ scale: 1.1 }}>My portfolio</motion.a>
                </Button>
              </Link>
            </Flex>
            <Divider my={2} />
            <Heading fontSize={{ base: "4xl", lg: "6xl" }}>
              Find me on...
            </Heading>
            <Flex
              w={{ base: "80%", md: "40%", lg: "45%" }}
              justify="space-between"
              flexDirection="row"
              color={themeColor}
              mt="7vh"
              fontSize={{ base: "4xl", lg: "5xl" }}
              spacing={3}
            >
              <motion.button
                animate={{ opacity: 0.6 }}
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ ease: "easeInOut" }}
              >
                <FaGithub
                  onClick={() => {
                    window.open("https://github.com/swh00tw", "_blank");
                  }}
                />
              </motion.button>
              <motion.button
                animate={{ opacity: 0.6 }}
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ ease: "easeInOut" }}
              >
                <FaLinkedin
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/%E6%9B%B8%E7%B6%AD-%E8%A8%B1-109621210/",
                      "_blank"
                    );
                  }}
                />
              </motion.button>
              <motion.button
                animate={{ opacity: 0.6 }}
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ ease: "easeInOut" }}
              >
                <FaFacebook
                  onClick={() => {
                    window.open(
                      "https://www.facebook.com/profile.php?id=100009809101984",
                      "_blank"
                    );
                  }}
                />
              </motion.button>
              <motion.button
                animate={{ opacity: 0.6 }}
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ ease: "easeInOut" }}
              >
                <a href="mailto: a6140000@gmail.com">
                  <MdEmail />
                </a>
              </motion.button>
            </Flex>
          </Box>
        </Flex>
      </motion.div>
    </PageMotionContainer>
  );
}
