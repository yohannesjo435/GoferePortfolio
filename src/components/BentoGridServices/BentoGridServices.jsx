import React from 'react'
import ServicesCard from "./ServicesCard/ServiceCard"
import "./ServicesCard/ServiceCard.css"

export default function BentoGridServices() {
    const iconImages = {
        icon1: "src/assets/BentoImages/Image icon/coding-icon-colored.png",
        iconBrand: "src/assets/BentoImages/Image icon/brand-icon-colored.png"
    }
    const cardTitles = {
        title1: "Branding"
    }
    const cardTexts = {
        text1: "Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."
    }

  return (
    <div className='service-wrapper'>
        <div className='service-titles'>
            <h1>
                Features that we <br /> 
                    offer for our <br /> 
                        clients.
            </h1>
            <h3>
                Building the Future of Your Business Online Your <br />
                    Partner in Digital Success.
            </h3>
        </div>

      <div className="service-bento">
        <ServicesCard 
            cardTitle={cardTitles.title1} 
            cardText={cardTexts.text1}  
            iconImage={iconImages.iconBrand}>
        </ServicesCard>
        <ServicesCard 
            cardTitle={cardTitles.title1} 
            cardText={cardTexts.text1}  
            iconImage={iconImages.iconBrand}>
        </ServicesCard>
        <ServicesCard 
            cardTitle={cardTitles.title1} 
            cardText={cardTexts.text1}  
            iconImage={iconImages.icon1}>
        </ServicesCard>
        <ServicesCard 
            cardTitle={cardTitles.title1} 
            cardText={cardTexts.text1}  
            iconImage={iconImages.icon1}>
        </ServicesCard>
        <ServicesCard 
            cardTitle={cardTitles.title1} 
            cardText={cardTexts.text1}  
            iconImage={iconImages.icon1}>
        </ServicesCard>
      </div>
    </div>
  )
}
