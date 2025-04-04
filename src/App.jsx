import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header/Header";
import "./components/Header/Header.css";
import Hero from "./components/Hero/Hero";
import "./components/Hero/Hero.css";
import TodoTasks from "./components/TodoTasks/TodoTasks";
import "./components/TodoTasks/TodoTasks.css";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import "./components/TrustedBy/TrustedBy.css";
import Cto from "./components/Cto/Cto";
import "./components/Cto/Cto.css";
import BentoGrid from "./components/BentoGrid/BentoGrid";
import "./components/BentoGrid/BentoGrid.css";
import BentoGridServices from "./components/BentoGridServices/BentoGridServices";
import "./components/BentoGridServices/BentoGridServices.css";
import Cto2 from "./components/Cto2/Cto2";
import "./components/Cto2/Cto2.css";
import Footer from "./components/Footer/Footer";
import "./components/Footer/Footer.css";
import Preloader from "./components/Preloader/Preloader";
import "./components/Preloader/Preloader.css";
import { animate, AnimatePresence, color, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { slideUp } from "./components/Preloader/preloaderAnimation.js";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard.jsx";
import "./components/KanbanBoard/KanbanBoard.css"


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [navigationOpen, setNavigationOpen] = useState(true);
  const COLORS = ["#13FFAA", "#1E67C6", "#CEB4CF", "#DD335C"]
  const color = useMotionValue(COLORS[0])
  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 0%, #020617, 80%, ${color})`
    // radial-gradient(125% 125% at 50% 0%, #020617, 70%, rgba(221, 51, 92, 0), ${color})

  useEffect(()=> {
    animate(color, COLORS, {ease: "easeInOut", duration: 10, repeat: Infinity, repeatType: "mirror"})
  }, [])
  function handleNavigationToggle() {
    setNavigationOpen(!navigationOpen);
  }
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [headerHref, setHeaderHref] = useState("");

  function handleheaderHref(section) {
    // setHeaderHref(section)
    console.log("section");
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
    }, 4000);

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log("size", windowSize.width);
  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Header
              toggleNavigation={handleNavigationToggle}
              navigationOpen={navigationOpen}
              windowSize={windowSize}
              handleheaderHref={handleheaderHref}
              headerHref={headerHref}
            />

            <motion.main
              style={{
                backgroundImage
              }}
              >
              <Hero></Hero>
              {/* <TodoTasks></TodoTasks> */}
              <KanbanBoard/>
            </motion.main>
            <section className="trusted-by-section">
              <TrustedBy img={"src/assets/warner-bros.svg.png"}></TrustedBy>
              <TrustedBy img={"src/assets/warner-bros.svg.png"}></TrustedBy>
              <TrustedBy img={"src/assets/warner-bros.svg.png"}></TrustedBy>
              <TrustedBy img={"src/assets/warner-bros.svg.png"}></TrustedBy>
            </section>

            <section className="cto-section" id="aboutUs">
              <Cto></Cto>
            </section>

            <section className="bento-section">
              <BentoGrid></BentoGrid>
            </section>

            <section className="service-section" id="service">
              <BentoGridServices></BentoGridServices>
            </section>

            <section className="cto2-section">
              <Cto2></Cto2>
            </section>
            <AnimatePresence mode="wait">
              <Footer></Footer>
            </AnimatePresence>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
