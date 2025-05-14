import React, { useEffect, useState } from 'react'
import { motion, time } from 'framer-motion'
import {slideUp, fade} from  "./preloaderAnimation"

function Preloader() {

  const [index, setIndex] = useState(0);
  const words = ["Hello", "ሰላም", "Bonjour", "ሰላም ለከ", "cio", "مرحبا", "Hallo", "你好", "Konnichiwa", "Namaste", "Jambo", "Merhaba", "Shalom", "Annyeong haseyo","Hola"]

  useEffect (()=> {
    if (index == words.length - 1) return;
    const timer = setTimeout(()=>{
      setIndex(index + 1);
    }, index == 0? 1000: 150)

    return clearInterval(time)
  }, [index])
  return ( 
    <motion.div 
        className='preloader-container' 
        variants={slideUp}
        initial="initial" 
        exit="exit" 
        transition="transition"
        >
          <motion.p 
            className='preloader-text' 
            variants={fade} 
            initial="initial"
            animate="enter"
            exit="exit"
            >
              <span></span>
            {words[index]}
          </motion.p>
    </motion.div>
  )
}

export default (Preloader);