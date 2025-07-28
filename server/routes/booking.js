const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

 
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

 
router.get("/:userId", async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.params.userId });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;


