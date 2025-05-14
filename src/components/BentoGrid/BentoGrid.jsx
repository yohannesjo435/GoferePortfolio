import React from 'react'
import BentoCard from './BentoCard/BentoCard'
import './BentoCard/BentoCard.css'

import BentoImg1 from "../../assets/BentoImages/tesfayepeanut-landingpage-1.png"
import BentoImg2 from "../../assets/BentoImages/movieApp.png"
import BentoImg3 from "../../assets/BentoImages/senk.png"
import BentoImg4 from "../../assets/BentoImages/RealStateWeb.png"
import BentoImg5 from "../../assets/BentoImages/bellevue gym 2.png"
import BentoImg6 from "../../assets/BentoImages/rosapeanut homepage1.png"

export default function BentoGrid() {
  return (
    <div className='h1-bento-container'>
      <h1 className='bento-h1'>
        We design <br />
        and build
      </h1>
      
      <div className="bento-grid-wrapper">
       <BentoCard image={BentoImg1} link={"https://yohannesjo435.github.io/Addis_hiwot_charity_website/"}/>
        <BentoCard image={BentoImg2} />
        <BentoCard image={BentoImg3} />
        <BentoCard image={BentoImg4} />
        <BentoCard image={BentoImg5} />
        <BentoCard image={BentoImg6} />
      </div>
      
    </div>
  )
}

{/* <BentoCard image={BentoImg1} link={"https://yohannesjo435.github.io/Addis_hiwot_charity_website/"}/>
<BentoCard image={BentoImg2} />
<BentoCard image={BentoImg3} />
<BentoCard image={BentoImg4} />
<BentoCard image={BentoImg5} />
<BentoCard image={BentoImg6} /> */}