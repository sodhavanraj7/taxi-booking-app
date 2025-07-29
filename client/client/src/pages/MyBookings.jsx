 import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MyBookings.css";


const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const userId = localStorage.getItem("userId"); 
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/bookings/${userId}`);
        setBookings(res.data);
      } catch (error) {
        console.error("Failed to fetch bookings", error);
      }
    };

    fetchBookings();
  }, [userId]);

  return (
    <div className="my-bookings">
      <h2>Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              <strong>Taxi:</strong> {booking.taxiName} <br />
              <strong>Date:</strong> {booking.date} <br />
              <strong>Days:</strong> {booking.days} <br />
              <strong>Price:</strong> ₹{booking.totalAmount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;





