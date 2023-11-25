import React from 'react'
import "./Home.scss";

//Imported Assets
import Video from '../../Assets/video.mp4';
import image1 from '../../Assets/image1.jpg';
import image2 from '../../Assets/image2.jpg';
import image3 from '../../Assets/image3.jpg';
import image4 from '../../Assets/image4.jpg';

//Imported icons
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {
  return (
    <div className='Home'>
   <div className="videoBg">
    <video src={Video} autoPlay loop muted></video>/  </div>

  <div className="sectionText">
    <h1>Unlock Your Travel Dreams With us!</h1>
    <p>
      Discover the world's most adventurous nature,
      life is so short for a trip.
    </p>
    <button className='btn flex'>Get Started<FaArrowRight className="icon">
      </FaArrowRight>
      </button>
  </div>

  <div className="popularPlaces">
    <div className="content">
      <h3>Popular Places</h3>
      <div className='images flex'>
        <img src= {image1} alt="Destination Images"/>
        <img src= {image2} alt="Destination Images"/>
        <img src= {image3} alt="Destination Images"/>
        <img src= {image4} alt="Destination Images"/>
      </div>

    </div>
  </div>
</div>
  )
}

export default Home