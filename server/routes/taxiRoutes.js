 const express = require('express');
const router = express.Router();
const { getTaxis, addTaxi } = require('../controllers/taxiController');

// Get all taxis
router.get('/', getTaxis);

// Add a new taxi
router.post('/', addTaxi);

module.exports = router;
