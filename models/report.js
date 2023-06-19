const mongoose = require("mongoose");

// Schema for report
const ReportSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Patient"
  },
  doctor: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Doctor"
  },
  status: {
    type: "String",
    enum: [
      "Admitted",
      "Discharged",
      "Inpatient",
      "Outpatient",
      "Emergency",
      "Intensive Care Unit (ICU)",
      "Observation",
      "Surgery",
      "Pending",
      "Transfer"
  ]
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = mongoose.model("Report", ReportSchema);