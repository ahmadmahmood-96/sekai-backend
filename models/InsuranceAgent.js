const mongoose = require("mongoose");

const insuranceAgentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Agent name is required"],
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    insuranceCompanyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InsuranceCompany",
      required: [true, "Insurance company ID is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("InsuranceAgent", insuranceAgentSchema);
