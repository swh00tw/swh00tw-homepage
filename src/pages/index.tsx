import PageMotionContainer from "@/components/PageMotionContainer";
import PageHeaderWrapper from "@/components/PageTitleWrapper";
import React from "react";
import ExperienceSection from "@/components/ExperienceSection";
import WelcomeSection from "@/components/WelcomeSection";

export default function Home() {
  return (
    <PageHeaderWrapper>
      <PageMotionContainer duration={0.75}>
        <WelcomeSection />
        <ExperienceSection />
      </PageMotionContainer>
    </PageHeaderWrapper>
  );
}
