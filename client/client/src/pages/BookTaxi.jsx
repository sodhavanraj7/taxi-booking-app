 
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function BookTaxi() {
  const location = useLocation();
  const car = location.state;  

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [pickupPlace, setPickupPlace] = useState("");
  const [dropPlace, setDropPlace] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    if (!pickupDate || !returnDate || !pickupPlace || !dropPlace) {
      alert("Please fill all fields!");
      return;
    }
    alert(
      `Booking Confirmed for ${car?.name || "Taxi"}\nFrom: ${pickupDate}\nTo: ${returnDate}\nPickup: ${pickupPlace}\nDrop: ${dropPlace}`
    );
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Book {car?.name || "Taxi"}
      </h2>
      {car?.image && (
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-40 object-cover rounded mb-4"
        />
      )}
      <form className="space-y-4" onSubmit={handleBooking}>
        <div>
          <label className="block mb-1 font-medium">Pickup Place</label>
          <input
            type="text"
            value={pickupPlace}
            onChange={(e) => setPickupPlace(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter pickup location"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Drop Place</label>
          <input
            type="text"
            value={dropPlace}
            onChange={(e) => setDropPlace(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter drop location"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Pickup Date</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Return Date</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="border p-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}


