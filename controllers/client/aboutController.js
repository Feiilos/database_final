const About = require("../../models/aboutModel");

exports.getabout = async (req, res, next) => {  
    let about;
    try {
      await About.fetchAll().then(([rows]) => {    
        about = rows;  
    });
      res.render("client/about", { 
        data: about, 
        title: "About" });
    } catch (err) {
        console.log(err);
    }
};
