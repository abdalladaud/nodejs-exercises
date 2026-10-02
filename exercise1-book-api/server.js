import express from 'express';
import booksRouter from './routes/books.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/books', booksRouter);

app.get('/', (req, res) => {
  res.send('Books API is working');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});