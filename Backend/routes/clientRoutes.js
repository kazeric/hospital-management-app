const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

router.post("/", clientController.createClient);
router.get("/", clientController.getClients);
router.get("/search", clientController.searchClients);
router.get("/:clientId", clientController.getClientProfile);
router.post("/:clientId/enroll", clientController.enrollPrograms);

module.exports = router;
