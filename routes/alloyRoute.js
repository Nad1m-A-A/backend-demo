const express = require("express");
const router = express.Router();
const {
  getAlloy,
  createAlloy,
  updateAlloy,
  deleteAlloy,
} = require("../controllers/alloyCont");
router
  .route("/")
  .get(getAlloy)
  .post(createAlloy)
  .patch(updateAlloy)
  .delete(deleteAlloy);

module.exports = router;
