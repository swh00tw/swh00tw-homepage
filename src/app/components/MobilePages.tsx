import WelcomePage from "@/app/components/Welcome";
import AboutPage from "@/app/components/About";
import CareerPage from "@/app/components/Career";
import ContactPage from "@/app/components/Contact";
import SkillPage from "@/app/components/Skill";
import ProjectPage from "@/app/components/Project";

function WelcomePageM() {
  return <WelcomePage />;
}
function AboutPageM() {
  return <AboutPage />;
}
function CareerPageM() {
  return <CareerPage />;
}
function ContactPageM() {
  return <ContactPage />;
}
function SkillPageM() {
  return <SkillPage />;
}
function ProjectPageM() {
  return <ProjectPage />;
}

export const pages = [
  <WelcomePageM key="welcome" />,
  <AboutPageM key="about" />,
  <CareerPageM key="career" />,
  <SkillPageM key="skill" />,
  <ProjectPageM key="project" />,
  <ContactPageM key="contact" />,
];
