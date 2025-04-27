// models/patientt.js
const mongoose = require("mongoose");

const  clientSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    contactNumber: { type: String },
    address: { type: String },
    medicalHistory: { type: String },
    enrolledPrograms: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Program" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Client", clientSchema);
