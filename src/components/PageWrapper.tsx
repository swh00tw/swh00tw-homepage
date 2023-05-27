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

const pages = [
  <WelcomePage key="welcome" />,
  <AboutPage key="about" />,
  <CareerPage key="career" />,
  <SkillPage key="skill" />,
  <ProjectPage key="project" />,
  <ContactPage key="contact" />,
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
        <AnimatePresence mode="wait">{pages[pageIndex]}</AnimatePresence>
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
        {...pages}
      </div>
    </React.Fragment>
  );
}
