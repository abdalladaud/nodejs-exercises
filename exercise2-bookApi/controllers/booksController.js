import Book from '../models/Book.js';

export const createBook = async (req, res) => {
  try {
    const { title, author, publishedYear, genre } = req.body;

    const book = await Book.create({
      title,
      author,
      publishedYear,
      genre
    });

    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to create book',
      error: error.message
    });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to get books',
      error: error.message
    });
  }
};

export const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to get book',
      error: error.message
    });
  }
};

// updateBook

export const updateBook = async (req, res) => {
  try {
    const { title, author, publishedYear, genre } = req.body;

    const book = await Book.findByIdAndUpdate(
      req.params.id,
      {
        title,
        author,
        publishedYear,
        genre
      },
      {
        new: true,
        runValidators: true
      }
    );

    if (!book) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to update book',
      error: error.message
    });
  }
};

//deleteBook

export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    res.status(200).json({
      message: 'Book deleted successfully',
      book
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to delete book',
      error: error.message
    });
  }
};