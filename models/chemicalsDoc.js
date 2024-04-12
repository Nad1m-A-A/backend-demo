const mongoose = require("mongoose");

const chemicalsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  threshold: {
    type: Number,
    default: 0,
  },
});

chemicalsSchema.index({ name: 1 }, { unique: true });

module.exports = mongoose.model("Chemical", chemicalsSchema);
