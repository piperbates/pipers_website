let express = require("express");
let path = require("path");
const { getAllBooks, addBook, getBookById, deleteBookById } = require("../models/models");
let router = express.Router();



/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

/* GET add new page. */
router.get("/add", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/add.html"));
});

//get book by id page
router.get("/book/:id", async function (req, res) {
  const id = req.params.id;
  res.sendFile(path.join(__dirname, "../public/book.html"));
})

// //get book by author page
// router.get("/author/:id", async function (req, res) {
//   const id = req.params.id;
//   res.sendFile(path.join(__dirname, "../public/author.html"));
// })

//get table
router.get("/library", async function (req, res) {
  console.log("The library");
  const arr = await getAllBooks();
  res.json(arr);
})

//get book by id
router.get("/library/:id", async function (req, res) {
  const id = req.params.id;
  const arr = await getBookById(id);
  res.json(arr);
})



//post addBook
router.post("/library", async function (req, res) {
  let { bookTitle, bookAuthor, bookGenre, bookRead, bookSeries, leant } = req.body; //pulls the "title, author, genre and read, leant" out of the request body
  await addBook(bookTitle, bookAuthor, bookGenre, bookRead, bookSeries, leant);
  res.send(`${bookTitle} has been added to the database`);
});




// delete book (Doesn't Work)
router.delete("/library/:id", async function (req, res) {
  console.log("testing index")
  let { deleteID } = req.body
  const id = req.params.id;
  const arr = await deleteBookById(deleteID);
  res.json(arr);
})

module.exports = router;
