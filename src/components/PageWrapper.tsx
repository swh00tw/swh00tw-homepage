"use client";
import clsx from "clsx";
import { usePageContext } from "@/components/PageProvider";
import { AnimatePresence } from "framer-motion";
import { pages } from "@/components/pages";
import React from "react";
import MotionWrapper from "@/components/MotionWrapper";

export default function PageWrapper(props: {
  readonly children: React.ReactNode;
}) {
  const { children } = props;
  const { pageIndex } = usePageContext();

  return (
    <React.Fragment>
      <div
        className={clsx(
          "hidden",
          "lg:flex",
          "fixed",
          "top-0",
          "w-full",
          "h-screen",
          "items-center",
          "justify-center",
          "text-black"
        )}
      >
        <AnimatePresence mode="wait">
          <MotionWrapper key={pages[pageIndex].tag}>
            {pages[pageIndex].component}
          </MotionWrapper>
        </AnimatePresence>
      </div>
      <div
        className={clsx(
          "flex",
          "lg:hidden",
          "flex-col",
          "items-center",
          "justify-center"
        )}
      >
        {children}
      </div>
    </React.Fragment>
  );
}
