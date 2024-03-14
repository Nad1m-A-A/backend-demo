const express = require("express");
const router = express.Router();
const { getOrders, addOrder } = require("../controllers/ordersCont");
router.route("/").get(getOrders).post(addOrder);

module.exports = router;
