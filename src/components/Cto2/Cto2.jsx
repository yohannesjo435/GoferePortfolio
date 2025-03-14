import React from 'react'
import Button from '../Button/Button'

export default function Cto() {
  return (
    <div className='cto2'>
      <h1>
        Transform Your Vision into <br /> 
          Reality.
      </h1>
      <h3>
      At Gofere Tech, we specialize in innovative solutions tailored to your  business needs. <br /> Let us help you elevate your brand and achieve your  goals. Contact us today to get <br /> started!
      </h3>
      <Button 
        Children="Contact us" 
        backgroundColor={"transparent"} 
        width={"136px"} 
        border="2px solid white"
        color={"white"}
        padding={"10px 10px"}
        />
      
    </div>
  )
}
