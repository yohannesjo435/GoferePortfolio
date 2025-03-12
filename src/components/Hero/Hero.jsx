import React from 'react'
import Button from '../Button/Button'
import "../Button/Button.css"

export default function Hero() {
  return (
  <section className='hero-section'>
     <h1 className='main-content-h1'>
      Website Design and <br /> 
        Development in <br /> 
          Ethiopia
     </h1>
     <h5>
      a professional website design company <br /> 
      in Ethiopia that can help you create an 
                <br />attractive websites.
     </h5>
     <Button 
      Children="Contact us" 
    />
  </section>
  )
}
     