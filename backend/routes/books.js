import express from 'express';
import pool from '../database/db.js';

const router = express.Router();

//GET REQUESTS:

//Getting all the books
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM books');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


//Getting books by unique id
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result= await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    if (result.rows.length=== 0){
      return res.status(404).json({message: 'No books with this id found'});
    }
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//Getting books by title
// router.get('/title/:title', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result= await pool.query('SELECT * FROM books WHERE title = $1', [title]);
//     if (result.rows.length=== 0){
//       return res.status(404).json({message: 'No books with this title  found'});
//     }
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

// // Getting books by title
// router.get('/title/:title', async (req, res) => {
//   try {
//     const { title } = req.params; // Correctly capture the title parameter
//     const result = await pool.query('SELECT * FROM books WHERE title = $1', [title]);
//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: 'No books with this title found' });
//     }
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

router.get('/title/:title', async (req, res) => {
  try {
    const { title } = req.params;
    console.log(`Title parameter: ${title}`); // Log the captured title
    const result = await pool.query('SELECT * FROM books WHERE title = $1', [title]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No books with this title found' });
    }
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//Getting books by author
// router.get('/author/:author', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result= await pool.query('SELECT * FROM books WHERE author = $1', [author]);
//     if (result.rows.length=== 0){
//       return res.status(404).json({message: 'No books by this author found'});
//     }
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

router.get('/author/:author', async (req, res) => {
  try {
    const { author } = req.params;
    console.log(`Author parameter: ${author}`); // Log the captured author
    const result = await pool.query('SELECT * FROM books WHERE author = $1', [author]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No books with this author found' });
    }
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


//Getting books by genre
// router.get('/genre/:genre', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result= await pool.query('SELECT * FROM books WHERE genre = $1', [genre]);
//     if (result.rows.length=== 0){
//       return res.status(404).json({message: 'No books with this genre found'});
//     }
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

router.get('/genre/:genre', async (req, res) => {
  try {
    const { genre } = req.params;
    console.log(`Genre parameter: ${genre}`); // Log the captured author
    const result = await pool.query('SELECT * FROM books WHERE genre = $1', [genre]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No books with this genre found' });
    }
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//Getting books by rating
router.get('/rating/:rating', async (req, res) => {
  try {
    const { rating } = req.params;
    const result= await pool.query('SELECT * FROM books WHERE rating = $1', [rating]);
    if (result.rows.length=== 0){
      return res.status(404).json({message: 'No books with this rating found'});
    }
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//Getting books by start_date
router.get('/start_date/:start_date', async (req, res) => {
  try {
    const { start_date } = req.params;
    const result= await pool.query('SELECT * FROM books WHERE start_date = $1', [start_date]);
    if (result.rows.length=== 0){
      return res.status(404).json({message: 'No books with this start date found'});
    }
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//Getting books by end_date
router.get('/end_date/:end_date', async (req, res) => {
  try {
    const { end_date} = req.params;
    const result= await pool.query('SELECT * FROM books WHERE end_date = $1', [end_date]);
    if (result.rows.length=== 0){
      return res.status(404).json({message: 'No books with this end date found'});
    }
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//SORRY SPELLING IS AMERICAN WITHOUT OU!
//Getting books by favourite
router.get('/favorite/:favorite', async (req, res) => {
  try {
    const { favorite } = req.params;
    const result= await pool.query('SELECT * FROM books WHERE favorite = $1', [favorite]);
    if (result.rows.length=== 0){
      return res.status(404).json({message: 'No favourites found'});
    }
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//POST

//Post a book
// router.post('/', async (req, res) => {
//   try {
//     const queryText='INSERT INTO books (title, author, genre, rating, start_date, end_date, favourite) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING*'
//     const result = await pool.query(queryText, [books.title, books.author, books.genre, books.rating, books.start_date, books.end_date, books.favourite])
//     if (result.rows.length=== 0){
//       return res.status(404).json({message: 'book successfully added'});
//     }
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server Error');
//   }
// });

// Post a book
router.post('/', async (req, res) => {
  try {
    const { title, author, genre, rating, start_date, end_date, favorite } = req.body;
    const queryText = 'INSERT INTO books (title, author, genre, rating, start_date, end_date, favorite) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const result = await pool.query(queryText, [title, author, genre, rating, start_date, end_date, favorite]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Book not added' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// export async function createAlbums(album) {
//   // Query the database to create an resource and return the newly created resource
//   const queryText = "INSERT INTO albums (title, published_date, artist_id) VALUES ($1, $2, $3) RETURNING *"
//   const result = await pool.query(queryText, [album.title, album.published_date, album.artist_id])
//   return result.rows[0];
// }
//DELETE

//Delete books by unique id
router.delete('/id/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM books WHERE id = $1', [id]);
    res.json({ message: 'Book deleted by id successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//Delete books by title
router.delete('/title/:title', async (req, res) => {
  try {
    const { title } = req.params;
    await pool.query('DELETE FROM books WHERE title = $1', [title]);
    res.json({ message: 'Book deleted by title successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

export default router; // Ensure this is a default export

