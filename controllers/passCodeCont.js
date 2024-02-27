const passCodeDoc = require("../models/passCodeDoc");
require("dotenv").config();
const initializePassCode = async (req, res) => {
  try {
    let passCode = await passCodeDoc.findOne({});
    if (!passCode) {
      await passCodeDoc.create({ passCode: process.env.PASS_CODE });
    }
    if (passCode.passCode !== process.env.PASS_CODE) {
      passCode = await passCodeDoc.findOneAndUpdate(
        {},
        { passCode: process.env.PASS_CODE },
        { new: true }
      );
    }
    return res.status(200).json({ passCode });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
module.exports = { initializePassCode };
