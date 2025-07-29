 /*
import React, { useState } from "react";
import "./Booking.css";
const Booking = () => {
  const [pickupPlace, setPickupPlace] = useState("");
  const [dropPlace, setDropPlace] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    if (!pickupPlace || !dropPlace || !pickupDate || !returnDate) {
      alert("Please fill in all fields!");
      return;
    }
    alert(
      `Booking Confirmed!\nPickup: ${pickupPlace}\nDrop: ${dropPlace}\nFrom: ${pickupDate}\nTo: ${returnDate}`
    );
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Book Your Taxi</h2>
      <p>Select your car and book a ride now!</p>

      <form onSubmit={handleBooking} style={{ marginTop: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Pickup Location:</label>
          <input
            type="text"
            value={pickupPlace}
            onChange={(e) => setPickupPlace(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            placeholder="Enter pickup location"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Drop Location:</label>
          <input
            type="text"
            value={dropPlace}
            onChange={(e) => setDropPlace(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            placeholder="Enter drop location"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Pickup Date:</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Return Date:</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking; */


 /*import React, { useState } from "react";
import axios from "axios";
import "./Booking.css";

const Booking = () => {
  const [pickupPlace, setPickupPlace] = useState("");
  const [dropPlace, setDropPlace] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!pickupPlace || !dropPlace || !pickupDate || !returnDate) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      const response = await axios.post("https://taxi-booking-backend.onrender.com/api/bookings", {
        pickupPlace,
        dropPlace,
        pickupDate,
        returnDate,
      });

      if (response.status === 201 || response.status === 200) {
        alert("✅ Booking successful!");
        setPickupPlace("");
        setDropPlace("");
        setPickupDate("");
        setReturnDate("");
      } else {
        alert("❌ Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("❌ Error while booking. Please try again later.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Book Your Taxi</h2>
      <p>Select your car and book a ride now!</p>

      <form onSubmit={handleBooking} style={{ marginTop: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Pickup Location:</label>
          <input
            type="text"
            value={pickupPlace}
            onChange={(e) => setPickupPlace(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            placeholder="Enter pickup location"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Drop Location:</label>
          <input
            type="text"
            value={dropPlace}
            onChange={(e) => setDropPlace(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            placeholder="Enter drop location"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Pickup Date:</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Return Date:</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;*/ 

 import React, { useState } from "react";
import API from "../api"; // 👈 Make sure the path is correct based on your folder structure
import "./Booking.css";

const Booking = () => {
  const [pickupPlace, setPickupPlace] = useState("");
  const [dropPlace, setDropPlace] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!pickupPlace || !dropPlace || !pickupDate || !returnDate) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      // For booking
      const response = await API.post("/bookings", {
        pickupPlace,
        dropPlace,
        pickupDate,
        returnDate,
      });

      if (response.status === 201 || response.status === 200) {
        alert("✅ Booking successful!");
        setPickupPlace("");
        setDropPlace("");
        setPickupDate("");
        setReturnDate("");
      } else {
        alert("❌ Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("❌ Error while booking. Please try again later.");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Book Your Taxi</h2>
      <p>Select your car and book a ride now!</p>

      <form onSubmit={handleBooking} style={{ marginTop: "1rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Pickup Location:</label>
          <input
            type="text"
            value={pickupPlace}
            onChange={(e) => setPickupPlace(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            placeholder="Enter pickup location"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Drop Location:</label>
          <input
            type="text"
            value={dropPlace}
            onChange={(e) => setDropPlace(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            placeholder="Enter drop location"
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Pickup Date:</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Return Date:</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 15px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;

