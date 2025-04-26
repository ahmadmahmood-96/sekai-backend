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

// Update Car by ID
exports.updateCar = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: "fail",
        message: "ID is required",
      });
    }

    const carToUpdate = await Car.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!carToUpdate) {
      return res.status(400).json({
        status: fail,
        message: "Car not found with ID",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Car successfully updated",
      result: carToUpdate,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Delete car by id
exports.deleteCar = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: "fail",
        message: "ID is required",
      });
    }

    const deletedCar = await Car.findByIdAndDelete(id);

    if (!deletedCar) {
      return res.status(404).json({
        status: "fail",
        message: "Car not found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Car successfully deleted",
      result: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
