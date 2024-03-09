const mongoose = require("mongoose");

const asyncWrapper = require("../utils/asyncWrapper");
const { createCustomError } = require("../errors/customError");

const getCollections = asyncWrapper(async (req, res) => {
  const collections = await mongoose.connection.db.listCollections().toArray();
  const collectionNames = collections.map((collection) => collection.name);
  return res.status(200).json(collectionNames);
});

module.exports = {
  getCollections,
};
