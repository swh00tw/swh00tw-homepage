"use client";
import clsx from "clsx";
import { usePageContext } from "@/app/components/PageProvider";
import { AnimatePresence } from "framer-motion";
import React from "react";
import MotionWrapper from "@/app/components/MotionWrapper";
import WelcomePage from "@/app/components/Welcome";
import AboutPage from "@/app/components/About";
import CareerPage from "@/app/components/Career";
import ContactPage from "@/app/components/Contact";
import SkillPage from "@/app/components/Skill";
import ProjectPage from "@/app/components/Project";

export const pages = [
  { component: <WelcomePage key="welcome" />, tag: "Welcome" },
  { component: <AboutPage key="about" />, tag: "About" },
  { component: <CareerPage key="career" />, tag: "Career" },
  { component: <SkillPage key="skill" />, tag: "Skill" },
  { component: <ProjectPage key="project" />, tag: "Project" },
  { component: <ContactPage key="contact" />, tag: "Contact" },
];

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
