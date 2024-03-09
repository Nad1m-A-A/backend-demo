const express = require("express");
const router = express.Router();
const {
  initializeOrUpdatePassCode,
  getPassCode,
  validatePassCode,
} = require("../controllers/passCodeCont");
router.route("/").post(initializeOrUpdatePassCode);
router.route("/validate").post(validatePassCode);

module.exports = router;
