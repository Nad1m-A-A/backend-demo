const mongoose = require("mongoose");
const ordersSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "no name",
  },
  details: {
    type: Object,
    required: true,
  },
  production: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("Order", ordersSchema);
