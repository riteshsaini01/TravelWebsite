import React from 'react';
import { BiLogoMediumOld } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <BiLogoMediumOld className='icon' />
            <span>Nomads.com</span>
          </div>

          <div className="socials flex">
            <ImFacebook className='icon' aria-label="Facebook" />
            <BsTwitter className='icon' aria-label="Twitter" />
            <AiFillInstagram className='icon' aria-label="Instagram" />
          </div>

          <nav className="footerLinks">
            <span className='linkTitle'>Information</span>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Explore</a></li>
              <li><a href='#'>Travel</a></li>
              <li><a href='#'>Blog</a></li>
            </ul>
          </nav>

          {/* Other footerLinks sections... */}

          <div className="footerLinks">
            <span className='linkTitle'>Contact Details</span>
            <span className='phone'>+910000001</span>
            <span className='email'>Nomads@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
