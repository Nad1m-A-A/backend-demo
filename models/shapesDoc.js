const mongoose = require("mongoose");
const shapesSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  type: {
    type: String,
  },
  unit: {
    type: String,
    default: "mm",
  },
  width: {
    type: Number,
  },
  length: {
    type: Number,
  },
  thickness: {
    type: Number,
  },
});
shapesSchema.eachPath((path, schemaType) => {
  if (!schemaType.options.default) {
    schemaType.required(true);
  }
});
shapesSchema.index({ name: 1 }, { unique: true });

module.exports = mongoose.model("Shape", shapesSchema);
