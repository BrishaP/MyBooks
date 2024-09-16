// // test-db-connection.js
// import dotenv from 'dotenv';
// import { Pool } from 'pg';

// dotenv.config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Error connecting to the database', err.stack);
//   } else {
//     console.log('Database connected:', res.rows[0]);
//   }
//   pool.end();
// });

// test-db-connection.js
// import dotenv from 'dotenv';
// import pkg from 'pg';

// dotenv.config();
// const { Pool } = pkg;

// // Create a new instance of Pool
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// // Function to test the database connection
// export const testDbConnection = async () => {
//   try {
//     const res = await pool.query('SELECT NOW()');
//     console.log('Database connected:', res.rows[0]);
//     return res.rows[0];
//   } catch (err) {
//     console.error('Error connecting to the database', err.stack);
//     throw err;
//   }
// };

// // Export the pool for use in your application or tests
// export default pool;

// import { expect } from 'chai';
// import { testDbConnection } from './test-db-connection.js';

// describe('Database Connection', () => {
//   it('should connect to the database and return the current time', async () => {
//     const result = await testDbConnection();
//     expect(result).to.have.property('now');
//   });
// });

import { expect } from 'chai';
import pool from '../database/db.js';

describe('Database Connection', () => {
  it('should connect to the database and return the current time', async () => {
    const result = await pool.query('SELECT NOW()');
    expect(result.rows[0]).to.have.property('now');
  });
});