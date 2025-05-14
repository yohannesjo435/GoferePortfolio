import React from 'react'
import BentoCard from './BentoCard/BentoCard'
import './BentoCard/BentoCard.css'

export default function BentoGrid() {
  return (
    <div className='h1-bento-container'>
      <h1 className='bento-h1'>
        We design <br />
        and build
      </h1>
      
      <div className="bento-grid-wrapper">
        <BentoCard image="src\assets\BentoImages\tesfayepeanut-landingpage-1.png" link={"https://yohannesjo435.github.io/Addis_hiwot_charity_website/"}/>
        <BentoCard image="src\assets\BentoImages\movieApp.png"/>
        <BentoCard image="src\assets\BentoImages\senk.png"/>
        <BentoCard image="src\assets\BentoImages\RealStateWeb.png"/>
        <BentoCard image="src/assets/BentoImages/bellevue gym 2.png"/>
        <BentoCard image="src\assets\BentoImages\rosapeanut homepage1.png"/>
      </div>
      
    </div>
  )
}
