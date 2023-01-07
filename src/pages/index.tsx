import PageMotionContainer from "@/components/PageMotionContainer";
import PageHeaderWrapper from "@/components/PageTitleWrapper";
import { Flex, HStack, Stack, Text, TextProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import memojiStyle from "@/styles/memoji.module.css";
import { FaGithub, FaDownload } from "react-icons/fa";
import Link from "next/link";

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

function CustomButton(props: {
  readonly children?: React.ReactNode;
  readonly link: string;
}) {
  const { children, link } = props;
  return (
    <Link passHref href={link}>
      <Flex
        sx={{
          fontSize: "1rem",
          cursor: "pointer",
          borderRadius: "4px",
          px: 3,
          py: 2,
          transition: "all 0.3s ease-in-out",
          _hover: {
            bg: "#ffffff20",
          },
        }}
      >
        {children}
      </Flex>
    </Link>
  );
}

export default function Home() {
  return (
    <PageHeaderWrapper>
      <PageMotionContainer duration={0.75}>
        <Flex
          w="80%"
          minH="90vh"
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
            <HStack
              sx={{
                fontWeight: 600,
              }}
            >
              <AnimatedColorText endColor="#4FD1C5" duration={10}>
                {"Engineering Student"}
              </AnimatedColorText>
              <Text>/</Text>
              <AnimatedColorText endColor="#F687B3" isReversed duration={10}>
                {"Web Developer"}
              </AnimatedColorText>
            </HStack>
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
              <CustomButton link="https://github.com/swh00tw">
                <HStack>
                  <FaDownload color={"white"} />
                  <Text color={"white"}>Resume</Text>
                </HStack>
              </CustomButton>
              <CustomButton link="https://github.com/swh00tw">
                <HStack>
                  <FaGithub color={"white"} />
                  <Text color={"white"}>@swh00tw</Text>
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
      </PageMotionContainer>
    </PageHeaderWrapper>
  );
}
