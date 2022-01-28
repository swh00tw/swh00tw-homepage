import { motion } from 'framer-motion'

function PageMotionContainer(props){

    const variants = {
        hidden: { opacity: 0.5, scale: 0.0 },
        visible: { opacity: 1, scale: 1 },
    }

    return (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
        >
            {props.children}
        </motion.div>
    )
}

export default PageMotionContainer