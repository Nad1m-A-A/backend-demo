const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = () => {
  try {
    mongoose.connect(process.env.URI_MONGOOSE);
    console.log('connected to the database');
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
