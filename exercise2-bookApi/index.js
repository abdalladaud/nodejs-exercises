import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import booksRouter from './routes/books.js';

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use('/books', booksRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });