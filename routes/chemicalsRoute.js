const express = require("express");
const router = express.Router();
const {getChemicals, addChemical, updateChemical, deleteChemical} = require('../controllers/chemicalsCont');
router.route("/").get(getChemicals).post(addChemical);
router.route('/:id').patch(updateChemical).delete(deleteChemical);

module.exports = router;
