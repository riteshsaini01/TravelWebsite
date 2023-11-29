import React from 'react';
import { Link } from 'react-router-dom';
//import './Cards.scss'; 
import Navbar from "../Navbar/Navbar.jsx";  

const Cards = ({ destination }) => {
  return (
    
    <div className="card" data-aos='fade-up'>
        <div>
        <Navbar/>
        </div>
      <Link to={`/destination/${destination.id}`}>
        <img src={destination.img} alt='Destination Image' />
      </Link>
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
  );
};

export default Cards;
