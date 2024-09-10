// server.js
// When you have a frontend application (e.g., React, Angular, Vue) running on one domain (e.g., http://localhost:3000) and a backend API running on another domain (e.g., http://localhost:3001), the browser's same-origin policy will block the frontend from making requests to the backend. CORS middleware allows you to configure your server to accept requests from different origins.

const express = require('express');
const pool = require('./db');
// const cors = require('cors'); // Import the CORS package
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
// app.use(cors()); // Enable CORS for all routes

// Simple endpoint to test server
app.get('/test', (req, res) => {
  res.send('Server is working');
});

// Endpoint to get all books
app.get('/books', async (req, res) => {
  try {
    console.log('Received request for /books');
    const result = await pool.query('SELECT * FROM books');
    console.log('Query executed successfully');
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).send('Server Error');
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err.stack);
    res.status(500).send('Something broke!');
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});