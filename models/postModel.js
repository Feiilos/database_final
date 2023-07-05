const db = require('../utils/database');

const Post = class Post {
  constructor(id, title, category, date, article) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.date = date;
    this.article = article;
  }
  // Create

  // Read
  static fetchAll() {
    return db.execute('SELECT * FROM post');
  }

  static findPostById(id) {
    return db.execute('SELECT * FROM post where id = ?', [id]);
  }

  static getCount() {
    return db.execute('SELECT count(*) as count FROM post');
  }

  // Update
  static updateById(req, res) {
    const id = req.body.id;
    const title = req.body.title;
    const category = req.body.category;
    // let date = req.body.date;
    // if (!date) date = new Date();
    const article = req.body.editor1;
    console.log('updateById()', id, title, category, article);
    return db.execute(
      'update post set title = ?, category =?, article = ? where id = ?',
      [title, category, article, id]
    );
  }

  // Delete
};

// Test connection

// const test = async function (req, res) {
//   await Post.fetchAll().then(([rows]) => {
//     console.log(JSON.stringify(rows));
//   });
// };

// const test2 = async function(req, res) {
//   await Post.getCount().then(([rows]) => {
//     console.log(rows[0].count);
//   });
// };

// test();

module.exports = Post;
