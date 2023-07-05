var express = require("express");
var router = express.Router();

const testimonialsController = require("../../controllers/client/testimonialsController");
router.get("/", testimonialsController.gettestimonials);

module.exports = router;