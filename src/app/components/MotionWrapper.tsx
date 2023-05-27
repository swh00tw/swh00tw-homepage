"use client";
import { motion } from "framer-motion";

export default function MotionWrapper(props: {
  readonly children: React.ReactNode;
}) {
  const { children } = props;
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.2,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
