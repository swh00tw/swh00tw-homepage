"use client";

import { Flex, Text } from "@radix-ui/themes";
import { cn } from "@/utils/cn";
import { robotoMono } from "@/utils/fonts";
import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Cross2Icon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { externalLinks } from "./constant";
import { useOpenTabs, type HeaderbarLink } from "./OpenTabProvider";

function HeaderbarLink({
  label,
  href,
  allowClose = false,
  index,
}: HeaderbarLink & { index: number }) {
  const { closeTab } = useOpenTabs();
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex flex-row gap-x-2 items-center",
        "border-[1px] border-gray-7 py-2 px-4 cursor-pointer z-[2] border-l-0 bg-gray-3",
        "transition-all ease-in-out duration-100",
        {
          "border-l-[1px]": index === 0,
          "border-b-offwhite font-medium bg-offwhite": isActive,
        },
      )}
    >
      <Text size="1" className="text-gray-12 whitespace-nowrap">
        {label}
      </Text>
      {allowClose ? (
        <div className="hover:bg-gray-4 transition-all ease-in-out">
          <Cross2Icon
            width={14}
            height={14}
            className="text-gray-10 hover:text-gray-12"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              closeTab(href);
            }}
          />
        </div>
      ) : null}
    </Link>
  );
}

export function Headerbar() {
  const { openTabs } = useOpenTabs();
  const tabsRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: tabsRef });
  const tolerance = 0.05;
  const [isReachLeft, setIsReachLeft] = useState(false);
  const [isReachRight, setIsReachRight] = useState(false);

  useMotionValueEvent(scrollXProgress, "change", (val) => {
    if (
      tabsRef.current?.scrollWidth &&
      tabsRef.current?.clientWidth &&
      tabsRef.current.scrollWidth > tabsRef.current.clientWidth
    ) {
      if (1 - tolerance < val && 1 >= val) {
        setIsReachRight(true);
      } else {
        setIsReachRight(false);
      }
      if (0 <= val && val < tolerance) {
        setIsReachLeft(true);
      } else {
        setIsReachLeft(false);
      }
    }
  });

  const iconClasses =
    "text-gray-11 hover:text-gray-12 transition-colors ease-in-out";

  return (
    <Flex
      className={cn(
        "w-full relative min-h-[48px] bg-gray-4 z-[1]",
        robotoMono.className,
      )}
    >
      <div className="absolute w-full bottom-0 bg-gray-7 h-[1px] z-[1]" />
      <Flex
        className={cn(
          "absolute bottom-0 flex flex-row px-4 w-full items-center justify-between gap-4",
        )}
      >
        <Flex className="items-center max-w-[70%]">
          <Flex className="md:px-2 mr-2 w-[18px] h-[18px] sm:h-[95%] sm:aspect-square relative">
            <Image
              src="/logo.webp"
              // width={18}
              // height={18}
              alt="logo"
              fill
              className="rounded-2 min-w-min object-cover"
            />
          </Flex>
          <div className="relative max-w-[80%] sm:max-w-full">
            <Flex
              className={cn(
                "items-center overflow-auto",
                `sm:before:hidden before:transition-all before:ease-in-out before:content-[''] before:w-[20px] before:h-full before:bg-gradient-to-r before:from-gray-6 before:to-transparent before:absolute before:left-0 before:top-0 before:z-[5]`,
                `sm:after:hidden after:transition-all after:ease-in-out after:content-[''] after:w-[20px] after:h-full after:bg-gradient-to-l after:from-gray-6 after:to-transparent after:absolute after:right-0 after:top-0 after:z-[5]`,
                {
                  "before:from-transparent": isReachLeft,
                  "after:from-transparent": isReachRight,
                },
              )}
              ref={tabsRef}
            >
              {openTabs.map((tab, index) => (
                <HeaderbarLink {...tab} index={index} key={tab.href} />
              ))}
            </Flex>
          </div>
        </Flex>
        <Flex gap="3" className="items-center min-w-min">
          <Link
            href={externalLinks.github}
            className={iconClasses}
            target="_blank"
          >
            <GitHubLogoIcon width={20} height={20} />
          </Link>
          <Link
            href={externalLinks.linkedin}
            className={iconClasses}
            target="_blank"
          >
            <LinkedInLogoIcon width={20} height={20} />
          </Link>
          <Link href={externalLinks.x} className={iconClasses} target="_blank">
            <TwitterLogoIcon width={20} height={20} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
