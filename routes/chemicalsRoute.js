const express = require("express");
const router = express.Router();
const {getChemicals, addChemical, updateChemical} = require('../controllers/chemicalsCont');
router.route("/").get(getChemicals).post(addChemical);
router.route('/:id').patch(updateChemical)

module.exports = router;
