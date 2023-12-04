import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";

//imported icons
import { BiLogoMediumOld } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  //state to track and update navbar
  const [navBar, setNavBar] = useState("menu");
  //Function to show navbar
  const showNavBar = () => {
    setNavBar("menu showNavbar");
  };
  //Function to remove navbar
  const removeNavBar = () => {
    setNavBar("menu");
  };

  return (
    <div className="navBar">
      <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
        <li className="navList">
          <div className="logoDiv">
            <BiLogoMediumOld className="icon" />
            <span>Nomads.com</span>
          </div>
        </li>
      </Link>

      <div className={navBar}>
        <ul>
          <Link
            to="destination"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="navList">Destination</li>
          </Link>
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="navList">About Us</li>
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="navList">Testimonial</li>
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <li className="navList">Contact</li>
          </Link>
        </ul>

        {/*Icon to remove NavBar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>
      <button className="signInBin btn">Subscribe</button>
      {/*Icon to Toggle NavBar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
};

export default Navbar;
