const mongoose = require("mongoose");
const passCodeSchema = new mongoose.Schema({
    passCode: {
        type: String,
        required: [true, 'a value must be provided for the pass-code'],
    }
})

module.exports = mongoose.model('PassCode', passCodeSchema, 'passCode');
// module.exports = mongoose.model('PassCode', passCodeSchema); //! this way, a collection "passcode"' will be created