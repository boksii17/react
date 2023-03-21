import React from 'react'
import "../css/footer.css"
import logo from "../pictures/logo.png";
import { Link } from 'react-router-dom';
import { FacebookLogo } from 'phosphor-react';
import { InstagramLogo } from 'phosphor-react';
import { TwitterLogo } from 'phosphor-react';


export const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer__container">
      <div className="footer__logo">
        <img src={logo} alt="Tech Shop" />
      </div>
      <div className="footer__info">
        <p>123 Tech Street</p>
        <p>Belgrade, Serbia 11 000</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="footer__social">
  
      <Link to="https://www.facebook.com/">
          <FacebookLogo size={32} />
        </Link>
        <Link to="https://www.instagram.com/">
          <InstagramLogo size={32} />
        </Link>
        <Link to="https://twitter.com/login">
          <TwitterLogo size={32} />
        </Link>
</div>
    </div>
    <p className="footer__copy">&copy; 2023 Tech Shop. All rights reserved.</p>
  </footer>
  )
}

