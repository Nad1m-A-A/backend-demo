const express = require("express");
const router = express.Router();
const {getShapes, addShape, getShape, updateShape, deleteShape} = require('../controllers/shapesCont');
router.route("/").get(getShapes).post(addShape);
router.route('/:id').get(getShape).patch(updateShape).delete(deleteShape);

module.exports = router;
