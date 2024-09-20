import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>Taste Better than Best</p>
       
< div className='footer-social-icons'>
<img src={assets.facebook_icon} alt="Facebook" />
<img src={assets.twitter_icon} alt="Twitter" />
<img src={assets.linkedin_icon} alt="Google" />
</div>
</div>
        <div className="footer-content-center" id="footer">
         <h2>
            COMPANY
         </h2>
         <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
         </ul>
        </div>

        

        <div className="footer-content-right">
          <h2>
            GET IN TOUCH
          </h2>
          <ul>
            <li>+1-212-256-7898</li>
            <li>contact@tomato.com</li>
            
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2024 0 Tomato.com- All right resevers  </p>
    </div>
  );
}

export default Footer;
