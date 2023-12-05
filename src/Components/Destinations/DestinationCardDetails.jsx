import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
//import {data} from './CardData.jsx';
import './Card.scss';

function DestinationCardDetails() {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <div className="Card">
      <h2>Destination Details for ID: {id}</h2>
      </div>
    </div>
  );
}

export default DestinationCardDetails;
