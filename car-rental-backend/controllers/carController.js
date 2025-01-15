const Car = require('../models/car');

const getAllCars = async (req, res) => {
    const cars = await Car.find();
    res.json(cars);
};

const addCar = async (req, res) => {
    const car = await Car.create(req.body);
    res.status(201).json(car);
};

const rentCar = async (req, res) => {
    const { id } = req.params;
    const car = await Car.findById(id);
    if (car && car.available) {
        car.available = false;
        await car.save();
        res.json({ message: 'Car Rented Successfully' });
    } else {
        res.status(400).json({ error: 'Car not available' });
    }
};

module.exports = { getAllCars, addCar, rentCar };
