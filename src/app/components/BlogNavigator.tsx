"use client";
import clsx from "clsx";
import { FaExternalLinkAlt } from "react-icons/fa";
import * as HoverCard from "@radix-ui/react-hover-card";

function BlogNavigator({ children }: { readonly children: React.ReactNode }) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <a
          href="https://swh00tw.dev"
          className={clsx(
            "flex",
            "flex-row",
            "gap-x-2",
            "items-center",
            "text-[#808080]",
            "py-1",
            "px-3",
            "rounded-md",
            "text-[16px]"
          )}
        >
          <div>Blog</div>
          <FaExternalLinkAlt size={14} />
        </a>
      </HoverCard.Trigger>
      <HoverCard.Content
        className={clsx(
          "radix-state-closed:animate-slideDownAndFadeOut",
          "radix-state-open:animate-slideUpAndFade"
        )}
      >
        <HoverCard.Arrow className="fill-[#3e3e3e]" />
        <div className={clsx("w-fit")}>{children}</div>
      </HoverCard.Content>
    </HoverCard.Root>
  );
}

export { BlogNavigator };
