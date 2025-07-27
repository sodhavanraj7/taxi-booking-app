 
import React from "react";
import { useNavigate } from "react-router-dom";

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/book", { state: { car } }); 
  };

  return (
    <div className="card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>{car.description}</p>
      <p>Price: ₹{car.price}/day</p>
      <button onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default CarCard;
