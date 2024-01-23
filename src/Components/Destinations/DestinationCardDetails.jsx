import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Card.scss";

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

//Importing images of popular places
import J1 from "../../Assets/PlacesGallery/J1.jpg";
import J2 from "../../Assets/PlacesGallery/J2.jpg";
import J3 from "../../Assets/PlacesGallery/J3.jpg";
import J4 from "../../Assets/PlacesGallery/J4.jpg";

const photos = [
  {
    id: 1,
    src: J1,
    details:
      "Hawa Mahal, 'the Palace of the Winds', stands in Jaipur, Rajasthan. Built in 1799, it's a five-story architectural marvel with 953 intricately designed windows. Maharaja Sawai Pratap Singh's creation fuses Rajput and Mughal styles, serving as an iconic symbol of Jaipur's rich cultural heritage and attracting visitors worldwide.",
  },
  {
    id: 2,
    src: J2,
    details:
      "Jal Mahal, nestled in Man Sagar Lake, Jaipur, is a stunning architectural gem. Built in the 18th century, the palace partially submerged in water exhibits a unique blend of Rajput and Mughal styles. Renowned for its picturesque setting, Jal Mahal reflects the grandeur of Rajasthan's royal history, captivating visitors with its beauty.",
  },
  {
    id: 3,
    src: J3,
    details:
      "Albert Hall Museum, located in Jaipur, Rajasthan, is a captivating blend of Indo-Saracenic architecture. Built in 1876 to commemorate Albert Edward's visit, it houses an extensive collection of artifacts, including sculptures, paintings, and decorative arts. A symbol of cultural heritage, the museum showcases Rajasthan's rich history and artistic traditions.",
  },
  {
    id: 4,
    src: J4,
    details:
      "Galta Ji Temple, situated in Jaipur, is an ancient Hindu pilgrimage site surrounded by the Aravalli hills. Also known as the Monkey Temple, it features a series of holy water tanks and pavilions. The temple complex is home to a large population of monkeys, adding a unique and lively atmosphere to the spiritual ambiance.",
  },
  // Add more photos as needed
];

// Define the Progressbar component
function Progressbar({ value }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (percent < value) {
      const interval = setInterval(() => setPercent((prev) => prev + 1), 200);
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
        <div
          className={`progressbarfill ${colorClass}`}
          style={{ width: `${percent}%` }}
        >
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
      setRankingProgress((val) => (val < 30 ? val + 1 : 30));
    }, 120);

    const NomadInterval = setInterval(() => {
      setNomadCostProgress((val) => (val < 40 ? val + 1 : 40));
    }, 120);

    const funInterval = setInterval(() => {
      setFunProgress((val) => (val < 50 ? val + 1 : 50));
    }, 120);

    const aqiInterval = setInterval(() => {
      setAqiProgress((val) => (val < 60 ? val + 1 : 60));
    }, 180);

    const safetyInterval = setInterval(() => {
      setSafetyProgress((val) => (val < 70 ? val + 1 : 70));
    }, 90);

    const electricityInterval = setInterval(() => {
      setElectricityProgress((val) => (val < 80 ? val + 1 : 80));
    }, 130);

    const nightLifeInterval = setInterval(() => {
      setNightLifeProgress((val) => (val < 90 ? val + 1 : 90));
    }, 150);

    const wfhPlaceInterval = setInterval(() => {
      setWFHPlaceProgress((val) => (val < 20 ? val + 1 : 20));
    }, 100);

    const avgTripTimeInterval = setInterval(() => {
      setAvgTripTimeProgress((val) => (val < 30 ? val + 1 : 30));
    }, 120);

    const safeForWomenInterval = setInterval(() => {
      setSafeForWomenProgress((val) => (val < 40 ? val + 1 : 40));
    }, 110);

    const climateInterval = setInterval(() => {
      setClimateProgress((val) => (val < 50 ? val + 1 : 50));
    }, 140);

    const medicalInterval = setInterval(() => {
      setMedicalProgress((val) => (val < 60 ? val + 1 : 60));
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.436026623!2d75.62574662635835!3d26.885421389376653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1706021059731!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="details">
          <div className="tabs">
            <button
              className={activeTab === "details" ? "active" : ""}
              onClick={() => setActiveTab("details")}
              id="button"
            >
              About
            </button>
            <button
              className={activeTab === "places" ? "active" : ""}
              onClick={() => setActiveTab("places")}
              id="button"
            >
              Popular Places
            </button>
          </div>

          {activeTab === "details" && (
            <div className="progressbar">
              <ul>
                <li className="detail1">
                  <h2>
                    <FaStar className="icon" /> Ranking:
                  </h2>
                  <Progressbar value={rankingProgress} />
                </li>

                <li className="detail2">
                  <h2>
                    <GiMoneyStack className="icon" /> Cost for Nomad:
                  </h2>
                  <Progressbar value={nomadCostProgress} />
                </li>

                <li>
                  <h2>
                    <BsEmojiGrin className="icon" /> Fun:
                  </h2>
                  <Progressbar value={funProgress} />
                </li>

                <li>
                  <h2>
                    <MdOutlineWindPower className="icon" /> Air Quality(AQI):
                  </h2>
                  <Progressbar value={aqiProgress} />
                </li>

                <li>
                  <h2>
                    <AiFillSafetyCertificate className="icon" /> Safety:
                  </h2>
                  <Progressbar value={safetyProgress} />
                </li>

                <li>
                  <h2>
                    <FaRegLightbulb className="icon" /> Electricity:
                  </h2>
                  <Progressbar value={electricityProgress} />
                </li>

                <li>
                  <h2>
                    <GiNightSleep className="icon" /> NightLife:
                  </h2>
                  <Progressbar value={nightLifeProgress} />
                </li>

                <li>
                  <h2>
                    <BsPersonWorkspace className="icon" /> Place for WFH:
                  </h2>
                  <Progressbar value={wfhPlaceProgress} />
                </li>

                <li>
                  <h2>
                    <IoTimeOutline className="icon" /> AVG Trip Time:
                  </h2>
                  <Progressbar value={avgTripTimeProgress} />
                </li>

                <li>
                  <h2>
                    <GrRestroomWomen className="icon" /> Safe for Women:
                  </h2>
                  <Progressbar value={safeForWomenProgress} />
                </li>

                <li>
                  <h2>
                    <TiWeatherPartlySunny className="icon" /> Climate:
                  </h2>
                  <Progressbar value={climateProgress} />
                </li>

                <li>
                  <h2>
                    <FaTruckMedical className="icon" /> Medical:
                  </h2>
                  <Progressbar value={medicalProgress} />
                </li>
              </ul>
            </div>
          )}

          {activeTab === "places" && (
            <div className="places">
              {photos.map((photo, index) => (
                <div
                  key={photo.id}
                  className={`place-item ${index % 2 === 0 ? "left" : "right"}`}
                >
                  <img src={photo.src} alt={`Photo ${photo.id}`} />
                  <div className="place-description">
                    <h3>{photo.details}</h3>
                    {/* Add other description content as needed */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DestinationCardDetails;
