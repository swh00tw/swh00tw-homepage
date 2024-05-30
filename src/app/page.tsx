"use client";

import { cn } from "@/utils/cn";
import { GridPattern } from "./GridPattern";
import { useMemo, useState, useEffect } from "react";
import { Flex, Grid, Text } from "@radix-ui/themes";
import { DirectionAwareHover } from "./DirectAwareHover";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { externalLinks } from "./constant";

const FRANK_gridBoxes: [x: number, y: number][] = [
  // a
  [0, -2],
  [1, -1],
  [-1, -1],
  [1, -2],
  [-1, -2],
  [1, -3],
  [-1, -3],
  [0, -5],
  [1, 0],
  [-1, 0],
  [1, -4],
  [-1, -4],
  [1, -5],
  [-1, -5],
  // r
  [-5, 0],
  [-5, -1],
  [-5, -2],
  [-5, -3],
  [-5, -4],
  [-5, -5],
  [-4, -5],
  [-3, -5],
  [-3, -4],
  [-3, -3],
  [-4, -3],
  [-4, -2],
  [-3, -1],
  [-3, 0],
  // f
  [-9, 0],
  [-9, -1],
  [-9, -2],
  [-9, -3],
  [-8, -3],
  [-9, -4],
  [-9, -5],
  [-8, -5],
  [-7, -5],
  // n
  [3, 0],
  [3, -1],
  [3, -2],
  [3, -3],
  [3, -4],
  [3, -5],
  [4, -3],
  [5, -2],
  [6, 0],
  [6, -1],
  [6, -2],
  [6, -3],
  [6, -4],
  [6, -5],
  // k
  [8, 0],
  [8, -1],
  [8, -2],
  [8, -3],
  [8, -4],
  [8, -5],
  [9, -3],
  [10, -2],
  [10, -1],
  [10, 0],
  [10, -4],
  [10, -5],
];

export default function Home() {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [windowSize, setWindowSize] = useState(() => {
    if (typeof window === "undefined") {
      return { width: 0, height: 0 };
    }
    return { width: window.innerWidth, height: window.innerHeight };
  });
  const gridBoxWidth = 18;

  const centerPoint: [x: number, y: number] = useMemo(() => {
    if (!ref) {
      return [0, 0];
    }
    const { width, height } = windowSize;
    const numberOfBoxesX = Math.floor(width / gridBoxWidth);
    const x = Math.floor(numberOfBoxesX / 2) - 1;
    const numberofBoxesY = Math.floor(height / gridBoxWidth);
    const y = Math.floor(numberofBoxesY / 2) - 1;
    return [x, y];
  }, [ref, windowSize]);

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div
      ref={(c) => setRef(c)}
      className="relative flex h-[90svh] w-full items-center justify-center overflow-hidden rounded-lg md:shadow-xl"
    >
      <GridPattern
        width={gridBoxWidth}
        height={gridBoxWidth}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          // "h-[50svh] sm:h-[90svh] w-full",
          "[mask-image:radial-gradient(circle_at_center,white,transparent)]",
          "z-[2] scale-[80%] md:scale-100",
        )}
        squares={
          ref
            ? FRANK_gridBoxes.map(([x, y]) => [
                centerPoint[0] + x,
                centerPoint[1] + y,
              ])
            : []
        }
        center={centerPoint}
      />
      <Grid
        columns={"12"}
        rows="12"
        className="w-full h-[80%] md:w-[864px] md:h-[648px] z-[10]"
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
          href="/crafts"
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
            Crafts
          </Text>
          <Text size="1">Projects I've worked on.</Text>
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
    </div>
  );
}
