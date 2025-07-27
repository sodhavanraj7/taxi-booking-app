const mongoose = require('mongoose');

const taxiSchema = new mongoose.Schema({
  driverName: String,
  carModel: String,
  plateNumber: { type: String, unique: true },
  seats: Number,
  pricePerDay: Number,
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Taxi', taxiSchema);
