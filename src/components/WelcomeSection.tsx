import { Flex, HStack, Stack, Text, FlexProps, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import memojiStyle from "@/styles/memoji.module.css";
import { FaGithub, FaDownload } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { Element } from "react-scroll";

interface AnimatedColorTextProps extends FlexProps {
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
    <Flex alignItems={"center"} {...restProps}>
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
    </Flex>
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
          transition: "all 1s ease-in-out",
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

export default function WelcomeSection() {
  return (
    <>
      <Element name="welcome" />
      <Flex
        w="80%"
        minH="85vh"
        mx="auto"
        pt="10%"
        alignItems={"start"}
        justifyContent="space-between"
        flexDirection={{
          base: "column-reverse",
          lg: "row",
        }}
      >
        <Stack
          sx={{
            fontSize: "2rem",
            fontWeight: 500,
          }}
          maxW={{
            base: "100%",
            lg: "60%",
          }}
          pt={"7%"}
        >
          <Flex
            alignItems={"center"}
            justifyContent={{
              base: "center",
              lg: "start",
            }}
            sx={{
              fontSize: {
                base: "2.1rem",
                lg: "3rem",
              },
              fontWeight: 700,
            }}
          >
            Shu-Wei Hsu
            <Text
              mx="2"
              fontSize={{
                base: "1.5rem",
                lg: "2.5rem",
              }}
            >
              🇹🇼
            </Text>
          </Flex>
          <Flex
            sx={{
              fontSize: {
                base: "1.5rem",
                lg: "2rem",
              },
              fontWeight: 600,
            }}
            wrap="wrap"
            justifyContent={{
              base: "center",
              lg: "start",
            }}
          >
            <AnimatedColorText endColor="#4FD1C5" duration={10}>
              {"Engineering Student"}
            </AnimatedColorText>
            <Flex
              mx={2}
              display={{
                base: "none",
                lg: "flex",
              }}
            >
              /
            </Flex>
            <Flex
              w="100%"
              mx={2}
              justifyContent="center"
              display={{
                base: "flex",
                lg: "none",
              }}
            >
              <Text>x</Text>
            </Flex>
            <AnimatedColorText endColor="#F687B3" isReversed duration={10}>
              {"Web Developer"}
            </AnimatedColorText>
          </Flex>
          <Stack
            pt={4}
            w={{
              base: "100%",
              lg: "90%",
            }}
            sx={{
              color: "#ffffff90",
              fontSize: "1.1rem",
            }}
          >
            <Text
              align={{
                base: "center",
                lg: "start",
              }}
            >
              I am a Taiwanese full-stack web engineer who is experienced in
              React, Next.js, and Node.js.
            </Text>
            <Text
              align={{
                base: "center",
                lg: "start",
              }}
            >
              Also an enthusiast of frontend technologies and UI/UX design.
            </Text>
          </Stack>
          <Flex
            pt={4}
            gap={1}
            w={{
              base: "100%",
              lg: "fit-content",
            }}
            justifyContent={{
              base: "center",
              lg: "start",
            }}
          >
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
          </Flex>
        </Stack>
        <Flex
          w={{
            base: "100%",
            lg: "fit-content",
          }}
          justifyContent={{
            base: "center",
            lg: "end",
          }}
        >
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
      </Flex>
    </>
  );
}
