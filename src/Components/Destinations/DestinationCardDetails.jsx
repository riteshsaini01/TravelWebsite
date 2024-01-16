import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Navbar from "../Navbar/Navbar";
import './Card.scss';

// Import images and icons
import video1 from "../../Assets/jaipur.mp4";
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
function Progressbar({ value }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (percent < value) {
      const interval = setInterval(() => setPercent(prev => prev + 1), 200);
      return () => clearInterval(interval);
    }
  }, [percent, value]);

  // Determine the color class based on progress value
  let colorClass = "";
  if (percent < 30) {
    colorClass = "below30";
  } else if (percent >= 30 && percent <= 70) {
    colorClass = "between30and70";
  } else {
    colorClass = "above70";
  }

  return (
    <React.Fragment>
      <div className={`progressbar ${colorClass}`}>
        <div className={`progressbarfill ${colorClass}`} style={{ width: `${percent}%` }}>
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
  const [funProgress, setFunProgress] = useState(0);
  const [aqiProgress, setAqiProgress] = useState(0);
  const [safetyProgress, setSafetyProgress] = useState(0);
  const [electricityProgress, setElectricityProgress] = useState(0);
  const [nightLifeProgress, setNightLifeProgress] = useState(0);
  const [wfhPlaceProgress, setWFHPlaceProgress] = useState(0);
  const [avgTripTimeProgress, setAvgTripTimeProgress] = useState(0);
  const [safeForWomenProgress, setSafeForWomenProgress] = useState(0);
  const [climateProgress, setClimateProgress] = useState(0);
  const [medicalProgress, setMedicalProgress] = useState(0);

  useEffect(() => {
    const RankingInterval = setInterval(() => {
      setRankingProgress(val => (val < 30 ? val + 1 : 30));
    }, 120);

    const NomadInterval = setInterval(() => {
      setNomadCostProgress(val => (val < 40 ? val + 1 : 40));
    }, 120);

    const funInterval = setInterval(() => {
      setFunProgress(val => (val < 50 ? val + 1 : 50));
    }, 120);

    const aqiInterval = setInterval(() => {
      setAqiProgress(val => (val < 60 ? val + 1 : 60));
    }, 180);

    const safetyInterval = setInterval(() => {
      setSafetyProgress(val => (val < 70 ? val + 1 : 70));
    }, 90);

    const electricityInterval = setInterval(() => {
      setElectricityProgress(val => (val < 80 ? val + 1 : 80));
    }, 130);

    const nightLifeInterval = setInterval(() => {
      setNightLifeProgress(val => (val < 90 ? val + 1 : 90));
    }, 150);

    const wfhPlaceInterval = setInterval(() => {
      setWFHPlaceProgress(val => (val < 20 ? val + 1 : 20));
    }, 100);

    const avgTripTimeInterval = setInterval(() => {
      setAvgTripTimeProgress(val => (val < 30 ? val + 1 : 30));
    }, 120);

    const safeForWomenInterval = setInterval(() => {
      setSafeForWomenProgress(val => (val < 40 ? val + 1 : 40));
    }, 110);

    const climateInterval = setInterval(() => {
      setClimateProgress(val => (val < 50 ? val + 1 : 50));
    }, 140);

    const medicalInterval = setInterval(() => {
      setMedicalProgress(val => (val < 60 ? val + 1 : 60));
    }, 160);

    // Cleanup functions to clear intervals when the component is unmounted
    return () => {
      clearInterval(RankingInterval);
      clearInterval(NomadInterval);
      clearInterval(funInterval);
      clearInterval(aqiInterval);
      clearInterval(safetyInterval);
      clearInterval(electricityInterval);
      clearInterval(nightLifeInterval);
      clearInterval(wfhPlaceInterval);
      clearInterval(avgTripTimeInterval);
      clearInterval(safeForWomenInterval);
      clearInterval(climateInterval);
      clearInterval(medicalInterval);
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

                <li>
                  <h2><BsEmojiGrin className="icon" /> Fun:</h2>
                  <Progressbar value={funProgress} />
                </li>

                <li>
                  <h2><MdOutlineWindPower className="icon" /> Air Quality(AQI):</h2>
                  <Progressbar value={aqiProgress} />
                </li>

                <li>
                  <h2><AiFillSafetyCertificate className="icon" /> Safety:</h2>
                  <Progressbar value={safetyProgress} />
                </li>

                <li>
                  <h2><FaRegLightbulb className="icon" /> Electricity:</h2>
                  <Progressbar value={electricityProgress} />
                </li>

                <li>
                  <h2><GiNightSleep className="icon" /> NightLife:</h2>
                  <Progressbar value={nightLifeProgress} />
                </li>

                <li>
                  <h2><BsPersonWorkspace className="icon" /> Place for WFH:</h2>
                  <Progressbar value={wfhPlaceProgress} />
                </li>

                <li>
                  <h2><IoTimeOutline className="icon" /> AVG Trip Time:</h2>
                  <Progressbar value={avgTripTimeProgress} />
                </li>

                <li>
                  <h2><GrRestroomWomen className="icon" /> Safe for Women:</h2>
                  <Progressbar value={safeForWomenProgress} />
                </li>

                <li>
                  <h2><TiWeatherPartlySunny className="icon" /> Climate:</h2>
                  <Progressbar value={climateProgress} />
                </li>

                <li>
                  <h2><FaTruckMedical className="icon" /> Medical:</h2>
                  <Progressbar value={medicalProgress} />
                </li>
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
