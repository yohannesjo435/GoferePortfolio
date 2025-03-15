import React, { useEffect, useState } from 'react'
import Header  from './components/Header/Header'
import "./components/Header/Header.css"
import Hero from './components/Hero/Hero'
import "./components/Hero/Hero.css"
import TodoTasks from "./components/TodoTasks/TodoTasks"
import "./components/TodoTasks/TodoTasks.css"
import TrustedBy from "./components/TrustedBy/TrustedBy"
import "./components/TrustedBy/TrustedBy.css"
import Cto from './components/Cto/Cto'
import "./components/Cto/Cto.css"
import BentoGrid from "./components/BentoGrid/BentoGrid"
import "./components/BentoGrid/BentoGrid.css"
import BentoGridServices from './components/BentoGridServices/BentoGridServices'
import "./components/BentoGridServices/BentoGridServices.css"
import Cto2 from "./components/Cto2/Cto2"
import "./components/Cto2/Cto2.css"
import Footer from './components/Footer/Footer'
import './components/Footer/Footer.css'


export default function App() {
  const [navigationOpen, setNavigationOpen] = useState(true)
  function handleNavigationToggle() {
    setNavigationOpen(!navigationOpen)
  }
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    
    window.addEventListener("resize", handleResize)
    
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  
  console.log("size", windowSize.width)
  return (
    <>
      <Header 
        toggleNavigation={handleNavigationToggle} 
        navigationOpen={navigationOpen}
        windowSize={windowSize}
      />
      <main>
        <Hero></Hero>
        <TodoTasks></TodoTasks>
      </main>
      <section className="trusted-by-section">
        <TrustedBy img={"src/assets/warner-bros.svg.png"}></TrustedBy>
        <TrustedBy img={"src/assets/warner-bros.svg.png"}></TrustedBy>
        <TrustedBy img={"src/assets/warner-bros.svg.png"}></TrustedBy>
        <TrustedBy img={"src/assets/warner-bros.svg.png"}></TrustedBy>
      </section>

      <section className='cto-section'>
        <Cto></Cto>
      </section>

      <section className='bento-section'>
        <BentoGrid></BentoGrid>
      </section>
      
      <section className='service-section'>
        <BentoGridServices></BentoGridServices>
      </section>

      <section className='cto2-section'>
        <Cto2></Cto2>
      </section>

      <Footer>
      </Footer>

    </>
    
  )
}
