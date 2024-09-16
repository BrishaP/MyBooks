import pool from './backend/database/db.js'; // Adjust the path as needed

async function seedData() {
  try {
    await pool.query(`
      INSERT INTO books (title, author, genre, rating, start_date, end_date, favorite) VALUES
      ('Book 1', 'Author 1', 'Genre 1', 4, '2023-01-01', '2023-01-10', true),
      ('Book 2', 'Author 2', 'Genre 2', 5, '2023-02-01', '2023-02-10', false),
      ('Book 3', 'Author 3', 'Genre 3', 3, '2023-03-01', '2023-03-10', true);
    `);
    console.log('Data seeded successfully');
  } catch (err) {
    console.error('Error seeding data:', err);
  } finally {
    await pool.end();
  }
}

seedData();