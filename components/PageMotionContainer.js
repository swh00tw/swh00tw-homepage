import { motion } from 'framer-motion'

function PageMotionContainer(props){

    const variants = {
        hidden: { opacity: 0.05, y: '60%' },
        visible: { opacity: 1, y: '0' },
    }

    return (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: props.duration,  ease: 'easeInOut' }}
        >
            {props.children}
        </motion.div>
    )
}

export default PageMotionContainer