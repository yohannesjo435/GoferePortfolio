import React from 'react'
import Feedback from '../Feedback/Feedback'
import '../Feedback/Feedback.css'
import FooterLinks from '../FooterLinks/FooterLinks'
import '../FooterLinks/FooterLinks.css'


export default function Footer() {
  return (
    <footer id="footer">
      <Feedback></Feedback>
      <FooterLinks></FooterLinks>
      <FooterLogo></FooterLogo>
    </footer>
  )
}

function FooterLogo() {
  return (
    <div className='footer-img-wrapper'>
      <img src="src/assets/GofereTypography00-removebg-preview.png" alt="" />
    </div>
  )
}
