import PageMotionContainer from "../components/PageMotionContainer";
import { useState, useEffect } from "react";

export default function Home(props) {
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

  // force to scroll to top when reload the page
  // ref: https://github.com/vercel/next.js/discussions/15337#discussioncomment-315401
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return <PageMotionContainer duration={0.75}>123</PageMotionContainer>;
}
