const mongoose = require("mongoose");
const alloySchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Default Alloy",
  },
  details: {
    type: Object,
    // required: true,
  },
});

module.exports = mongoose.model("Alloy", alloySchema, "alloy");
// const test = {
//   details: {
//     width: 32,
//     weight: 800,
//     thicklen: { 0.6: 2.5, 0.31: 5, 0.25: 6, 0.2: 7.5 },
//   },
// };
