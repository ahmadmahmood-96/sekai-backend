const InsuranceAgent = require("../models/insuranceAgent");

// Get all insurance agents
exports.getAllAgents = async (req, res) => {
  try {
    // Populate the insurance company reference to get company details
    const agents = await InsuranceAgent.find().populate(
      "insuranceCompanyId",
      "name"
    );

    res.status(200).json({
      status: "success",
      message: "Insurance agents successfully retrieved",
      result: agents,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// Get insurance agent by id
exports.getAgent = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: "fail",
        message: "ID is required",
      });
    }

    const agent = await InsuranceAgent.findById(id).populate(
      "insuranceCompanyId",
      "name"
    );

    if (!agent) {
      return res.status(404).json({
        status: "fail",
        message: "Insurance agent not found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Insurance agent successfully retrieved",
      result: agent,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// Create a new insurance agent
exports.createAgent = async (req, res) => {
  try {
    const newAgent = await InsuranceAgent.create(req.body);

    // Fetch the created agent with populated company info
    const agent = await InsuranceAgent.findById(newAgent._id).populate(
      "insuranceCompanyId",
      "name"
    );

    res.status(201).json({
      status: "success",
      message: "Insurance agent successfully created",
      result: agent,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Update insurance agent by id
exports.updateAgent = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: "fail",
        message: "ID is required",
      });
    }

    const updatedAgent = await InsuranceAgent.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    }).populate("insuranceCompanyId", "name");

    if (!updatedAgent) {
      return res.status(404).json({
        status: "fail",
        message: "Insurance agent not found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Insurance agent successfully updated",
      result: updatedAgent,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Delete insurance agent by id
exports.deleteAgent = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        status: "fail",
        message: "ID is required",
      });
    }

    const deletedAgent = await InsuranceAgent.findByIdAndDelete(id);

    if (!deletedAgent) {
      return res.status(404).json({
        status: "fail",
        message: "Insurance agent not found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Insurance agent successfully deleted",
      result: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

// Get agents by insurance company
exports.getAgentsByCompany = async (req, res) => {
  try {
    const { companyId } = req.params;

    if (!companyId) {
      return res.status(400).json({
        status: "fail",
        message: "Company ID is required",
      });
    }

    const agents = await InsuranceAgent.find({
      insuranceCompanyId: companyId,
    }).populate("insuranceCompanyId", "name");

    res.status(200).json({
      status: "success",
      message: "Agents successfully retrieved",
      result: agents,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
