const express = require("express");
const agentController = require("../controllers/insuranceAgentController");
const router = express.Router();

// For adding insurance agents
router.post("/agents", agentController.createAgent);

// For viewing all insurance agents
router.get("/all-agents", agentController.getAllAgents);

// For viewing insurance agent with given ID
router.get("/agent/:id", agentController.getAgent);

// For updating insurance agent with given ID
router.patch("/agent/:id", agentController.updateAgent);

// For deleting insurance agent with given ID
router.delete("/agent/:id", agentController.deleteAgent);

// For getting agents by company ID
router.get("/company-agents/:companyId", agentController.getAgentsByCompany);

module.exports = router;
