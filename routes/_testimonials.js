var express = require("express");
var router = express.Router();

const _testimonialsController = require("../controllers/_testimonialsController");

// CREATE
router.post('/_testimonials/create', _testimonialsController.createTestimonials);

// READ
router.get('/_testimonials', _testimonialsController.gettestimonials);
router.get('/_testimonials/:id', _testimonialsController.getTestimonialsById);
router.get('/_testimonials/details/:id', _testimonialsController.getDetails);

// UPDATE
router.post('/_testimonials/update', _testimonialsController.updateTestimonialsById);

// DELETE
router.get('/_testimonials/delete/:id', _testimonialsController.deleteTestimonialsById);

module.exports = router;