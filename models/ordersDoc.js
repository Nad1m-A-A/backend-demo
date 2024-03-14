const mongoose = require("mongoose");
const ordersSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    details: {
        type: Object,
        required: true,
    }
});

module.exports = mongoose.model("Order", ordersSchema)