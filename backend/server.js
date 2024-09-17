import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import booksRouter from './routes/books.js'; // Import the books router

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Simple endpoint to test server
app.get('/test', (req, res) => {
  res.send('Server is working');
});

// Use the books router for /books routes
app.use('/books', booksRouter);


// app.delete('/:id', booksRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});