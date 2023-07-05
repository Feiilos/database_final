const About = require("../models/aboutModel");
const Post = require('../models/postModel');
const Category = require('../models/categoryModel');

// CREATE
exports.createAbout = async (req, res) => {  
    try {    
        console.log('createAbout', req.body);    
        await About.create(req, res).then(([rows]) => {      
            res.redirect('/admabout/_about');    
        });  
    } catch (err) { 
        console.log(err); 
    }
};

//READ
exports.getabout = async (req, res, next) => {  
    let about;
    try {
      await About.fetchAll().then(([rows]) => {    
        about = rows;  
    });
      res.render("_about", { 
        data: about, 
        title: "About" });
    } catch (err) {
        console.log(err);
    }
};

exports.getAboutById = async (req, res) => {  
    let about;  
    try {    
        await About.findById(req.params.id).then(([rows]) => {      
            about = rows;    
        });    
        res.render('_about', { 
          data: about,     
          title: 'About',    
        });  
    } catch (err) {    
        console.log(err);  
    }
};

exports.getDetails = async (req, res, next) => {  
    let about;
    let post;  
    let categories;   
    try {    
        console.log('id', req.params.id);    
        await About.findById(req.params.id).then(([rows]) => {      
            about = rows;      
            console.log('about', JSON.stringify(about));    
        }); 
        await Post.fetchAll().then(([rows]) => {      
            post = rows;      
            // console.log('post', JSON.stringify(post));    
        });       
        await Category.fetchAll().then(([rows]) => {      
            categories = rows;      
            // console.log('category', JSON.stringify(categories));    
        });    
        res.render('details', {      
            data: about,
            post,      
            categories,      
            title: 'About Details',    
        });  
    } catch (err) {    
        console.log(err);  
    }
};

// Update
exports.updateAboutById = async (req, res) => {  
    try {    
        await About.updateById(req, res).then(([rows]) => {      
            res.redirect('/admabout/_about');    
        });  
    } catch (err) {    
        console.log(err);  
    }
};

// DELETE
exports.deleteAboutById = async (req, res) => {  
    try {      
        await About.deleteById(req.params.id).then(([rows]) => {      
            res.redirect('/admabout/_about');    
        });  
    } catch (err) {    
        console.log(err);  
    }
};

