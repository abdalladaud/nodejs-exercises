import express from 'express';
import books from '../data/books.js';

const router = express.Router();

// GET all books
router.get('/', (req, res) => {
  res.json(books);
});

// GET one book
router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  const book = books.find(book => book.id === id);

  if (!book) {
    return res.status(404).json({
      message: 'Book not found'
    });
  }

  res.json(book);
});

export default router;