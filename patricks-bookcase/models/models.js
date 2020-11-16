const { query } = require("../db/index");

//get all books:
async function getAllBooks() {
  let res = await query(`SELECT * FROM library`);
  return res.rows;
}

// add book
async function addBook(title, author, genre, read, series = "", leant = "") {
  let res = await query(
    "INSERT INTO library (title, author, genre, read, series, leant) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;",
    [title, author, genre, read, series, leant]
  );
}

//getBookById
async function getBookById(id) {
  let res = await query(`SELECT * FROM library WHERE id = $1`, [id]);
  let result = res.rows;
  return result;
}

//deleteBookById (BROKEN)
async function deleteBookById(deleteid) {
  let res = await query(`DELETE FROM library WHERE id = $1`, [deleteid]);
  let result = res.rows;
  console.log(res.rows);
  return result;
}


// getBookBySeries
// async function getBooksBySeries(series){
//   let res = await query('SELECT * FROM library WHERE series LIKE $1', [series]);
//   return res;
// }

//get book by author
////To do this I will need another author table :(

// async function getBooksByAuthor(author){
//   let res = await query('SELECT * FROM library WHERE author LIKE $1', [author]);
//   return res;
// }
//get books by read

//get books by leant

module.exports = {
  getAllBooks,
  addBook,
  deleteBookById,
  getBookById,
};
