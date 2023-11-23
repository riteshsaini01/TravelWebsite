import React from 'react'
import "./Home.scss";

//Imported Assets
import Video from '../../Assets/video.mp4'

//Imported icons
import {FaArrowRight} from 'react-icons/fa'

const Home = () => {
  return (
    <div className='Home'>
  <div className="videoBg">
    <video src={Video} autoPlay loop muted></video>
  </div>

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
        {/* <img src="" alt=""*/}
        {/* <img src="" alt=""*/}
        {/* <img src="" alt=""*/}
        {/* <img src="" alt=""*/}
      </div>

    </div>
  </div>
</div>
  )
}

export default Home