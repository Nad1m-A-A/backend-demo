const express = require("express");
const router = express.Router();
const { initializePassCode } = require("../controllers/passCodeCont");
router.route("/").post(initializePassCode);

module.exports = router;
