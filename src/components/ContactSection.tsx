import { Flex, Stack, HStack, Box } from "@chakra-ui/react";
import Link from "next/link";
import { Element } from "react-scroll";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function ContactButton(props: {
  readonly children?: React.ReactNode;
  readonly link: string;
  readonly bg: string;
}) {
  const { children, link, bg } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link passHref href={link}>
      <Flex
        sx={{
          fontSize: "1rem",
          cursor: "pointer",
          borderRadius: "4px",
          px: 3,
          py: 2,
          bg: "linear-gradient(0deg,gray,gray)",
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
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box
          sx={{
            position: "absolute",
            bg: isHovered ? "transparent" : "black",
            zIndex: 2,
            top: "1px",
            left: "1px",
            bottom: "1px",
            right: "1px",
            borderRadius: "4px",
          }}
        />
        <Box
          zIndex={3}
          sx={{
            transition: "all .5s ease-in-out",
            color: isHovered ? "black" : "white",
            fontSize: "1.5rem",
            p: 2,
          }}
        >
          {children}
        </Box>
      </Flex>
    </Link>
  );
}

export default function ContactSection() {
  return (
    <>
      <Element name="contactMe" />
      <Flex
        w="80%"
        minH="65vh"
        mx="auto"
        alignItems={"center"}
        justifyContent="center"
      >
        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Flex
            sx={{
              fontSize: "3rem",
              fontWeight: 700,
            }}
          >
            Find me on
          </Flex>
          <HStack spacing={4}>
            <ContactButton
              link="https://www.linkedin.com/in/swh00tw/"
              bg="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(69,252,196,1) 100%)"
            >
              <Flex
                sx={{
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <FaLinkedin />
                <Flex>LinkedIn</Flex>
              </Flex>
            </ContactButton>
            <ContactButton
              link="https://www.linkedin.com/in/swh00tw/"
              bg="linear-gradient(90deg, rgba(180,118,58,1) 23%,  rgba(252,69,105,1) 100%)"
            >
              <Flex
                sx={{
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <FaGithub />
                <Flex>Github</Flex>
              </Flex>
            </ContactButton>
          </HStack>
        </Stack>
      </Flex>
    </>
  );
}
