import React from 'react'
import Button from '../Button/Button'
import "../Button/Button.css"


export default function Header({toggleNavigation,navigationOpen, windowSize}) {
  return (
    <header>
        <div className="logo-wrapper">
            {/* <img src="" alt="" /> */}
            <div className="logo">
                GOFERE TECH
            </div>
        </div>

      <ul 
        style={{display: navigationOpen && windowSize.width < 900? "none": 'flex'}}
        >
        <li>Home</li>
        <li>About us</li>
        <li>Service</li>
        <li>Contact us</li>
      </ul>

      <div className="talk-to-an-expert"> 
        <Button 
          Children="Talk to an expert" 
        />
      </div>

      
      <div 
        onClick={toggleNavigation} 
        className = {navigationOpen? "humburger-menu": "humburger-menu humburger-menu-x"}
        >
        <div></div>
        <div></div>
      </div>
    </header>
  )
}
