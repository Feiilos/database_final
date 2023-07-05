const db = require("../utils/database");

const testimonials = class Testimonials {  
    constructor(id, name, job, talk) {    
        this.id = id;    
        this.name = name;    
        this.job = job;    
        this.talk = talk;    
    }  

 // CREATE  
 static create(req, res) {    
    return db.execute(      
        'INSERT INTO testimonials (name, job, talk) VALUES (?, ?, ?)',      
        [req.body.name, req.body.job, req.body.talk]);  
}    

// READ
 static fetchAll() {    
    return db.execute("SELECT * FROM testimonials");  
 }

 static findById(id) {    
    return db.execute('SELECT * FROM testimonials where id = ?', [id]);  
 }

// Update  
 static updateById(req, res) {    
    const id = req.body.id;    
    const name = req.body.name;     
    const job = req.body.job;
    const talk = req.body.talk;
    console.log('updateById()', id, name, job, talk);    
    return db.execute(      
        'update testimonials set name = ?, job = ? , talk = ? where id =?', [name, job, talk, id]);  
 }

// DELETE  
 static deleteById(id) {    
    return db.execute(
    'DELETE FROM testimonials WHERE id = ?', [id]);  
 }
};

// Testing
// const test = async () => {  
//     console.log(await testimonials.fetchAll());
// };
// test();

module.exports = testimonials;