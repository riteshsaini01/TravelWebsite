import React from 'react'
import "./Footer.scss";

//Imported Icons
import { BiLogoMediumOld } from 'react-icons/bi';
import { BsTwitter} from 'react-icons/bs';
import { AiFillInstagram} from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';

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
            <ImFacebook className='icon'/>
            <BsTwitter className='icon'/>
            <AiFillInstagram className='icon'/>
          </div>

          <div className="footerLinks">
            <span className='linkTitle'>
              Information
            </span>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Explore</a></li>
            <li><a href='#'>Travel</a></li>
            <li><a href='#'>Blog</a></li>
          </div>

          <div className="footerLinks">
            <span className='linkTitle'>
             Helpful Links
            </span>
            <li><a href='#'>Destination</a></li>
            <li><a href='#'>Support</a></li>
            <li><a href='#'>Travel & Condition</a></li>
            <li><a href='#'>Privacy</a></li>
          </div>

          <div className="footerLinks">
            <span className='linkTitle'>Contact Details</span>
            <span className='phone'>+910000001</span>
            <span className='email'>Nomads@gmail.com</span>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer