import React from 'react'
import "./Reviews.scss";

//Imported icons
import {AiFillStar} from "react-icons/ai";

//Imported Images
import image1 from "../../Assets/face1.jpg";
import image2 from "../../Assets/face2.jpg";
import image3 from "../../Assets/face3.jpg";
import image4 from "../../Assets/face4.jpg";
import image5 from "../../Assets/face5.jpg";

const Reviews = () => {
  return (
    <div className='review section container'>
      <div className="secContainer grid">
        <div className="textDiv">
          <span className='redText'>FROM OUR ClIENTS</span>
          <h3>Real Travel History From Our Beloved Clients</h3>
          <p>
            By choosing us as their tour agency,
            cutomers can expect an enriching and
            enjoyable travel experience ,
            filled with unforgettable memories
            that will last a lifetime.
          </p>

          <span className='stars flex'>
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
            <AiFillStar className='icon' />
          </span>
          {<div className="clientsImages flex">
            <img src={image1} alt='client Image' />
            <img src={image2} alt='client Image' />
            <img src={image3} alt='client Image' />
            <img src={image4} alt='client Image' />
           
          </div>}
        </div>
        <div className="imgDiv">
        <img src={image5} alt='Div image' />
        </div>
      </div>
    </div>
  )
}

export default Reviews