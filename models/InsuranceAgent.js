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
      required: [true, "Phone number is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
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
