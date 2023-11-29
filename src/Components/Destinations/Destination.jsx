import React,{useEffect} from 'react';
//import { Route, Switch } from 'react-router-dom';
//import Cards from '../Cards/Card.jsx';
import "./Destination.scss";

// Importing icons
import { MdLocationPin } from 'react-icons/md';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { BsFillCalendarDateFill } from 'react-icons/bs'; 
import { BiSearchAlt } from 'react-icons/bi';
import {TiLocation} from 'react-icons/ti'

// Imported images
import image1 from '../../Assets/image1.jpg'
import image2 from '../../Assets/image2.jpg'
import image3 from '../../Assets/image3.jpg'
import image4 from '../../Assets/image4.jpg'
import image5 from '../../Assets/image5.jpg'
import image6 from '../../Assets/image6.jpg'
import image7 from '../../Assets/image7.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Lets create an array that is gonna contain all destinantion data and we loop through
const destination = [
  {
    id: 1,
    img: image1,
    name: 'Jaipur',
    location: 'Rajasthan',
    rating: 4.7,
  },
  {
    id: 2,
    img: image2,
    name: 'Udaipur',
    location: 'Rajasthan',
    rating: 4.2,
  },
  {
    id: 3,
    img: image3,
    name: 'Jaisalmer',
    location: 'Rajasthan',
    rating: 4.3,
  },
  {
    id: 4,
    img: image4,
    name: 'Ooty',
    location: 'TamilNadu',
    rating: 4.8,
  },
  {
    id: 5,
    img: image5,
    name: 'Manali',
    location: 'Himachal Pradesh',
    rating: 4.1,
  },
  {
    id: 6,
    img: image6,
    name: 'Panaji',
    location: 'Goa',
    rating: 4.5,
  },
  {
    id: 7,
    img: image7,
    name: 'Bridge',
    location: 'Mumbai',
    rating: 4.3,
  },
]

const Destination = () => {
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[]);
  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle">
          <span className='redtext' data-aos='fade-up'>Explore Now</span>
          <h3 data-aos='fade-up'>Find Your Dream Destination</h3>
          <p data-aos='fade-up'>
            Fill in the fields below to find the best spot for your next tour.
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex" data-aos='fade-up'>
            <MdLocationPin className='icon'/>
            <input type='text' placeholder='Location'/>
          </div>
          
          <div className="inputField flex" data-aos='fade-up'>
            <BsFillCreditCardFill className='icon'/>
            <input type='text' placeholder='Budget'/>
          </div>
         
          <div className="inputField flex" data-aos='fade-up'>
            <BsFillCalendarDateFill className='icon'/>  {/* Corrected icon */}
            <input type='text' placeholder='Date'/>
          </div>

          <button className='btn flex' data-aos='fade-up'><BiSearchAlt className='icon'/>Search</button>
        </div>
        <div className="secMenu">
          <ul className='flex' data-aos='fade-up'>
            <li className='active'>All</li>
            <li>Recommended</li>
            <li>Beach</li>
            <li>Park</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>

        <div className="destinationContainer grid">
          {destination.map(destination => {
            return(
              <div className="singleDestination" key={destination.id} data-aos='fade-up'>
            <div className="imgDiv" data-aos='fade-up'>
              <img src={destination.img} alt='Destination Image'/>

              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{destination.name}</span>
                  <p className='flex'>
                    <TiLocation className="icon" />
                    {destination.location}
                  </p>
                </div>
                <span className='rating'>{destination.rating}</span>
              </div>
            </div>
          </div>
        
      
   

            )
          })}
    </div> 
    </div>
    </div>
  )
}

export default Destination;
