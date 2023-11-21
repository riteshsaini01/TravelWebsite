import React from 'react';
import "./Navbar.css";

//imported icons
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="logoDiv">
      <BiLogoMediumOld className='icon'/>
      <span>OU-Trips</span>
      </div>

        <div className="menu">
          <ul>
            <li className="navList">Destination</li>
            <li className="navList">Aboutus</li>
            <li className="navList">Testimonial</li>
            <li className="navList">Gallery</li>
          </ul>

          {/*Icon to remove NavBar */}
          <AiFillCloseCircle className='icon' />
        </div>
        <button className="signInBin btn">
          Sign Up
        </button>
        {/*Icon to Toggle NavBar */}
        <PiDotsNineBold className='icon' />
      </div>
      

    
  )
}

export default Navbar