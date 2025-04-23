const express = require("express");
const carController = require("../controllers/carController");
const router = express.Router();

// For adding cars
router.post("/cars", carController.createCar);

// For viewing all cars
router.get("/cars", carController.getAllCars);

// For viewing car with given ID
router.get("/car:id", carController.getCar);

module.exports = router;
