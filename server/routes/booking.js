const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

/* POST /api/bookings - create a new booking
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking successful", booking });
  } catch (err) {
    console.error("Booking error:", err);
    res.status(500).json({ error: "Booking failed" });
  }
}); */
 
 // Create a booking
 // Create a booking
 // Create a booking
router.post("/", async (req, res) => {
  try {
    const { userId, car, dateFrom, dateTo, pricePerDay } = req.body;

    const newBooking = new Booking({
      userId,
      car,
      dateFrom,
      dateTo,
      pricePerDay,
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking created", booking: newBooking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get bookings by user
router.get("/:userId", async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


