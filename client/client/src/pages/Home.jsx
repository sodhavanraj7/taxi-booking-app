 

import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./Home.css";

const cars = [
  {
    name: "Rolls Royce",
    image: "/images/car1.jpg",
    desc: "Spacious 2-seater with AC",
    price: "₹1500/day",
  },
  {
    name: "G-Wagon",
    image: "/images/car2.jpg",
    desc: "Comfortable 4-seater",
    price: "₹1000/day",
  },
  {
    name: "Lamborghini",
    image: "/images/car3.jpg",
    desc: "Fast 2-seater luxury car",
    price: "₹2000/day",
  }
];

const Home = () => {
  const navigate = useNavigate();  
  const handleBook = (car) => {
    navigate("/booking", { state: car });  
  };

  return (
    <div className="home-container">
      <h2>Available Taxis</h2>
      <div className="card-container">
        {cars.map((car, index) => (
          <div className="car-card" key={index}>
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>{car.desc}</p>
            <p>{car.price}</p>
            <button onClick={() => handleBook(car)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
