import React, { useState, useRef } from "react";
import Button from "../Button/Button";
import "../Button/Button.css";
import { animate, motion, AnimatePresence, delay, useMotionValueEvent, useScroll } from "framer-motion";

const navVars = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  transition: {
    duration: 10,
  },
};

export default function Header({
  toggleNavigation,
  navigationOpen,
  windowSize,
}) {
  const [headerIsHidden, setHeaderIsHidden] = useState(false);
  const {scrollY} = useScroll()
  const lastYRef = useRef(0) // this where u stoped on the page(Y axis)


  useMotionValueEvent(scrollY, "change", (y)=> {
    const differnce = y - lastYRef.current;

    if (Math.abs(differnce) > 50) {
        setHeaderIsHidden(differnce > 0 )
        //if diffence is larger that 0 we are scrolling down
        // if t's smaller than 0 we are scrolling up
        lastYRef.current = y;// we update this if the user scroll more that 50px
      }


  })
  const closeNav = navigationOpen && windowSize.width < 900;
  return (
    <motion.header 
      animate ={headerIsHidden ? "hidden": "visible"}
      variants={{
        hidden: {
          y: "-90%"
        },
        visible: {
          y: 0
        }
      }}
      transition={{
        duration: 0.2
      }}
    >
      <div className="logo-wrapper">
        {/* <img src="" alt="" /> */}
        <div className="logo">GOFERE TECH</div>
      </div>

      {
        windowSize.width < 900? (
          <AnimatePresence>
          {!closeNav && (
            <motion.ul
              variants={navVars}
              initial="initial"
              animate="animate"
              exit="exit"
              transition="transition"
            >
              
              <AnimatedMobileNavLink  href={"#"}>Home</AnimatedMobileNavLink>
              <AnimatedMobileNavLink  href={"#"}>About us</AnimatedMobileNavLink>
              <AnimatedMobileNavLink  href={"#"}>Service</AnimatedMobileNavLink>
              <AnimatedMobileNavLink  href={"#"}>Contact us</AnimatedMobileNavLink>
  
            </motion.ul>
          )}
        </AnimatePresence>
        ): (
          <ul>
              <AnimatedMobileNavLink  href={"#"}>Home</AnimatedMobileNavLink>
              <AnimatedMobileNavLink  href={"#"}>About us</AnimatedMobileNavLink>
              <AnimatedMobileNavLink  href={"#"}>Service</AnimatedMobileNavLink>
              <AnimatedMobileNavLink  href={"#"}>Contact us</AnimatedMobileNavLink>
          </ul>
        )

      }


      <div className="talk-to-an-expert">
        <Button Children="Talk to an expert" />
      </div>

      <motion.div
        onClick={toggleNavigation}
        className={
          navigationOpen ? "humburger-menu" : "humburger-menu humburger-menu-x"
        }
      >
        <div></div>
        <div></div>
      </motion.div>
    </motion.header>
  );
}

const navLinksVar = {
  initial: {
    y: "100%",
    transition: {
      duration: 0.5
    }
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7   
     }
  }
}
// const navLinksContainerVar = {
//   initial: {
//     transition : {
//       staggerChildren: 0.09
//     },
//   },
//   open: {
//     transition: {
//       staggerChildren: 0.09
//     }
//   }

// }


function AnimatedMobileNavLink({children, href}) {
  return (
    <motion.li /*variants={navLinksContainerVar} initial="initial" animate="open"*/>
      <motion.a variants={navLinksVar} animate="open" initial="initial"  href={href}>{children}</motion.a>
    </motion.li>
  )
}