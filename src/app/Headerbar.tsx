"use client";

import { Flex, Text } from "@radix-ui/themes";
import { cn } from "@/utils/cn";
import { robotoMono } from "@/utils/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
        "border-[1px] border-gray-6 py-2 px-4 cursor-pointer z-[2] border-l-0",
        { "border-l-[1px]": index === 0, "border-b-main": isActive },
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
    <Flex className={cn("w-full relative min-h-[48px]", robotoMono.className)}>
      <div className="absolute w-full bottom-0 bg-gray-6 h-[1px] z-[1]" />
      <Flex
        className={cn(
          "absolute bottom-0 flex flex-row px-4 w-full items-center justify-between",
        )}
      >
        <Flex>
          {links.map((link, index) => (
            <HeaderbarLink key={link.label} {...link} index={index} />
          ))}
        </Flex>
        <Flex>icons</Flex>
      </Flex>
    </Flex>
  );
}
