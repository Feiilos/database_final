var express = require("express");
var router = express.Router();

const _aboutController = require('../controllers/_aboutController');

// CREATE
router.post('/_about/create', _aboutController.createAbout);

// READ
router.get('/_about', _aboutController.getabout);
router.get('/_about/:id', _aboutController.getAboutById);
router.get('/_about/details/:id', _aboutController.getDetails);

// UPDATE
router.post('/_about/update', _aboutController.updateAboutById);

// DELETE
router.get('/_about/delete/:id', _aboutController.deleteAboutById);

module.exports = router;