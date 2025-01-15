const express = require('express');
const { getAllCars, addCar, rentCar } = require('../controllers/carController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getAllCars);
router.post('/', authMiddleware, addCar);
router.post('/:id/rent', authMiddleware, rentCar);

module.exports = router;
