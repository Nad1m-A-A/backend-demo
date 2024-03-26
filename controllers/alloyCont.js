const alloyDoc = require("../models/alloyDoc");
const asyncWrapper = require("../utils/asyncWrapper");
const { createCustomError } = require("../errors/customError");

const createAlloy = asyncWrapper(async (req, res, next) => {
  try {
    await alloyDoc.create(req.body);
    return res.status(200).json({
      success: true,
      message: "Default alloy was added successfully!",
    });
  } catch (error) {
    next(error);
  }
});

const getAlloy = asyncWrapper(async (req, res) => {
  return res.status(200).json(await alloyDoc.findOne({}));
});

const updateAlloy = asyncWrapper(async (req, res, next) => {
  const shapeToUpdate = await shapesDoc.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );
  if (!shapeToUpdate)
    return next(createCustomError("Shape to update was not found", 404));
  return res.status(200).json({
    success: true,
    message: `${shapeToUpdate.name} was updated!`,
  });
});

const deleteAlloy = asyncWrapper(async (req, res, next) => {
  console.log(req.params.id);
  const shapeToDelete = await shapesDoc.findByIdAndDelete(req.params.id);
  if (!shapeToDelete)
    return next(createCustomError("Shape was not found", 404));
  return res.status(200).json({
    success: true,
    message: `${shapeToDelete.name} was deleted!`,
  });
});

module.exports = {
  getAlloy,
  createAlloy,
  updateAlloy,
  deleteAlloy,
};
