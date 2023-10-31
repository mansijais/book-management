const express = require('express');
const router = express.Router();
const Book = require('../book/models');
const mongoose = require('mongoose');

// Create/add a new book
router.post('/add', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a list of all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Get details of a specific book by ID
router.get('/:id', async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid book ID' });
    }

    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    next(error);
  }
});

// Update a book's details
router.put('/:id', async (req, res, next) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ error: 'Invalid book ID' });
    }
    const updatedBookData = req.body; // Assuming you're sending updated book data in the request body
    // Find the book by ID and update it
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      updatedBookData,
      { new: true } 
    );

    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    next(error);
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  const book = await Book.findByIdAndRemove(req.params.id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.json(book);
});

module.exports = router;
