"use client";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { TbBrandGithub } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { RiDownloadCloud2Line, RiLinkedinLine } from "react-icons/ri";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

function LinkItem({
  href,
  children,
}: {
  readonly href: string;
  readonly children: React.ReactNode;
}) {
  return (
    <Link href={`${href}`} target="_blank">
      {children}
    </Link>
  );
}

export default function Headerbar() {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const pathname = usePathname();

  return (
    <React.Fragment>
      <AnimatePresence initial={false}>
        {inView && pathname === "/" ? null : (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className={clsx(
              "fixed",
              "justify-center",
              "top-0",
              "w-full",
              "h-20",
              "flex",
              "z-10",
              "border-b-[1px]",
              "lg:border-b-0",
              "border-[#808080]",
              "bg-[#ffffff20]",
              "lg:bg-transparent",
              "backdrop-blur",
              "lg:backdrop-blur-0",
              "text-[#808080]"
            )}
          >
            <div
              className={clsx(
                "w-[80%]",
                "lg:w-[65%]",
                "flex",
                "justify-between",
                "items-center"
              )}
            >
              <div className={clsx("text-[18px]", "font-medium")}>swh00tw</div>
              <div
                className={clsx(
                  "flex",
                  "flex-row",
                  "md:gap-x-[50px]",
                  "gap-x-[20px]"
                )}
              >
                <a href="/Frank_resume.pdf" download="Frank_resume.pdf">
                  <RiDownloadCloud2Line size="24px" />
                </a>
                <LinkItem href="mailto:a6140000@gmail.com">
                  <MdOutlineMail size="24px" />
                </LinkItem>
                <LinkItem href="https://github.com/swh00tw">
                  <TbBrandGithub size="24px" strokeWidth="2px" />
                </LinkItem>
                <LinkItem href="https://www.linkedin.com/in/swh00tw">
                  <RiLinkedinLine size="24px" />
                </LinkItem>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        ref={ref}
        className={clsx("absolute", "w-full", "h-1", "top-[35vh]")}
      />
    </React.Fragment>
  );
}
