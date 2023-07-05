const db = require("../utils/database");

const about = class About {  
    constructor(id, pid, cid, project, Point) {    
        this.id = id;
        this.pid = pid;
        this.cid = cid;
        this.project = project;    
        this.Point = Point;
    }  

 // CREATE  
 static create(req, res) { 
    return db.execute(      
        'INSERT INTO about (pid, cid, project, Point) VALUES (?, ?, ?, ?)',      
        [req.body.pid, req.body.cid, req.body.project, req.body.Point]);  
}    

// READ
static fetchAll() {    
    return db.execute("SELECT A.id, pid, cid, A.project, A.Point, P.title as post, C.title as category\nFrom `about` as A, post as P, category as C\nWhere A.pid = P.id and A.cid = C.id\n order by A.id "
    );  
}

static findById(id) {    
    return db.execute("SELECT A.id, pid, cid, A.project, A.Point, P.title as post, C.title as category\nFrom `about` as A, post as P, category as C\nWhere A.pid = P.id and A.cid = C.id\n and A.id =?", [id]
    );  
}

 // Update  
 static updateById(req, res) {    
    const id = req.body.id;    
    const pid = req.body.pid;
    const cid = req.body.cid;
    const project = req.body.project;     
    const Point = req.body.Point;  
    console.log('updateById()', id, pid, cid, project, Point);    
    return db.execute(      
        'update about set pid = ?, cid = ?, project = ?, Point = ? where id =?', [pid, cid, project, Point, id]    );  
 }

// DELETE  
 static deleteById(id) {    
    return db.execute(
    'DELETE FROM about WHERE id = ?', [id]);  
 }
};

// Testing
// const test = async () => {  
//     console.log(await about.fetchAll());
// };
// test();

module.exports = about;