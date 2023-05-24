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
    <div
      className={clsx(
        "fixed",
        "top-0",
        "w-full",
        "h-screen",
        "items-center",
        "justify-center",
        "flex",
        "text-black"
      )}
    >
      <AnimatePresence mode="wait">{pages[pageIndex]}</AnimatePresence>
    </div>
  );
}
