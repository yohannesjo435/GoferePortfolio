import React from 'react'
import ServicesCard from "./ServicesCard/ServiceCard"
import "./ServicesCard/ServiceCard.css"
import iconImg1 from "../../assets/BentoImages/service icon/contentManagement.png"
import iconImg2 from "../../assets/BentoImages/service icon/ecom.png"
import iconImg3 from "../../assets/BentoImages/service icon/seo.png"
import iconImg4 from "../../assets/BentoImages/service icon/webdevIcon.png"
import iconImg5 from "../../assets/BentoImages/service icon/webMaintenace.png"


export default function BentoGridServices() {
    const iconImages = {
        // iconBrand: "src/assets/BentoImages/Image icon/brand-icon-colored.png"
    }
    const cardTitles = {
        title1: "Custom web Development",
        title2: "E-Commerce Solutions",
        title3: "SEO Services",
        title4: "Content Management Systems",
        title5: "Web Maintenance & Support",
    }
    const cardTexts = {
        text1: "Transform your ideas into reality with our tailored web development services. We create responsive, user-friendly websites that cater to your specific business needs, ensuring a seamless experience for your visitors.",
        text2: "Launch your online store with our comprehensive e-commerce solutions. From user-friendly interfaces to secure payment gateways, we help you build a robust platform that drives sales and enhances customer satisfaction.",
        text3: "Boost your online visibility with our expert SEO services. We implement effective strategies to improve your search engine rankings, attract more traffic, and enhance your brand's presence in the digital landscape.",
        text4: "Take control of your website with our easy-to-use content management systems. We integrate powerful CMS solutions that allow you to manage your content effortlessly, keeping your site fresh and engaging.",
        text5: "Keep your website running smoothly with our ongoing maintenance and support services. Our team is here to ensure your site is secure, up-to-date, and performing at its best, so you can focus on your business.",
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
            iconImage={iconImg1}>
        </ServicesCard>
        <ServicesCard 
            cardTitle={cardTitles.title2} 
            cardText={cardTexts.text2}  
            iconImage={iconImg2}>
        </ServicesCard>
        <ServicesCard 
            cardTitle={cardTitles.title3} 
            cardText={cardTexts.text3}  
            iconImage={iconImg3}>
        </ServicesCard>
        <ServicesCard 
            cardTitle={cardTitles.title4} 
            cardText={cardTexts.text4}  
            iconImage={iconImg4}>
        </ServicesCard>
        <ServicesCard 
            cardTitle={cardTitles.title5} 
            cardText={cardTexts.text5}  
            iconImage={iconImg5}>
        </ServicesCard>
      </div>
    </div>
  )
}
