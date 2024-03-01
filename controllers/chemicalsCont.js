const chemicalsDoc = require("../models/chemicalsDoc");
const getChemicals = async (req, res) => {
  try {
    const chemicals = await chemicalsDoc.find({});
    return res.status(200).json(chemicals);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const addChemical = async (req, res) => {
  const chemicalName = req.body.name;
  try {
    await chemicalsDoc.create({
      name: chemicalName,
    });
    return res.status(200).json({
      success: true,
      message: `${chemicalName} was added successfully!`,
    });
  } catch (error) {
    if (error.code === 11000)
      return res.status(500).json({
        success: false,
        message: `Duplicate key. ${chemicalName} already exists`,
      });
    return res.status(500).json({ error: error.message });
  }
};

const updateChemical = async (req, res) => {
  try {
    const chemicalToUpdate = await chemicalsDoc.findByIdAndUpdate(
      req.params.id,
      { count: req.body.count },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: `${chemicalToUpdate.name} count was updated!`,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteChemical = async (req, res) => {
  try {
    const chemicalToDelete = await chemicalsDoc.findByIdAndDelete(
      req.params.id
    );
    if (!chemicalToDelete) throw new Error("chemical was not found");
    return res.status(200).json({
      success: true,
      message: `${chemicalToDelete.name} was deleted!`,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getChemicals,
  addChemical,
  updateChemical,
  deleteChemical,
};
