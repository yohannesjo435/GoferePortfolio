import React, { useEffect, useState } from 'react'
import Header  from './components/Header/Header'
import "./components/Header/Header.css"
import Hero from './components/Hero/Hero'
import "./components/Hero/Hero.css"
export default function App() {
  const [navigationOpen, setNavigationOpen] = useState(false)
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
      </main>
    </>
    
  )
}
