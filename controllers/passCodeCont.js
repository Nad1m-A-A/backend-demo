const passCodeDoc = require("../models/passCodeDoc");
const asyncWrapper = require("../utils/asyncWrapper");
require("dotenv").config();
const initializeOrUpdatePassCode = async (req, res) => {
  try {
    let passCode = await passCodeDoc.findOne({});

    //$ If body.passCode wasn't sent, then it is an initial app run.
    if (req.body.passCode) {
      const newPassCode = await passCodeDoc.findOneAndUpdate(
        {},
        { passCode: req.body.passCode },
        { new: true, runValidators: true } //X why the validator is not running?
      );
      return res.status(200).json(newPassCode);
    }

    //$ It is an initial app run so there won't be a passCode in the database
    if (!passCode) {
      await passCodeDoc.create({ passCode: process.env.PASS_CODE });
    }
    //$ Update passCode on updating an env variable
    if (passCode.passCode !== process.env.PASS_CODE) {
      passCode = await passCodeDoc.findOneAndUpdate(
        {},
        { passCode: process.env.PASS_CODE },
        { new: true }
      );
    }
    return res.status(200).json(passCode);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

// const getPassCode = async (req, res) => {
//   try {
//     const passCode = await passCodeDoc.findOne({});
//     return res.status(200).json(passCode);
//   } catch (error) {
//     return res.status(500).json({ error });
//   }
// };

const validatePassCode = asyncWrapper(async (req, res) => {
  const { userInput } = req.body;
  const { passCode } = await passCodeDoc.findOne({});
  const isValid = userInput === passCode;
  return res.status(200).json({isValid});
});

module.exports = { initializeOrUpdatePassCode, validatePassCode };
