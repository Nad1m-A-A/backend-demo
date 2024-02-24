const storeNewPassCode = (req, res) => {
  // const { passCode } = req.body;
  console.log(req.body);
  // console.log(`storing ${passCode} in the database`);
  return res.status(200).json(req.body);
};

const getPassCode = (req, res) => {
    //! logic should be => check passCode => if no passCode => initialize passCode with given value => otherwise do nothing
  return res.status(200).json({ passCode: 12345 });
};

module.exports = {
  storeNewPassCode,
  getPassCode,
};
