"use client";

import { usePathname } from "next/navigation";
import { Text } from "@radix-ui/themes";

export function Footer() {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  return (
    <div className="absolute left-0 bottom-2 z-[2] w-screen flex flex-col sm:flex-row justify-center items-center gap-x-1 text-gray-6 px-4">
      <Text size="1"> © {year}, Shu-Wei Hsu. All rights reserved. </Text>
      {pathname === "/about" ? (
        <Text size="1">
          All trademarks are property of their respective owners.
        </Text>
      ) : null}
    </div>
  );
}
