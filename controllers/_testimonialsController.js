const Testimonials = require("../models/testimonialsModel");

// CREATE
exports.createTestimonials = async (req, res) => {  
  try {    
      console.log('createTestimonials', req.body);    
      await Testimonials.create(req, res).then(([rows]) => {      
          res.redirect('/admtestimonials/_testimonials');    
      });  
  } catch (err) { 
      console.log(err); 
  }
};

//READ
exports.gettestimonials = async (req, res, next) => {  
    let testimonials;
    try {
      await Testimonials.fetchAll().then(([rows]) => {    
        testimonials = rows;  
    });
      res.render("_testimonials", { 
        data: testimonials, 
        title: "Testimonials" });
    } catch (err) {
        console.log(err);
    }
};

exports.getTestimonialsById = async (req, res) => {  
  let testimonials;  
  try {    
      await Testimonials.findById(req.params.id).then(([rows]) => {      
          testimonials = rows;    
      });    
      res.render('_testimonials', { 
        data: testimonials,     
        title: 'Tesstimonials',    
      });  
  } catch (err) {    
      console.log(err);  
  }
};

exports.getDetails = async (req, res, next) => {  
    let testimonials; 
    try {    
        console.log('id', req.params.id);    
        await Testimonials.findById(req.params.id).then(([rows]) => {      
            testimonials = rows;      
            console.log('testimonials', JSON.stringify(testimonials));    
        });   
        res.render('details_2', {      
            data: testimonials,     
            title: 'Testimonials Details',    
        });  
    } catch (err) {    
        console.log(err);  
    }
};

// Update
exports.updateTestimonialsById = async (req, res) => {  
    try {    
        await Testimonials.updateById(req, res).then(([rows]) => {      
            res.redirect('/admtestimonials/_testimonials');    
        });  
    } catch (err) {    
        console.log(err);  
    }
};

// DELETE
exports.deleteTestimonialsById = async (req, res) => {  
    try {      
      await Testimonials.deleteById(req.params.id).then(([rows]) => {      
          res.redirect('/admtestimonials/_testimonials');    
      });  
    } catch (err) {    
      console.log(err);  
    }
};