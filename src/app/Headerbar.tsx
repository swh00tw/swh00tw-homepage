"use client";

import { Flex, Text } from "@radix-ui/themes";
import { cn } from "@/utils/cn";
import { robotoMono } from "@/utils/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type HeaderbarLink = {
  label: string;
  href: string;
};

const links: HeaderbarLink[] = [
  { label: "index", href: "/" },
  { label: "/about", href: "/about" },
  { label: "/crafts", href: "/crafts" },
  { label: "/posts", href: "/posts" },
];

function HeaderbarLink({
  label,
  href,
  index,
}: HeaderbarLink & { index: number }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "border-[1px] border-gray-6 py-2 px-4 cursor-pointer z-[2] border-l-0 bg-gray-3",
        "transition-all ease-in-out duration-100",
        {
          "border-l-[1px]": index === 0,
          "border-b-offwhite font-medium bg-offwhite": isActive,
        },
      )}
    >
      <Text size="1" className="text-gray-11">
        {label}
      </Text>
    </Link>
  );
}

export function Headerbar() {
  return (
    <Flex
      className={cn(
        "w-full relative min-h-[48px] bg-gray-4",
        robotoMono.className,
      )}
    >
      <div className="absolute w-full bottom-0 bg-gray-6 h-[1px] z-[1]" />
      <Flex
        className={cn(
          "absolute bottom-0 flex flex-row px-4 w-full items-center justify-between",
        )}
      >
        <Flex className="items-center">
          <Flex className="px-2 mr-2">
            <Image
              src="/logo.webp"
              width={24}
              height={24}
              alt="logo"
              className="rounded-2"
            />
          </Flex>
          {links.map((link, index) => (
            <HeaderbarLink key={link.label} {...link} index={index} />
          ))}
        </Flex>
        <Flex>icons</Flex>
      </Flex>
    </Flex>
  );
}
