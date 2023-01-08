import PageMotionContainer from "@/components/PageMotionContainer";
import PageHeaderWrapper from "@/components/PageTitleWrapper";
import {
  Flex,
  HStack,
  Stack,
  Text,
  TextProps,
  Box,
  AspectRatio,
  Image as ChakraImage,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import memojiStyle from "@/styles/memoji.module.css";
import { FaGithub, FaDownload } from "react-icons/fa";
import Link from "next/link";
import React from "react";

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

interface AnimatedColorTextProps extends TextProps {
  readonly children?: React.ReactNode;
  readonly endColor: string;
  readonly initialColor?: string;
  readonly duration?: number;
  readonly isReversed?: boolean;
}

function AnimatedColorText(props: AnimatedColorTextProps) {
  const {
    children,
    endColor,
    initialColor = "#ffffff",
    duration = 2,
    isReversed = false,
    ...restProps
  } = props;

  return (
    <Text {...restProps}>
      <motion.p
        animate={{
          color: isReversed
            ? [endColor, initialColor, endColor]
            : [initialColor, endColor, initialColor],
          textShadow: isReversed
            ? [
                `0px 0px 5px ${endColor}`,
                `0px 0px 0px ${initialColor}`,
                `0px 0px 5px ${endColor}`,
              ]
            : [
                `0px 0px 0px ${initialColor}`,
                `0px 0px 5px ${endColor}`,
                `0px 0px 0px ${initialColor}`,
              ],
        }}
        transition={{
          duration: duration,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        {children}
      </motion.p>
    </Text>
  );
}

// ref: https://stackoverflow.com/a/17977118
function CustomButton(props: {
  readonly children?: React.ReactNode;
  readonly link?: string;
  readonly bg: string;
}) {
  const { children, link, bg } = props;
  const body = (
    <Flex
      sx={{
        fontSize: "1rem",
        cursor: "pointer",
        borderRadius: "4px",
        px: 3,
        py: 2,
        bg: "linear-gradient(0deg,white,gray)",
        position: "relative",
        _after: {
          content: '""',
          position: "absolute",
          borderRadius: "4px",
          left: "0px",
          top: "0px",
          right: "0px",
          bottom: "0px",
          backgroundImage: bg,
          opacity: 0,
          transition: "all 2s ease-in-out",
        },
        _hover: {
          _after: {
            opacity: 1,
          },
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bg: "black",
          zIndex: 2,
          top: "1px",
          left: "1px",
          bottom: "1px",
          right: "1px",
          borderRadius: "4px",
        }}
      />
      <Box zIndex={3}>{children}</Box>
    </Flex>
  );
  return link ? (
    <Link passHref href={link}>
      {body}
    </Link>
  ) : (
    body
  );
}

function WelcomeSection() {
  return (
    <Flex
      w="80%"
      minH="85vh"
      mx="auto"
      pt="10%"
      alignItems={"start"}
      justifyContent="space-between"
    >
      <Stack
        sx={{
          fontSize: "2rem",
          fontWeight: 500,
        }}
        maxW="60%"
        pt={"7%"}
      >
        <Flex
          alignItems={"center"}
          sx={{
            fontSize: "3rem",
            fontWeight: 700,
          }}
        >
          Shu-Wei Hsu
          <Text mx="2" fontSize="2.5rem">
            🇹🇼
          </Text>
        </Flex>
        <Flex
          sx={{
            fontWeight: 600,
          }}
          wrap="wrap"
        >
          <AnimatedColorText endColor="#4FD1C5" duration={10}>
            {"Engineering Student"}
          </AnimatedColorText>
          <Text mx={2}>/</Text>
          <AnimatedColorText endColor="#F687B3" isReversed duration={10}>
            {"Web Developer"}
          </AnimatedColorText>
        </Flex>
        <Stack
          pt={4}
          w="90%"
          sx={{
            color: "#ffffff90",
            fontSize: "1.1rem",
          }}
        >
          <Text>
            I am a Taiwanese full-stack web engineer who is experienced in
            React, Next.js, and Node.js.
          </Text>
          <Text>
            Also an enthusiast of frontend technologies and UI/UX design.
          </Text>
        </Stack>
        <HStack>
          <CustomButton bg="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,253,237,1) 51%, rgba(69,252,196,1) 100%)">
            <a href="/Frank_resume.pdf" download="Frank_resume.pdf">
              <HStack>
                <FaDownload color={"white"} />
                <Text color={"white"}>Resume</Text>
              </HStack>
            </a>
          </CustomButton>
          <CustomButton
            link="https://github.com/swh00tw"
            bg="linear-gradient(90deg, rgba(180,118,58,1) 23%, rgba(253,29,239,0.8954175420168067) 59%, rgba(252,69,105,1) 87%)"
          >
            <HStack>
              <FaGithub color={"white"} />
              <Text color={"white"}>swh00tw</Text>
            </HStack>
          </CustomButton>
        </HStack>
      </Stack>
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <Image
          quality="100"
          priority
          src="/Images/stopit.png"
          alt="hello"
          height="450"
          width="450"
          className={memojiStyle.borderCircle}
        />
      </motion.div>
    </Flex>
  );
}

function ScrollTriggeredDiv(
  props: React.PropsWithChildren<{
    readonly delay?: number;
    readonly duration?: number;
    readonly offsetX?: number;
  }>
) {
  const { delay = 0, duration = 0.5, offsetX = 50 } = props;
  return (
    <motion.div
      initial={{ opacity: 0, x: `-${offsetX}px` }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{
        x: { duration: duration },
        delay: 0.3 + delay,
      }}
      {...props}
    />
  );
}

function ExperienceSection() {
  const verticalLineWidth = 10;
  return (
    <Flex
      h="100vh"
      w="70%"
      mx="auto"
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          bg: "linear-gradient(180deg, rgba(0,0,0,0.9) 40%, rgba(255,255,255,0) 100%)",
          position: "absolute",
          top: 0,
          zIndex: 2,
          h: "100px",
          w: "100%",
        }}
      />
      <Flex h="100%" w={`${verticalLineWidth}px`} bg="#ffffff20" />
      <Flex flexGrow={1} py="120px" position="relative">
        <Box w="100%" position={"absolute"} left={`-${verticalLineWidth}px`}>
          <ExperienceItem verticalLineWidth={verticalLineWidth} />
        </Box>
      </Flex>
      <Box
        sx={{
          bg: "linear-gradient(0deg, rgba(0,0,0,0.9) 40%, rgba(255,255,255,0) 100%)",
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          h: "100px",
          w: "100%",
        }}
      />
    </Flex>
  );
}

function ExperienceItem(props: { readonly verticalLineWidth: number }) {
  const { verticalLineWidth } = props;
  const horizontalGap = 40;
  return (
    <Box>
      <Flex
        sx={{
          alignItems: "center",
          gap: `${horizontalGap}px`,
        }}
      >
        <Flex
          sx={{
            w: `${verticalLineWidth}px`,
            h: `${verticalLineWidth}px`,
            justifyContent: "center",
            alignItems: "center",
            overflow: "visible",
          }}
        >
          <Box
            sx={{
              w: "10px",
              h: "10px",
              bg: "#202020",
              borderRadius: "50%",
              transform: "scale(5)",
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <ChakraImage src="/kinetik.png" borderRadius="full" />
            </AspectRatio>
          </Box>
        </Flex>
        <ScrollTriggeredDiv>
          <Flex
            sx={{
              fontSize: "1.2rem",
              color: "#ffffff90",
              fontFamily: "mono",
            }}
          >
            {`Jan, 2023`}
          </Flex>
        </ScrollTriggeredDiv>
      </Flex>
      <Stack pl={`${verticalLineWidth + horizontalGap}px`}>
        <ScrollTriggeredDiv delay={0.1}>
          <Flex
            sx={{
              fontSize: "2.5rem",
              fontWeight: 700,
            }}
          >
            NTU OAA CIMD
          </Flex>
        </ScrollTriggeredDiv>
      </Stack>
    </Box>
  );
}

export default function Home() {
  return (
    <PageHeaderWrapper>
      <PageMotionContainer duration={0.75}>
        <WelcomeSection />
        <ExperienceSection />
      </PageMotionContainer>
    </PageHeaderWrapper>
  );
}
