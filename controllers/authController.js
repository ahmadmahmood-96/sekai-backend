const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    try {
        const {
            name,
            email,
            phone_number,
            password,
            role
        } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({
            email
        });
        if (existingUser) {
            return res.status(400).json({
                message: "Email is already registered"
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
            message: "User signed up successfully!",
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while signing up",
        });
    }
};

exports.login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        // Check if user exists
        const user = await User.findOne({
            email
        });
        if (!user) {
            return res.status(400).json({
                message: "User does not exist"
            });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }

        // Generate JWT token
        const token = jwt.sign({
            user: user
        }, process.env.SECRET_KEY);

        // Format response
        const response = {
            message: "Login successful!",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
        };

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            message: "An error occurred during login"
        });
    }
};