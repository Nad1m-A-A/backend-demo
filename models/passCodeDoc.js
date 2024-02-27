const mongoose = require("mongoose");
const passCodeSchema = new mongoose.Schema({
    passCode: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('PassCode', passCodeSchema);