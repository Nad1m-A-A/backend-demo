const chemicalsDoc = require("../models/chemicalsDoc");
const asyncWrapper = require("../utils/asyncWrapper");
const { createCustomError } = require("../errors/customError");

const getChemicals = asyncWrapper(async (req, res) => {
  return res.status(200).json(await chemicalsDoc.find({}));
});

const addChemical = asyncWrapper(async (req, res, next) => {
  const chemicalName = req.body.name;
  console.log(req.body);
  try {
    await chemicalsDoc.create(req.body);
    return res.status(200).json({
      success: true,
      message: `${chemicalName} was added successfully!`,
    });
  } catch (error) {
    if (error.code === 11000)
      return res.status(500).json({
        success: false,
        message: `Duplicate key. ${chemicalName} already exists`,
      });
    else next(error);
  }
});

const updateChemical = asyncWrapper(async (req, res, next) => {
  const { name, count, threshold } = req.body;
  const chemicalToUpdate = await chemicalsDoc.findByIdAndUpdate(
    req.params.id,
    { name, count, threshold },
    { new: true }
  );
  if (!chemicalToUpdate)
    return next(createCustomError("Chemical to update was not found", 404));
  return res.status(200).json({
    success: true,
    message: `${chemicalToUpdate.name} count was updated!`,
  });
});

const deleteChemical = asyncWrapper(async (req, res, next) => {
  const chemicalToDelete = await chemicalsDoc.findByIdAndDelete(req.params.id);
  if (!chemicalToDelete)
    return next(createCustomError("chemical was not found", 404));
  return res.status(200).json({
    success: true,
    message: `${chemicalToDelete.name} was deleted!`,
  });
});

module.exports = {
  getChemicals,
  addChemical,
  updateChemical,
  deleteChemical,
};
