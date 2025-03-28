import { motion, AnimatePresence } from "framer-motion";
export default function pageTransition(Component) {
    return () => (
        <>
            <Component/>
            <motion.div
                className="page-slide-in"
                initial={{scaleY: 0}}
                animate={{scaleY: 0}}
                exit={{scaleY: 1}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            />
            <motion.div
                className="page-slide-out"
                initial={{scaleY: 1}}
                animate={{scaleY: 0}}
                exit={{scaleY: 0}}
                transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
            />
        </>
    )
}

