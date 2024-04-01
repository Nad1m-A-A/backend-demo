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
  const { shName, shType, shUnit, shWidth, shLength, shThickness } =
    await shapesDoc.findById(req.params.id);
  const { name, type, unit, width, length, thickness } = req.body;
  const updatedShape = await shapesDoc.findByIdAndUpdate(
    req.params.id,
    {
      name: name || shName,
      type: type || shType,
      unit: unit || shUnit,
      width: width || shWidth,
      length: length || shLength,
      thickness: thickness || shThickness,
    },
    { new: true }
  );
  if (!updatedShape)
    return next(createCustomError("Shape to update was not found", 404));
  return res.status(200).json({
    success: true,
    message: `${updatedShape.name} was updated!`,
  });
});

const deleteShape = asyncWrapper(async (req, res, next) => {
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
