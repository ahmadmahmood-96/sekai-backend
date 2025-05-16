const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// For adding users
router.post("/users", userController.addUser);

// For viewing users
router.get("/users", userController.getUsers);

// For viewing one user
router.get("/user/:id", userController.getUser);

module.exports = router;