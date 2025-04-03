const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router.post("/companies", companyController.getCompanies);

module.exports = router;