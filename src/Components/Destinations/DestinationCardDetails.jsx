// Import necessary dependencies and components
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Navbar from "../Navbar/Navbar";
import './Card.scss';

// Import images and icons
import video1 from "../../Assets/jaipur.mp4";
import { IoIosWifi } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BsEmojiGrin } from "react-icons/bs";
import { MdOutlineWindPower } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaRegLightbulb } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { GrRestroomWomen } from "react-icons/gr";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaTruckMedical } from "react-icons/fa6";

// Define the Progressbar component
function Progressbar({ value = 0 }) {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    if (percent < 100) {
      setTimeout(() => setPercent(newVal => newVal + 1), 200);
    }
  }, [percent]);

  return (
    <React.Fragment>
      <div className="progressbar">
        <div className="progressbarfill" style={{ width: `${percent}%` }}>
          {percent} %
        </div>
      </div>
    </React.Fragment>
  );
}

// Define the DestinationCardDetails component
function DestinationCardDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("details");
  const [rankingProgress, setRankingProgress] = useState(0);
  const [nomadCostProgress, setNomadCostProgress] = useState(0);

  useEffect(() => {
    const rankingInterval = setInterval(() => {
      setRankingProgress(val => val + 1);
    }, 100);

    const nomadCostInterval = setInterval(() => {
      setNomadCostProgress(val => val + 1);
    }, 150);

    // Cleanup functions to clear intervals when the component is unmounted
    return () => {
      clearInterval(rankingInterval);
      clearInterval(nomadCostInterval);
    };
  }, []);

  // Render the component
  return (
    <div>
      <Navbar />
      <div className="Card">
        <div className="videoContainer">
          <video src={video1} autoPlay loop muted></video>
          <div className="textOverlay">
            <p>Jaipur</p>
            <h3>Rajasthan</h3>
          </div>
        </div>
      </div>

      <div className="structure">
        <div className="MapAPI">
          <LoadScript
            googleMapsApiKey="AIzaSyAOn2je-sO9OsvRAZSzj7U1bTwAvVrB-yY"
          >
            <GoogleMap
              mapContainerStyle={{ height: "400px", width: "100%" }}
              center={{ lat: 27.0238, lng: 74.2179 }}
              zoom={12}
            />
          </LoadScript>
        </div>

        <div className="details">
          <div className="tabs">
            <button
              className={activeTab === "details" ? "active" : ""}
              onClick={() => setActiveTab("details")} id="button"
            >
              About
            </button>
            <button
              className={activeTab === "places" ? "active" : ""}
              onClick={() => setActiveTab("places")} id="button"
            >
              Popular Places
            </button>
          </div>

          {activeTab === "details" && (
            <div className="progressbar">
              <ul>
                <li className="detail1">
                  <h2><FaStar className="icon" /> Ranking:</h2>
                  <Progressbar value={rankingProgress} />
                </li>

                <li className="detail2">
                  <h2><GiMoneyStack className="icon" /> Cost for Nomad:</h2>
                  <Progressbar value={nomadCostProgress} />
                </li>
                {/* ... (previous list items) */}

<li>
  <h2><BsEmojiGrin className="icon" /> Fun:</h2>
  {/* Add your content for Fun */}
</li>

<li>
  <h2><MdOutlineWindPower className="icon" /> Air Quality(AQI):</h2>
  {/* Add your content for Air Quality(AQI) */}
</li>

<li>
  <h2><AiFillSafetyCertificate className="icon" /> Safety:</h2>
  {/* Add your content for Safety */}
</li>

<li>
  <h2><FaRegLightbulb className="icon" /> Electricity:</h2>
  {/* Add your content for Electricity */}
</li>

<li>
  <h2><GiNightSleep className="icon" /> NightLife:</h2>
  {/* Add your content for NightLife */}
</li>

<li>
  <h2><BsPersonWorkspace className="icon" /> Place for WFH:</h2>
  {/* Add your content for Place for WFH */}
</li>

<li>
  <h2><IoTimeOutline className="icon" /> AVG Trip Time:</h2>
  {/* Add your content for AVG Trip Time */}
</li>

<li>
  <h2><GrRestroomWomen className="icon" /> Safe for Women:</h2>
  {/* Add your content for Safe for Women */}
</li>

<li>
  <h2><TiWeatherPartlySunny className="icon" /> Climate:</h2>
  {/* Add your content for Climate */}
</li>

<li>
  <h2><FaTruckMedical className="icon" /> Medical:</h2>
  {/* Add your content for Medical */}
</li>

{/* ... (additional list items) */}

              </ul>
            </div>
          )}

          {activeTab === "places" && (
            <div className="places">
              {/* Places content here */}
              <h2>Places content goes here</h2>
              {/* Add your content for the "Places" tab */}
            </div>
          )}
        </div>
      </div>
    </div>
    );
}

export default DestinationCardDetails;
