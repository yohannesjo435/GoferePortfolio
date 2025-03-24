import React from 'react'
import Button from '../Button/Button'
import "../Button/Button.css"
import {motion} from "framer-motion"

export default function Hero() {
  const headline = {
    description: "a professional website design company."
  }
  const descriptionWord = headline.description.split("")
  // console.log(descriptionWord)
  return (
  <section className='hero-section'>
     <motion.h1 
      className='main-content-h1'>
      Website Design and <br /> 
        Development in <br /> 
          Ethiopia
     </motion.h1>
     <h5>
      {descriptionWord.map((word, index)=> (
        <motion.p 
          initial ={{filter:"blur(10px)", opacity: 0, y: 12}}
          animate ={{filter: "blur(0)", opacity: 1, y: 12}}
          transition={{duration: 0.5, delay: 0.029*index}}
          key={index}
          >
            {word === " "? "\u00A0": word}{/* for spaces between the words  */}
          </motion.p>
        ))}
     </h5>
     <Button 
      Children="Contact us" 
    />
  </section>
  )
}
     