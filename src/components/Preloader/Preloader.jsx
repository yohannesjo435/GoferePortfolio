import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {slideUp, fade} from  "./preloaderAnimation"
import pageTransition from '../../Utils/pageTransition';

function Preloader() {

  const [index, setIndex] = useState(0);
  const words = ["Hello", "ሰላም", "Bonjour", "ሰላም ለከ", "cio", "مرحبا", "Hallo", "你好", "Konnichiwa", "Namaste", "Jambo", "Merhaba", "Shalom", "Annyeong haseyo","Hola"]

  useEffect (()=> {
    if (index == words.length - 1) return;
    setTimeout(()=>{
      setIndex(index + 1);
    }, index == 0? 1000: 150)
  }, [index])
  return ( 
    <motion.div 
        className='preloader-container' 
        initail="initail" 
        exit="exit" 
        transition="transition"
        variants={slideUp}
        >
          <motion.p 
            className='preloader-text' 
            variants={fade} 
            animate="enter"
            initial="initail">
            {words[index]}
          </motion.p>
    </motion.div>
  )
}

export default (Preloader);