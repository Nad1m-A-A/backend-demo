const express = require("express");
const router = express.Router();
const { initializeOrUpdatePassCode } = require("../controllers/passCodeCont");
router.route("/").post(initializeOrUpdatePassCode);

module.exports = router;
