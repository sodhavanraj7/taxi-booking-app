const Booking = require('../models/Booking');
const Taxi = require('../models/Taxi');

 
exports.createBooking = async (req, res) => {
  try {
    const { userId, taxiId, startDate, endDate } = req.body;

    const taxi = await Taxi.findById(taxiId);
    if (!taxi || !taxi.available) {
      return res.status(404).json({ error: 'Taxi not available' });
    }

    const days = Math.ceil((new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24));
    const totalPrice = days * taxi.pricePerDay;

    const booking = new Booking({ userId, taxiId, startDate, endDate, totalPrice });
    await booking.save();
 
    taxi.available = false;
    await taxi.save();

    res.json({ message: 'Booking successful', booking });
  } catch (err) {
    res.status(400).json({ error: 'Booking failed' });
  }
};
 
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('userId taxiId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};
