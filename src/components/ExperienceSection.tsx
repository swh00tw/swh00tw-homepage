import {
  Flex,
  Stack,
  Box,
  AspectRatio,
  Image as ChakraImage,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import {
  experienceSource,
  ExperienceInfo,
  isProjectExperienceInfo,
} from "@/data/experience";
import moment from "moment";
import { Element } from "react-scroll";

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
      viewport={{ once: true }}
      transition={{
        x: { duration: duration },
        delay: 0.3 + delay,
      }}
      {...props}
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
    <Box minH="60vh" mt="10vh">
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
                  src={experience.imagePath}
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
              fontSize: "1.2rem",
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
      <Stack pl={`${verticalLineWidth + horizontalGap}px`}>
        <ScrollTriggeredDiv delay={0.1}>
          <Flex
            sx={{
              fontSize: "2.5rem",
              fontWeight: 700,
            }}
          >
            {isProjectExperienceInfo(experience)
              ? experience.projectName
              : experience.organization}
          </Flex>
        </ScrollTriggeredDiv>
      </Stack>
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
