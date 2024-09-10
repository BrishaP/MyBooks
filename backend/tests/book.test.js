// backend/tests/books.test.js
const request = require('supertest');
const app = require('../app'); // Assuming your Express app is exported from app.js

describe('GET /books', () => {
  it('should return a list of books', async () => {
    const response = await request(app).get('/books');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });
});