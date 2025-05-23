const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router.get("/companies", companyController.getCompanies);

module.exports = router;
