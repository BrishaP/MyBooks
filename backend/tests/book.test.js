// const { expect } = require('chai');
// const request = require('supertest');
// const express = require('express');
// const booksRouter = require('../routes/books');
// const pool = require('../database/db');

// const app = express();
// app.use(express.json());
// app.use('/books', booksRouter);

// describe('GET /books', () => {
//   before(async () => {
//     await pool.query(
//       'INSERT INTO books (title, author, genre, rating, start_date, end_date, favorite) VALUES ($1, $2, $3, $4, $5, $6, $7)',
//       ['Test Book', 'Test Author', 'Test Genre', 5, '2023-01-01', '2023-01-10', true]
//     );
//   });

//   after(async () => {
//     await pool.query('DELETE FROM books WHERE title = $1', ['Test Book']);
//     await pool.end();
//   });

//   it('should return a list of books', async () => {
//     const res = await request(app).get('/books');
//     expect(res.statusCode).to.equal(200);
//     expect(res.body).to.be.an('array');
//     expect(res.body).to.have.lengthOf(1);
//     expect(res.body[0].title).to.equal('Test Book');
//   });
// });

import { expect } from 'chai';
import request from 'supertest';
import express from 'express';
import booksRouter from '../routes/books.js';
import pool from '../database/db.js';

const app = express();
app.use(express.json());
app.use('/books', booksRouter);

describe('GET /books', () => {
  before(async () => {
    await pool.query(
      'INSERT INTO books (title, author, genre, rating, start_date, end_date, favorite) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      ['Test Book', 'Test Author', 'Test Genre', 5, '2023-01-01', '2023-01-10', true]
    );
  });

  after(async () => {
    await pool.query('DELETE FROM books WHERE title = $1', ['Test Book']);
    await pool.end();
  });

  it('should return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).to.equal(200);
    expect(res.body).to.be.an('array');
    expect(res.body).to.have.lengthOf(1);
    expect(res.body[0].title).to.equal('Test Book');
  });
});
