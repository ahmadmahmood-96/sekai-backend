const Car = require("../models/cars");

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json({
      status: "success",
      message: "Cars successfully retrieved",
      result: cars,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "error.message",
    });
  }
};

// Get car by id
exports.getCar = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: "fail",
        message: "ID is required",
      });
    }

    const car = await Car.findById(id);

    res.status(200).json({
      status: "success",
      message: "Car successfully retrieved",
      result: car,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "error.message",
    });
  }
};

// Create a new Car
exports.createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body);

    res.status(201).json({
      status: "success",
      message: "error.message",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
