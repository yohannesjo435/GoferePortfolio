import { tr } from 'framer-motion/client'
import React, { useEffect, useState } from 'react'

export default function BentoCard({image, link}) {

  const [isHovered, setIsHovered] = useState(false)

  function handleHover(){
    setIsHovered(true)
  }

  function handleLeave(){
    setIsHovered(false)
  }
  return (
    <div className='bento-card'
      onMouseOver={handleHover} 
      onMouseLeave={handleLeave}
    >
      <img src={image}/>
      {isHovered &&
      <BentoButton href={link}/>
    }
    </div>
  )
}


function BentoButton({href}) {
  return (
    <>
      <div className='bento-btn'> <a href={href} >Vist Site -> </a></div>
    </>
  )
}
