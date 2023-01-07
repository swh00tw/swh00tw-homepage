import { motion } from "framer-motion";

interface PageMotionContainerProps extends React.PropsWithChildren<{}> {
  duration: number;
}
function PageMotionContainer(props: PageMotionContainerProps) {
  const { duration, children } = props;
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
