const express = require("express");
const router = express.Router();
const {
  getOrders,
  getOrder,
  addOrder,
  deleteOrder,
  updateOrder,
  updateProduction,
} = require("../controllers/ordersCont");
router.route("/").get(getOrders).post(addOrder);
router.route("/:id").get(getOrder).delete(deleteOrder).patch(updateOrder);
router.route("/:id/production").patch(updateProduction);

module.exports = router;
