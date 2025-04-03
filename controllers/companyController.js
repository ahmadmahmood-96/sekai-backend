const Company = require("../models/company");

exports.getCompanies = async (req, res) => {
  try {
    const companies = await Company.find().select("_id name");

    res.status(200).json({
      message: "Companies retrieved successfully",
      companies,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error has occured",
    });
  }
};