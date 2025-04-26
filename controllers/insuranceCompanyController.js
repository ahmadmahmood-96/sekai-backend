const InsuranceCompany = require("../models/insuranceCompany");

// Get all insurance companies
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await InsuranceCompany.find();
    res.status(200).json({
      status: "success",
      message: "Insurance companies successfully retrieved",
      result: companies,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// Get insurance company by id
exports.getCompany = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: "fail",
        message: "ID is required",
      });
    }

    const company = await InsuranceCompany.findById(id);

    if (!company) {
      return res.status(404).json({
        status: "fail",
        message: "Insurance company not found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Insurance company successfully retrieved",
      result: company,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// Create a new insurance company
exports.createCompany = async (req, res) => {
  try {
    const newCompany = await InsuranceCompany.create(req.body);

    res.status(201).json({
      status: "success",
      message: "Insurance company successfully created",
      result: newCompany,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Update insurance company by id
exports.updateCompany = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: "fail",
        message: "ID is required",
      });
    }

    const updatedCompany = await InsuranceCompany.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedCompany) {
      return res.status(404).json({
        status: "fail",
        message: "Insurance company not found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Insurance company successfully updated",
      result: updatedCompany,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Delete insurance company by id
exports.deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: "fail",
        message: "ID is required",
      });
    }

    const deletedCompany = await InsuranceCompany.findByIdAndDelete(id);

    if (!deletedCompany) {
      return res.status(404).json({
        status: "fail",
        message: "Insurance company not found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Insurance company successfully deleted",
      result: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
