const express = require("express");
const router = express.Router();
const { getAlloy, createAlloy } = require("../controllers/alloyCont");
router.route("/").get(getAlloy).post(createAlloy);

module.exports = router;
