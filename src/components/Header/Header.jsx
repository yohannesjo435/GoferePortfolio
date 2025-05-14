import React, { useState, useRef } from "react";
import Button from "../Button/Button";
import "../Button/Button.css";
import { animate, motion, AnimatePresence, delay, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

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
  handleheaderHref,
  headerHref,
  isLoading
}) {
  const [headerIsHidden, setHeaderIsHidden] = useState(false);
  const {scrollY} = useScroll()
  const lastYRef = useRef(0) // this where u stoped on the page(Y axis)
  

  useMotionValueEvent(scrollY, "change", (y)=> {
    const differnce = y - lastYRef.current;

    if (Math.abs(differnce) > 50) {
        setHeaderIsHidden(differnce > 0 )
        // document.querySelector("after").style.display = "none"
        //if diffence is larger that 0 we are scrolling down
          // headerIsHidden && (document.querySelector(".headerIndictor").style.display = "block");
        // if t's smaller than 0 we are scrolling up
        lastYRef.current = y;// we update this if the user scroll more that 50px
      }


  })
  const closeNav = navigationOpen && windowSize.width < 900;
  return (
    <motion.header 
      className="after"
      animate ={headerIsHidden ? "hidden": "visible"}
      whileHover="visible"
      whileFocus={() => setHeaderIsHidden(false)}
      variants={{
        hidden: {
          y: "-100%"
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
          <AnimatePresence mode="wait">
          {!closeNav && (
            <motion.ul
              variants={navVars}
              initial="initial"
              animate="animate"
              exit="exit"
              transition="transition"
            >
              
              <AnimatedMobileNavLink  href={"#"}>Home</AnimatedMobileNavLink>
              <AnimatedMobileNavLink>About us</AnimatedMobileNavLink>
              <AnimatedMobileNavLink  href={"#service"}>Service</AnimatedMobileNavLink>
              <AnimatedMobileNavLink  href={"#footer"}>Contact us</AnimatedMobileNavLink>
  
            </motion.ul>
          )}
        </AnimatePresence>
        ): (
          <ul>
              <AnimatedMobileNavLink active={"active"} href={"#"}>Home</AnimatedMobileNavLink>
              <AnimatedMobileNavLink active={""} href={"#aboutUs"}>About us</AnimatedMobileNavLink>
              <AnimatedMobileNavLink active={""} href={"#service"}>Service</AnimatedMobileNavLink>
              <AnimatedMobileNavLink active={""} href={"#footer"}>Contact us</AnimatedMobileNavLink>
              {/* <Link to="\footer">Contact Us</Link> */}

          </ul>
        )

      }


      <div className="talk-to-an-expert" >
        <Button Children="Talk to an expert" color="var(--secondar-gray)" href="#talkToAnExpert"/>
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

      <div className="headerIndictor">

      </div>
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


function AnimatedMobileNavLink({children, href, active}) {
  return (
    <motion.li /*variants={navLinksContainerVar} initial="initial" animate="open"*/>
      <motion.a className={active} variants={navLinksVar} animate="open" initial="initial"  href={href}>{children}</motion.a>
    </motion.li>
  )
}