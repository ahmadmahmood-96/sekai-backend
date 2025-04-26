const express = require("express");
const companyController = require("../controllers/insuranceCompanyController");
const router = express.Router();

// For adding insurance companies
router.post("/companies", companyController.createCompany);

// For viewing all insurance companies
router.get("/all-companies", companyController.getAllCompanies);

// For viewing insurance company with given ID
router.get("/company/:id", companyController.getCompany);

// For updating insurance company with given ID
router.patch("/company/:id", companyController.updateCompany);

// For deleting insurance company with given ID
router.delete("/company/:id", companyController.deleteCompany);

module.exports = router;
