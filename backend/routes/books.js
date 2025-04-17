const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  addBook,
} = require("../controllers/bookController");

// GET /api/books
router.get("/", getAllBooks);

// GET /api/books/:id
router.get("/:id", getBookById);

// POST /api/books
router.post("/", addBook);

module.exports = router;
