import PageMotionContainer from "@/components/PageMotionContainer";
import PageHeaderWrapper from "@/components/PageTitleWrapper";

export default function Home() {
  // main card animation
  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.8,
      },
    },
  };

  return (
    <PageHeaderWrapper>
      <PageMotionContainer duration={0.75}>123</PageMotionContainer>
    </PageHeaderWrapper>
  );
}
