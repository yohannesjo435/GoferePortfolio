import React from 'react'
import Feedback from '../Feedback/Feedback'
import '../Feedback/Feedback.css'
import FooterLinks from '../FooterLinks/FooterLinks'
import '../FooterLinks/FooterLinks.css'
import pageTransition from '../../Utils/pageTransition'
import { AnimatePresence } from 'framer-motion'


function Footer() {
  return (
    <AnimatePresence>
      <footer id="footer">
        <Feedback></Feedback>
        <FooterLinks></FooterLinks>
        <FooterLogo></FooterLogo>
      </footer>
    </AnimatePresence>
  )
}

function FooterLogo() {
  return (
    <div className='footer-img-wrapper'>
      <img src="src/assets/GofereTypography00-removebg-preview.png" alt="" />
    </div>
  )
}
export default (Footer);
