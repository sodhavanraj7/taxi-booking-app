 
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CarCard.css";

const CarCard = ({ car, index }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/book/${index}`, { state: car }); 
  };

  return (
    <div className="border rounded-lg p-4 shadow text-center">
      <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="text-lg font-bold">{car.name}</h3>
      <p className="text-gray-600">{car.description}</p>
      <p className="text-green-700 font-semibold">₹{car.price}/day</p>
      <button
        onClick={handleBookNow}
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800"
      >
        Book Now
      </button>
    </div>
  );
};

export default CarCard;
