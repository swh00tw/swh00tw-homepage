"use client";
import clsx from "clsx";
import { usePageContext } from "@/components/PageProvider";
import { AnimatePresence } from "framer-motion";
import WelcomePage from "@/components/Welcome";
import AboutPage from "@/components/About";
import CareerPage from "@/components/Career";
import ContactPage from "@/components/Contact";
import SkillPage from "@/components/Skill";
import ProjectPage from "@/components/Project";
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
