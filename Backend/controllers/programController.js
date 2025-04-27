const Program = require("../models/Program");

exports.createProgram = async (req, res) => {
  try {
    const { name, description, duration, requirements } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Program name is required" });
    }
    const newProgram = new Program({
      name,
      description,
      duration,
      requirements,
    });
    await newProgram.save();
    res.status(201).json(newProgram);
  } catch (error) {
    console.error("Error creating program:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getPrograms = async (req, res) => {
  const programs = await Program.find();
  res.json(programs);
};
