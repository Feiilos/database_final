const Testimonials = require("../../models/testimonialsModel");

exports.gettestimonials = async (req, res, next) => {  
    let testimonials;
    try {
      await Testimonials.fetchAll().then(([rows]) => {    
        testimonials = rows;  
    });
      res.render("client/testimonials", { 
        data: testimonials, 
        title: "Testimonials" });
    } catch (err) {
        console.log(err);
    }
};
