import React from 'react'

export default function FooterLinks() {
  return (
    <div className='footer-link-wrapper'>
      <ul>
        <h4>Quick links</h4>
        <li>Home</li>
        <li>About us</li>
        <li>Service</li>
        <li>Contact Us</li>
      </ul>

      <ul>
        <h4>Contact Us</h4>
        <li>+0901010101</li>
        <li>+0902020304</li>
        <li>www.gofere.com</li>
      </ul>

      <ul className='social-links'>
        <li><img src="src\assets/BentoImages/Image icon/brand-icon-colored.png" alt="" /></li>
        <li><img src="src\assets/BentoImages/Image icon/coding-icon-colored.png" alt="" /></li>
        <li><img src="src\assets/BentoImages/Image icon/brand-icon-colored.png" alt="" /></li>
        <li><img src="src\assets/BentoImages/Image icon/coding-icon-colored.png" alt="" /></li>
      </ul>
    </div>
  )
}
