import WelcomePage from "@/components/pages/Welcome";
import AboutPage from "@/components/pages/About";
import CareerPage from "@/components/pages/Career";
import ContactPage from "@/components/pages/Contact";
import SkillPage from "@/components/pages/Skill";
import ProjectPage from "@/components/pages/Project";

export const pages = [
  { component: <WelcomePage key="welcome" />, tag: "Welcome" },
  { component: <AboutPage key="about" />, tag: "About" },
  { component: <CareerPage key="career" />, tag: "Career" },
  { component: <SkillPage key="skill" />, tag: "Skill" },
  { component: <ProjectPage key="project" />, tag: "Project" },
  { component: <ContactPage key="contact" />, tag: "Contact" },
];
