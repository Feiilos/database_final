var express = require("express");
var router = express.Router();

const aboutController = require("../../controllers/client/aboutController");
router.get("/", aboutController.getabout);

module.exports = router;