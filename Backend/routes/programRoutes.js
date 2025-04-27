const express = require("express");
const router = express.Router();
const programController = require("../controllers/programController");

router.post("/", programController.createProgram);
router.get("/", programController.getPrograms);

module.exports = router;
