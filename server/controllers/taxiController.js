const Taxi = require('../models/Taxi');

// Get all taxis
exports.getTaxis = async (req, res) => {
  try {
    const taxis = await Taxi.find();
    res.json(taxis);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch taxis' });
  }
};

// Add a new taxi
exports.addTaxi = async (req, res) => {
  try {
    const { driverName, carModel, plateNumber, seats, pricePerDay } = req.body;
    const newTaxi = new Taxi({ driverName, carModel, plateNumber, seats, pricePerDay });
    await newTaxi.save();
    res.json({ message: 'Taxi added successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Error adding taxi' });
  }
};
