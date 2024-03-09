const express = require("express");
const router = express.Router();
const {
    getCollections,
} = require("../controllers/collectionsCont");
router.route("/").get(getCollections);

module.exports = router;