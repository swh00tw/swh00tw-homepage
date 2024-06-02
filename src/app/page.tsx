import { Flex, Grid, Text } from "@radix-ui/themes";
import { DirectionAwareHover } from "./DirectAwareHover";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { externalLinks } from "./constant";

export default function Home() {
  return (
    <Grid
      columns={"12"}
      rows="12"
      className="w-screen h-[80svh] md:w-[864px] md:h-[648px] z-[10]"
      gapX={"2"}
      gapY={"2"}
    >
      <DirectionAwareHover
        href="/about"
        imageUrl="/about.webp"
        gridColumnStart={{
          initial: "2",
          md: "3",
        }}
        gridColumnEnd={{
          initial: "8",
          md: "6",
        }}
        gridRowStart={{
          initial: "1",
        }}
        gridRowEnd={{
          initial: "3",
          md: "4",
        }}
      >
        <Text size="2" weight={"medium"}>
          About me
        </Text>
        <Text size="1">About Frank Hsu.</Text>
      </DirectionAwareHover>
      <DirectionAwareHover
        href="/posts"
        imageUrl="/posts.webp"
        gridRowStart={{
          initial: "3",
          md: "3",
        }}
        gridRowEnd={{
          initial: "5",
        }}
        gridColumnStart={{
          initial: "7",
          md: "8",
        }}
        gridColumnEnd={{
          initial: "12",
          md: "12",
        }}
      >
        <Text size="2" weight={"medium"}>
          Posts
        </Text>
        <Text size="1">Some random thoughts.</Text>
      </DirectionAwareHover>
      <DirectionAwareHover
        href="/projects"
        imageUrl="/projects.webp"
        gridColumnStart={{
          initial: "3",
          md: "4",
        }}
        gridColumnEnd={{
          initial: "11",
          md: "9",
        }}
        gridRowStart={{
          initial: "9",
        }}
        gridRowEnd={{
          initial: "12",
          md: "13",
        }}
      >
        <Text size="2" weight={"medium"}>
          Projects
        </Text>
        <Text size="1">Things I've worked on.</Text>
      </DirectionAwareHover>
      <Flex
        gridColumnStart={{
          initial: "2",
        }}
        gridColumnEnd={{
          initial: "3",
        }}
        gridRowStart={{
          md: "7",
        }}
        gridRowEnd={{
          md: "8",
        }}
        className="hidden md:flex flex-col items-center justify-center"
      >
        <Link
          href={externalLinks.github}
          target="_blank"
          className="relative shadow-6 hover:translate-x-[2px] hover:-translate-y-[2px] transition-all duration-300 ease-in-out cursor-pointer rounded-4 bg-gray-8 flex items-center justify-center aspect-square h-full"
        >
          <Github
            size={"24px"}
            strokeWidth={"1.25px"}
            className="text-gray-2"
          />
        </Link>
      </Flex>
      <Flex
        gridColumnStart={{
          initial: "11",
        }}
        gridColumnEnd={{
          initial: "12",
        }}
        gridRowStart={{
          initial: "10",
        }}
        gridRowEnd={{
          initial: "11",
        }}
        className="hidden md:flex flex-col items-center justify-center"
      >
        <Link
          href={externalLinks.linkedin}
          target="_blank"
          className="relative shadow-6 hover:translate-x-[2px] hover:-translate-y-[2px] transition-all duration-300 ease-in-out cursor-pointer rounded-4 bg-gray-8 flex items-center justify-center aspect-square h-full"
        >
          <Linkedin
            className="text-gray-2"
            size={"24px"}
            strokeWidth={"1.25px"}
          />
        </Link>
      </Flex>
    </Grid>
  );
}
