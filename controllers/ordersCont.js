const ordersDoc = require("../models/ordersDoc");
const asyncWrapper = require("../utils/asyncWrapper");

const getOrders = asyncWrapper(async (req, res) => {
  return res.status(200).json(await ordersDoc.find({}));
});

const addOrder = asyncWrapper(async (req, res, next) => {
  try {
    await ordersDoc.create(req.body);
    return res.status(200).json({
      success: true,
      message: `1 order was created!`,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = {
  getOrders,
  addOrder,
};
