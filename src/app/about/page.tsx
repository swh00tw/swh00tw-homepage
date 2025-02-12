"use client";

import { cn } from "@/utils/cn";
import {
  DownloadIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { externalLinks } from "../constant";
import BlueskyIcon from "../BlueskyIcon";

const intro = [
  "A full stack web developer from Taiwan. Currently, I am based in New York and studying master at Cornell Tech. I like Web development, Design Engineering, and Blockchain Technology.",
  "Looking for Software Engineering Role in United States starting from 2025 now. Feel free to reach out to me. Let's connect.",
] as const;

const experiences: {
  logo: string;
  title: string;
  company: string;
  location: string;
  startAt: number;
  endAt: number;
  description?: string;
}[] = [
  {
    logo: "/circle-icon.png",
    title: "Software Engineer Intern",
    company: "Circle",
    location: "New York, NY (Remote)",
    startAt: 1716192000,
    endAt: 1723190400,
  },
  {
    logo: "/ntu.png",
    title: "Frontend Engineer",
    company: "National Taiwan University, Office of Academic Affairs",
    location: "Taipei, Taiwan",
    startAt: 1659340800,
    endAt: 1673769600,
  },
  {
    logo: "/wodco.png",
    title: "Software Engineer Intern",
    company: "WOD.co",
    location: "Taipei, Taiwan",
    startAt: 1643702400,
    endAt: 1659254400,
  },
];

const academic: {
  logo: string;
  name: string;
  program: string;
  location: string;
  time: string;
}[] = [
  {
    logo: "/cornelltech_logo.png",
    name: "Cornell Tech",
    program: "M.S. in Information System",
    location: "New York, NY",
    time: "Aug, 2023 - May, 2025",
  },
  {
    logo: "/ntu.png",
    name: "National Taiwan University",
    program: "B.S. in Electrical Engineering",
    location: "Taipei, Taiwan",
    time: "Sep, 2018 - Jan, 2023",
  },
];

export default function Page() {
  const now = new Date();

  return (
    <div
      className={cn(
        "min-h-[70svh] md:min-h-[50svh] flex flex-col gap-y-8 my-16 sm:my-12",
        "text-gray-11",
        "w-[80vw] sm:w-[60vw] md:w-[40vw]",
        "",
      )}
    >
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col">
          <Text size="3" weight={"medium"} className="text-gray-12">
            Frank Hsu
          </Text>
          <Text size="2">Full Stack Developer</Text>
        </div>
        {intro.map((text, index) => (
          <Text key={index} size="2">
            {text}
          </Text>
        ))}
        <Flex>
          <a href="/ShuWei_Hsu_resume.pdf" download={"ShuWei_Hsu_resume.pdf"}>
            <Flex className="items-center gap-x-1">
              <DownloadIcon width={16} height={16} />
              <Text size="2">Resume</Text>
            </Flex>
          </a>
        </Flex>
      </div>
      <div className="flex flex-col">
        <Text size="2" weight={"medium"} className="text-gray-12">
          Experience
        </Text>
        {experiences.map((exp, idx) => {
          return (
            <div key={idx} className="flex flex-row items-center px-2 mt-4">
              <Flex className="h-fit w-fit min-w-fit">
                <Image
                  src={exp.logo}
                  height={28}
                  width={28}
                  className="aspect-square"
                  alt={`${exp.company}-logo`}
                />
              </Flex>
              <div className="flex flex-col ml-4 gap-y-1">
                <Text size="2">
                  {exp.title}, {exp.company}
                </Text>
                <Text size="1">{exp.location}</Text>
                <Text size="1">
                  {new Date(exp.startAt * 1000).toLocaleDateString()} -{" "}
                  {exp.endAt > now.getTime() / 1000
                    ? "Present"
                    : new Date(exp.endAt * 1000).toLocaleDateString()}
                </Text>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col">
        <Text size="2" weight={"medium"} className="text-gray-12">
          Education
        </Text>
        {academic.map((data, idx) => {
          return (
            <div
              key={data.program}
              className="flex flex-row items-center px-2 mt-4"
            >
              <Flex className="h-fit w-fit min-w-fit">
                <Image
                  src={data.logo}
                  height={28}
                  width={28}
                  className="aspect-square"
                  alt={`${data.name}-logo`}
                />
              </Flex>
              <div className="flex flex-col ml-4 gap-y-1">
                <Text size="2">
                  {data.program}, {data.name}
                </Text>
                <Text size="1">{data.location}</Text>
                <Text size="1">{data.time}</Text>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-y-4">
        <Text size="2" weight={"medium"} className="text-gray-12">
          Find me via
        </Text>
        <Flex className="items-center gap-x-3 px-1">
          <a href="mailto:a6140000@gmail.com">
            <EnvelopeClosedIcon width={16} height={16} />
          </a>
          <Link href={externalLinks.linkedin} target="_blank">
            <LinkedInLogoIcon width={16} height={16} />
          </Link>
          <Link href={externalLinks.github} target="_blank">
            <GitHubLogoIcon width={16} height={16} />
          </Link>
          <Link href={externalLinks.bsky} target="_blank">
            <BlueskyIcon width={16} height={16} />
          </Link>
        </Flex>
      </div>
    </div>
  );
}
