const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// For adding users
router.post("/users", userController.addUser);

module.exports = router;
