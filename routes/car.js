const express = require("express");
const carController = require("../controllers/carController");
const router = express.Router();

// For adding cars
router.post("/cars", carController.createCar);

// For viewing all cars
router.get("/all-cars", carController.getAllCars);

// For viewing car with given ID
router.get("/car/:id", carController.getCar);

// For updating car with given ID
router.patch("/car/:id", carController.updateCar);

// For deleting car with given ID
router.delete("/car/:id", carController.deleteCar);

module.exports = router;
