const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Create a new pool instance
const pool = new Pool({
  DB_NAME: 'DB_NAME',
  DB_USER: 'USER_NAME',
  DB_PASS: 'DB_PASS',
  DB_HOST: 'db',
  port: 5432, // default PostgreSQL port
});

// Use the pool to query the database
// Test the database connection
pool.connect((err, client, done) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
    done();
  }
});

// Define your API routes here
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
