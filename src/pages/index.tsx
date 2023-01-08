import PageMotionContainer from "@/components/PageMotionContainer";
import PageHeaderWrapper from "@/components/PageTitleWrapper";
import React from "react";
import ExperienceSection from "@/components/ExperienceSection";
import WelcomeSection from "@/components/WelcomeSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <PageHeaderWrapper>
      <PageMotionContainer duration={0.75}>
        <WelcomeSection />
        <ExperienceSection />
        <ContactSection />
      </PageMotionContainer>
    </PageHeaderWrapper>
  );
}
