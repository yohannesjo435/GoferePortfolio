import { animate, delay } from "framer-motion";

export const slideUp = {
    initail: {
        y: 0,
        scale:0
    },
    exit: {
        y: "-100vh",
    },
    transition: {
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2 
       }
}
export const fade = {
    initail: {
        opacity: 0
    },
    enter: {
        opacity: 1,
        transition: {duration: 0.2, delay: 0.2},
       }
}

// export {slideUp}