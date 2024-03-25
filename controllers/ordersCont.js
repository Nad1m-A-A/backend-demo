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

const getOrder = asyncWrapper(async (req, res) => {
  return res.status(200).json(await ordersDoc.findById(req.params.id));
});

const deleteOrder = asyncWrapper(async (req, res, next) => {
  try {
    await ordersDoc.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      success: true,
      message: `1 order was deleted!`,
    });
  } catch (error) {
    next(error);
  }
});

const updateOrder = asyncWrapper(async (req, res, next) => {
  const { name, ...details } = req.body;
  const orderToUpdate = await ordersDoc.findByIdAndUpdate(
    req.params.id,
    { name, details },
    { new: true }
  );
  if (!orderToUpdate)
    return next(createCustomError("Order to update was not found", 404));
  return res.status(200).json({
    success: true,
    message: `${orderToUpdate.name} was updated!`,
  });
});

const updateProduction = asyncWrapper(async (req, res, next) => {
  try {
    const { ...production } = req.body;
    const orderToUpdate = await ordersDoc.findByIdAndUpdate(
      req.params.id,
      { production },
      { new: true }
    );
    if (!orderToUpdate)
      return next(createCustomError("Order to update was not found", 404));
    return res.status(200).json({
      success: true,
      message: `${orderToUpdate.name} was updated!`,
    });
  } catch (error) {
    console.log(error);
    // return res.status(500).json(error);
  }
});

module.exports = {
  getOrders,
  getOrder,
  addOrder,
  deleteOrder,
  updateOrder,
  updateProduction,
};
