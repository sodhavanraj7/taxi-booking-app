const mongoose = require("mongoose");

 
const BookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  car: { type: String, required: true },
  dateFrom: { type: Date, required: true },
  dateTo: { type: Date, required: true },
  pricePerDay: { type: Number, required: true },
});


module.exports = mongoose.model("Booking", BookingSchema);
