import React from 'react'

export default function ServiceCard({iconImage, cardTitle, cardText}) {
  return (
    <div className='service-card'>
        <div className="img-wrapper">
            <img src={iconImage} alt="" />
        </div>  

        <div className="card-title">
            {cardTitle}
        </div>

        <div className="card-text">
            {cardText}
        </div>      

        {/* <a href="/">Contact us <span>&gt;</span> </a>add ">" in place of the  */}
          
    </div>
  )
}
