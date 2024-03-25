const shapesDoc = require("../models/shapesDoc");
const asyncWrapper = require("../utils/asyncWrapper");
const { createCustomError } = require("../errors/customError");

const getShapes = asyncWrapper(async (req, res) => {
  return res.status(200).json(await shapesDoc.find({}));
});

const addShape = asyncWrapper(async (req, res, next) => {
  try {
    await shapesDoc.create(req.body);
    return res.status(200).json({
      success: true,
      message: `${req.body.name} was added successfully!`,
    });
  } catch (error) {
    if (error.code === 11000)
      return res.status(500).json({
        success: false,
        message: `Duplicate key. ${req.body.name} already exists`,
      });
    else next(error);
  }
});

const getShape = asyncWrapper(async (req, res) => {
  return res.status(200).json(await shapesDoc.findById(req.params.id));
});

const updateShape = asyncWrapper(async (req, res, next) => {
  console.log(req.body);
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

const deleteShape = asyncWrapper(async (req, res, next) => {
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
  getShapes,
  addShape,
  getShape,
  updateShape,
  deleteShape,
};
