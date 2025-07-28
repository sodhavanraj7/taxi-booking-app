 const express = require('express');
const router = express.Router();
const { getTaxis, addTaxi } = require('../controllers/taxiController');

 
router.get('/', getTaxis);
 
router.post('/', addTaxi);

module.exports = router;
