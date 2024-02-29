const mongoose = require("mongoose");

const chemicalsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Chemical", chemicalsSchema);
