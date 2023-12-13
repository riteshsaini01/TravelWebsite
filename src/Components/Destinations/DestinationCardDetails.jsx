import React from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Navbar from "../Navbar/Navbar";
import './Card.scss';

//imported images
import video1 from "../../Assets/jaipur.mp4";

function DestinationCardDetails() {
  const { id } = useParams();

  /**{let number = document.getElementById("number");
  let counter = 0;
  setInterval(() => {
    if(counter == 65){
      clearInterval();
    }
    else{
      counter += 1;
      number.innerHTML = counter + "%";
    }
  }, 30);}**/

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
              center={{ lat: 27.0238, lng: 74.2179 }} // Adjust with the coordinates of your desired location
              zoom={12}
            />
          </LoadScript>

       </div>


      <div className="details">
    
        <div className="progressbar ">
          <ul>
            <li className="detail1">
              <h2>Ranking:</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number"> #3 </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
           </svg>
            </div>
          </li>


          <li className="detail2">
            <h2>Cost for Nomad:</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number"> 600$  </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
           </svg>
           </div>
          </li>


          <li>
          <h2>WiFi:</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number"> 20Mbps  </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
           </svg>
           </div>
          </li>

          <li>
          <h2>Fun:</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number"> 3/5  </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
           </svg>
           </div>
          </li>

          <li>
          <h2>Air Quality(AQI):</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number"> 120  </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
           </svg>
           </div>
          </li>

          <li>
          <h2>Safety:</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number"> 4/5  </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
           </svg>
           </div>
          </li>

          <li>
          <h2>Electricity:</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number"> 4/5  </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
           </svg>
           </div>
          </li>

          <li>
          <h2>NightLife:</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number"> 5/5  </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
           </svg>
           </div>
          </li>

          <li>
          <h2>Place for WFH:</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number"> 5/5  </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
           </svg>
           </div>
          </li>

          <li>
          <h2>AVG Trip Time:</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number"> 4days  </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
           </svg>
           </div>
          </li>

          <li>
          <h2>Safe for Women:</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number"> 4/5  </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
           </svg>
           </div>
          </li>

          <li>
          <h2>Climate:</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number"> Warm  </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
           </svg>
           </div>
          </li>

          <li>
          <h2>Medical:</h2>
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="number"> 5/5  </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" stroke-linecap="round" />
           </svg>
           </div>
          </li>
          </ul>
        </div>
        </div>
      </div> 
    

    </div>

  
 


  );
}

export default DestinationCardDetails;
