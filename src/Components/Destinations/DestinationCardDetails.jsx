import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {data} from './CardData.jsx';
import './Card.scss';

function DestinationCardDetails() {
  const { id } = useParams();

  return (
    <div className="Card">
      <Navbar />
      <h2>Destination Details for ID: {id}</h2>
    </div>
  );
}

export default DestinationCardDetails;
