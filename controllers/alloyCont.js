const alloyDoc = require("../models/alloyDoc");
const asyncWrapper = require("../utils/asyncWrapper");

const createAlloy = asyncWrapper(async (req, res, next) => {
  try {
    console.log(req.body);
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

module.exports = {
  getAlloy,
  createAlloy,
};
