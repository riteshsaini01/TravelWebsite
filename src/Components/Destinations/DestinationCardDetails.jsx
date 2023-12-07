import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './Card.scss';

//imported images
import video1 from "../../Assets/jaipur.mp4";

function DestinationCardDetails() {
  const { id } = useParams();

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
    </div>
  );
}

export default DestinationCardDetails;
