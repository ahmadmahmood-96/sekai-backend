const mongoose = require("mongoose");

// Enum for Gear Types
const gearTypes = ["Auto", "Manual", "Column"];

// Enum for Car Types
const carTypes = ["Petrol", "Diesel", "Electric"];

const carSchema = new mongoose.Schema(
  {
    make: {
      type: String,
      required: [true, "Car make is required"],
      trim: true,
    },
    model: {
      type: String,
      required: [true, "Car model is required"],
      trim: true,
    },
    manufacturingYear: {
      type: Number,
      required: [true, "Manufacturing year is required"],
      min: [1900, "Year must be 1900 or later"],
    },
    engineCapacity: {
      type: String,
      required: [true, "Engine capacity is required"],
      trim: true,
    },
    chasisNo: {
      type: String,
      required: [true, "Chassis number is required"],
      trim: true,
      unique: true,
    },
    engineNo: {
      type: String,
      required: [true, "Engine number is required"],
      trim: true,
      unique: true,
    },
    regNo: {
      type: String,
      required: [true, "Registration number is required"],
      trim: true,
      unique: true,
    },
    gearType: {
      type: String,
      required: [true, "Gear type is required"],
      enum: {
        values: gearTypes,
        message: "Gear type must be one of: " + gearTypes.join(", "),
      },
    },
    carType: {
      type: String,
      required: [true, "Car type is required"],
      enum: {
        values: carTypes,
        message: "Car type must be one of: " + carTypes.join(", "),
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carSchema);
