import React, { useState } from "react";
import "./Navbar.scss";

//imported icons
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  //state to track and update navbar
  const [navBar , setNavBar]=useState("menu");
  //Function to show navbar
  const showNavBar = () =>{
    setNavBar("menu showNavbar");
  }
  //Function to remove navbar
  const removeNavBar = () =>{
    setNavBar("menu");
  }

  return (
    <div className="navBar">
      <div className="logoDiv">
      <BiLogoMediumOld className='icon'/>
      <span>Nomads.com</span>
      </div>

        <div className={navBar} >
          <ul>
            <li className="navList">Destination</li>
            <li className="navList">Aboutus</li>
            <li className="navList">Testimonial</li>
            <li className="navList">Gallery</li>
          </ul>

          {/*Icon to remove NavBar */}
          <AiFillCloseCircle className='icon closeIcon' onClick={removeNavBar} />
        </div>
        <button className="signInBin btn">
          Subscribe
        </button>
        {/*Icon to Toggle NavBar */}
        <PiDotsNineBold className='icon menuIcon' onClick={showNavBar} />
      </div>
      

    
  )
}

export default Navbar