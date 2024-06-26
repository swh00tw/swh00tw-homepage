// ref: https://ui.aceternity.com/components/direction-aware-hover
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Flex, FlexProps } from "@radix-ui/themes";
import { Link } from "next-view-transitions";

const OptionalLinkWrapper = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) =>
  href ? (
    <Link href={href} className="cursor-pointer">
      {children}
    </Link>
  ) : (
    children
  );

export const DirectionAwareHover = ({
  imageUrl,
  children,
  childrenClassName,
  imageClassName,
  wrapperClassName,
  href,
  ...rest
}: FlexProps & {
  imageUrl: string;
  children?: React.ReactNode | string;
  childrenClassName?: string;
  imageClassName?: string;
  wrapperClassName?: string;
  href?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    // console.log("direction", direction);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement,
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <Flex {...rest}>
      <motion.div
        onMouseEnter={handleMouseEnter}
        ref={ref}
        className={cn(
          "w-full h-full cursor-pointer bg-transparent rounded-4 overflow-hidden group/card relative",
          wrapperClassName,
        )}
      >
        <AnimatePresence mode="wait">
          <OptionalLinkWrapper href={href}>
            <motion.div
              className="relative h-full w-full"
              initial="initial"
              whileHover={direction}
              exit="exit"
            >
              <motion.div className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/30 z-10 transition duration-500" />
              <motion.div
                variants={variants}
                className="h-full w-full relative bg-gray-1"
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
              >
                <Image
                  alt="image"
                  className={cn(
                    "h-full w-full object-cover scale-[1.35] grayscale-[90%] contrast-[75%]",
                    imageClassName,
                  )}
                  fill
                  src={imageUrl}
                  priority
                />
              </motion.div>
              <motion.div
                variants={textVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className={cn(
                  "text-white absolute bottom-4 left-4 z-40 flex flex-col gap-y-0",
                  childrenClassName,
                )}
              >
                {children}
              </motion.div>
            </motion.div>
          </OptionalLinkWrapper>
        </AnimatePresence>
      </motion.div>
    </Flex>
  );
};

const variants = {
  initial: {
    x: 0,
  },

  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 10,
  },
  bottom: {
    y: -10,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -10,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 10,
    opacity: 1,
  },
};
