"use client";
import clsx from "clsx";
import { usePageContext } from "@/components/PageProvider";
import { AnimatePresence } from "framer-motion";
import WelcomePage from "@/components/pages/Welcome";
import AboutPage from "@/components/pages/About";
import CareerPage from "@/components/pages/Career";
import ContactPage from "@/components/pages/Contact";
import SkillPage from "@/components/pages/Skill";
import ProjectPage from "@/components/pages/Project";
import React from "react";
import MotionWrapper from "@/components/MotionWrapper";

const pages = [
  { component: <WelcomePage key="welcome" />, tag: "Welcome" },
  { component: <AboutPage key="about" />, tag: "About" },
  { component: <CareerPage key="career" />, tag: "Career" },
  { component: <SkillPage key="skill" />, tag: "Skill" },
  { component: <ProjectPage key="project" />, tag: "Project" },
  { component: <ContactPage key="contact" />, tag: "Contact" },
];

export default function PageWrapper() {
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
        {...pages.map((p) => p.component)}
      </div>
    </React.Fragment>
  );
}
