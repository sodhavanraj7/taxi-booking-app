 import React, { useState } from "react";
import axios from "axios"; 
import { useLocation } from "react-router-dom";


const BookTaxi = () => {
  const location = useLocation();
  const { car } = location.state || {};

  if (!car) return <p>No car selected</p>;

  return (
    <div>
      <h2>Book {car.name}</h2>
      <img src={car.image} alt={car.name} width="300" />
      <p>{car.description}</p>
      <p>Price: ₹{car.price}/day</p>

      {/* Add booking form here */}
    </div>
  );
};

export default BookTaxi;


