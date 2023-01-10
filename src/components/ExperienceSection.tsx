import {
  Flex,
  Stack,
  Box,
  AspectRatio,
  Image as ChakraImage,
  HStack,
  Spacer,
  Center,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  experienceSource,
  ExperienceInfo,
  isProjectExperienceInfo,
  isWorkExperienceInfo,
} from "@/data/experience";
import moment from "moment";
import { Element } from "react-scroll";
import {
  FaIdBadge,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaLink,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function ExternalLinkButton(props: {
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
          borderRadius: "999px",
          px: 2,
          py: 2,
          bg: "#ffffff20",
          position: "relative",
          _after: {
            content: '""',
            position: "absolute",
            borderRadius: "999px",
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
          zIndex={3}
          color={isHovered ? "black" : "white"}
          sx={{
            transition: "all .5s ease-in-out",
          }}
        >
          {children}
        </Box>
      </Flex>
    </Link>
  );
}

function ExperienceCard(props: { experience: ExperienceInfo }) {
  const { experience: e } = props;
  return (
    <Box borderRadius="2xl" mt={8} w="100%" bg={"#ffffff10"}>
      <Flex
        py={10}
        flexDirection={{ base: "column", lg: "row" }}
        w="100%"
        justifyContent="center"
        alignItems="start"
      >
        <Box
          w={{ base: "80%", lg: "50%" }}
          justifyContent="space-between"
          alignItems={{ base: "center", md: "start" }}
          py={10}
          h="100%"
        >
          <Flex
            flexDirection={"column"}
            flexGrow={1}
            w={{ base: "80%", lg: "70%" }}
          ></Flex>
          <Flex
            mt={8}
            flexDirection={{ base: "column", md: "row" }}
            w={{ base: "100%", md: "100%" }}
            alignItems={{ base: "center", md: "start" }}
            gap={4}
          ></Flex>
        </Box>
        <Flex
          w={{ base: "80%", lg: "35%" }}
          pt={{ base: 8, lg: 0 }}
          justifyContent="center"
          alignItems="center"
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Image
              quality="100"
              priority
              src={e.imagePath}
              alt="homepage"
              height="1100"
              width="2000"
              style={{
                borderRadius: "10px",
              }}
            />
          </motion.div>
        </Flex>
      </Flex>
    </Box>
  );
}

function ScrollTriggeredDiv(
  props: React.PropsWithChildren<{
    readonly delay?: number;
    readonly duration?: number;
    readonly offsetX?: number;
  }>
) {
  const { delay = 0, duration = 0.5, offsetX = 50, ...restProps } = props;
  return (
    <motion.div
      initial={{ opacity: 0, x: `-${offsetX}px` }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        x: { duration: duration },
        delay: 0.3 + delay,
      }}
      {...restProps}
    />
  );
}

function ExperienceItem(props: {
  readonly verticalLineWidth: number;
  experience: ExperienceInfo;
}) {
  const { verticalLineWidth, experience } = props;
  const horizontalGap = 60;

  return (
    <Box minH="40vh" mt="10vh">
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
              transform: "scale(7)",
              border: "1px solid #202020",
              boxSizing: "border-box",
            }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
              }}
            >
              <AspectRatio ratio={1 / 1}>
                <ChakraImage
                  src={experience.logoImagePath}
                  borderRadius="full"
                  sx={{
                    shadow: "0 0 8px 0 #FFD700",
                  }}
                />
              </AspectRatio>
            </motion.div>
          </Box>
        </Flex>
        <ScrollTriggeredDiv>
          <Flex
            sx={{
              fontSize: {
                base: "1rem",
                lg: "1.2rem",
              },
              color: "#ffffff90",
              fontFamily: "mono",
            }}
          >
            {`${moment(experience.startTs).format("MMM YYYY")}${
              experience.endTs
                ? ` - ${moment(experience.startTs).format("MMM YYYY")}`
                : "Present"
            }`}
          </Flex>
        </ScrollTriggeredDiv>
      </Flex>
      <Flex flexWrap={"wrap"}>
        <Stack
          pl={`${verticalLineWidth + horizontalGap}px`}
          w={{ base: "100%", lg: "60%" }}
        >
          <ScrollTriggeredDiv delay={0.1}>
            <Flex
              sx={{
                fontSize: { base: "1.5rem", lg: "2.5rem" },
                lineHeight: 1.4,
                fontWeight: 700,
                alignItems: "center",
                gap: 6,
              }}
              flexWrap="wrap"
              mb={{ base: 4, lg: 0 }}
            >
              <Flex>
                {isProjectExperienceInfo(experience)
                  ? experience.projectName
                  : experience.organization}
              </Flex>
              <HStack>
                {experience.websiteUrl ? (
                  <ExternalLinkButton
                    link={experience.websiteUrl}
                    bg="linear-gradient(86deg, rgba(195,77,34,1) 0%, rgba(253,247,45,1) 100%)"
                  >
                    <FaLink />
                  </ExternalLinkButton>
                ) : null}
                {isWorkExperienceInfo(experience) && experience.linkedinUrl ? (
                  <ExternalLinkButton
                    link={experience.linkedinUrl}
                    bg="linear-gradient(86deg, rgba(195,77,34,1) 0%, rgba(253,247,45,1) 100%)"
                  >
                    <FaLinkedin />
                  </ExternalLinkButton>
                ) : null}
                {isProjectExperienceInfo(experience) &&
                experience.githubLink ? (
                  <ExternalLinkButton
                    link={experience.githubLink}
                    bg="linear-gradient(86deg, rgba(195,77,34,1) 0%, rgba(253,247,45,1) 100%)"
                  >
                    <FaGithub />
                  </ExternalLinkButton>
                ) : null}
              </HStack>
            </Flex>
          </ScrollTriggeredDiv>
          <ScrollTriggeredDiv delay={0.3}>
            <Flex
              sx={{
                fontSize: { base: "0.8rem", lg: "1.1rem" },
                alignItems: { base: "start", lg: "center" },
                gap: "8px",
              }}
            >
              <Center>
                <FaIdBadge color="#FFD700" size="20px" />
              </Center>
              <Text>
                {experience.roles.join(" / ") +
                  `${
                    isWorkExperienceInfo(experience)
                      ? `${experience.team ? ` of ${experience.team}` : ""}`
                      : ""
                  }`}
              </Text>
            </Flex>
          </ScrollTriggeredDiv>
          {experience.location ? (
            <ScrollTriggeredDiv delay={0.4}>
              <Flex
                sx={{
                  fontSize: { base: "0.8rem", lg: "1.1rem" },
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Center>
                  <FaMapMarkerAlt color="#EA4335" size="20px" />
                </Center>
                <Text>{experience.location}</Text>
              </Flex>
            </ScrollTriggeredDiv>
          ) : null}
        </Stack>
        <Spacer />
        <Flex
          pl={{
            base: `${verticalLineWidth + horizontalGap}px`,
            lg: `0px`,
          }}
          pt={{
            base: "50px",
            lg: 0,
          }}
          w={{ base: "100%", lg: "30%" }}
        >
          <ScrollTriggeredDiv delay={0.2}>
            <ChakraImage
              src={experience.imagePath}
              alt="homepage"
              sx={{
                borderRadius: "10px",
                border: "3px solid #ffffff15",
              }}
            />
          </ScrollTriggeredDiv>
        </Flex>
      </Flex>
    </Box>
  );
}

export default function ExperienceSection() {
  const verticalLineWidth = 10;
  return (
    <Box>
      <Element name="myWorks">
        <Box
          sx={{
            w: "100%",
            h: "10vh",
          }}
        />
      </Element>
      <Flex
        minH="100vh"
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
        <Box
          position={"absolute"}
          left={0}
          zIndex={-1}
          h="100%"
          w={`${verticalLineWidth}px`}
          bg="#ffffff20"
        />
        <Flex flexGrow={1} py="120px" position="relative">
          <Box w="100%" bg="transparent">
            {experienceSource.map((e) => (
              <ExperienceItem
                key={e.startTs}
                verticalLineWidth={verticalLineWidth}
                experience={e}
              />
            ))}
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
    </Box>
  );
}
