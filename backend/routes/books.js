// backend/routes/books.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book'); // Assuming you have a Book model

router.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;