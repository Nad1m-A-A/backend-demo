const express = require("express");
const router = express.Router();
const {
  storeNewPassCode,
  getPassCode,
} = require("../controllers/passCodeCont");
router.route("/").get(getPassCode).post(storeNewPassCode);

module.exports = router;
