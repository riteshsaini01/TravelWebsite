import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Navbar from "../Navbar/Navbar";
import './Card.scss';

//imported images
import video1 from "../../Assets/jaipur.mp4";

function DestinationCardDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("details");

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
              <h2>Ranking:</h2>
         
          </li>


          <li className="detail2">
            <h2>Cost for Nomad:</h2>
         
          </li>


          <li>
          <h2>WiFi:</h2>
         
          </li>

          <li>
          <h2>Fun:</h2>
         
          </li>

          <li>
          <h2>Air Quality(AQI):</h2>
          
          </li>

          <li>
          <h2>Safety:</h2>
        
          </li>

          <li>
          <h2>Electricity:</h2>
         
          </li>

          <li>
          <h2>NightLife:</h2>
         
          </li>

          <li>
          <h2>Place for WFH:</h2>
         
          </li>

          <li>
          <h2>AVG Trip Time:</h2>
         
          </li>

          <li>
          <h2>Safe for Women:</h2>
         
          </li>

          <li>
          <h2>Climate:</h2>
         
          </li>

          <li>
          <h2>Medical:</h2>
          
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
