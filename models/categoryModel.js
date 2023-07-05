const db = require('../utils/database');

const Category = class Category {
  constructor(id, title, date) {
    this.id = id;
    this.title = title;
    this.date = date;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM category');
  }

  static getCount() {
    return db.execute('SELECT count(*) as count FROM category');
  }
};

// Test connection

// const test = async function(req, res) {
//   await Category.getCount().then(([rows]) => {
//     console.log(rows[0].count);
//   });
// };

// const test2 = async (req, res) => {
//   console.log(await Category.fetchAll());
// };

// test();

module.exports = Category;
