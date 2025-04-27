// models/Program.js
const mongoose = require("mongoose");

const programSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    duration: { type: String },
    requirements: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Program", programSchema);
