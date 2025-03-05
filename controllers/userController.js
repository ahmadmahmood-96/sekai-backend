const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.addUser = async (req, res) => {
  try {
    console.log(req.user);
    const { name, email, phone_number, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({
      email,
    });
    if (existingUser) {
      return res.status(400).json({
        message: "Email is already registered",
      });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      phone_number,
      password: hashedPassword,
      role: role || "salesperson", // Default role if not provided
    });

    await newUser.save();

    res.status(201).json({
      message: "User added up successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An error occurred while signing up",
    });
  }
};

// view all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("_id name email phone_number role");

    res.status(200).json({
      message: "Users retrieved successfully",
      users,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error has occurred",
    });
  }
};
