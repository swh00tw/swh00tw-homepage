import clsx from "clsx";
import PageWrapper from "@/app/components/PageWrapper";
import { PageContextProvider } from "@/app/components/PageProvider";
import Footer from "@/app/components/Footer";
import Headerbar from "@/app/components/HeaderBar";
import WelcomePage from "@/app/components/Welcome";
import AboutPage from "@/app/components/About";
import CareerPage from "@/app/components/Career";
import ContactPage from "@/app/components/Contact";
import SkillPage from "@/app/components/Skill";
import ProjectPage from "@/app/components/Project";

export default function Home() {
  console.log(typeof window !== "undefined" ? "client" : "server");
  return (
    <PageContextProvider>
      <div className={clsx("lg:h-[calc(100svh+4000px)]", "relative")}>
        <Headerbar />
        <PageWrapper>
          <WelcomePage />
          <AboutPage />
          <CareerPage />
          <SkillPage />
          <ProjectPage />
          <ContactPage />
        </PageWrapper>
        <Footer />
      </div>
    </PageContextProvider>
  );
}
