const express = require("express");
const router = express.Router();
const {
  initializeOrUpdatePassCode,
  getPassCode,
} = require("../controllers/passCodeCont");
router.route("/").get(getPassCode).post(initializeOrUpdatePassCode);

module.exports = router;
