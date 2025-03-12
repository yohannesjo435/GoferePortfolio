import React from 'react'
import Button from '../Button/Button'

export default function Cto() {
  return (
    <div className='cto'>
      <h1>
        Were - <br />
        Gofere <br />
        a creative <br /> 
        agency 
      </h1>

      <Button 
        Children="Talk to an expert" 
        backgroundColor={"black"} 
        width={"250px"} 
        border="2px solid white"
        color={"white"}
        padding={"15px 15px"}
        />
      
    </div>
  )
}
