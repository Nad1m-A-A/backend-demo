const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = () => {
  try {
    mongoose.connect(process.env.URI_MONGOOSE);
    console.log('connected to the database');
  } catch (error) {
    console.log(error); //? ask GPT how to send that error to the frontend
  }
};
module.exports = connectDB;
