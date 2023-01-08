import { motion } from "framer-motion";

function PageMotionContainer(
  props: React.PropsWithChildren<{
    duration?: number;
  }>
) {
  const { duration = 0.75, children } = props;
  const variants = {
    hidden: { opacity: 0.05, y: "60%" },
    visible: { opacity: 1, y: "0" },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      transition={{ duration: duration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default PageMotionContainer;
