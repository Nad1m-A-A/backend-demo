const express = require("express");
const router = express.Router();
const {getShapes, addShape, updateShape, deleteShape} = require('../controllers/shapesCont');
router.route("/").get(getShapes).post(addShape);
router.route('/:id').patch(updateShape).delete(deleteShape);

module.exports = router;
