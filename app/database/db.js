import express from 'express';
import { Pool } from 'pg';

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

const { Pool } = require('pg');


// Function to check if the database is available
async function waitForDB() {
  const maxAttempts = 10; // Maximum number of attempts
  const delayMs = 1000; // Delay between attempts in milliseconds

  let attempts = 0;
  while (attempts < maxAttempts) {
    try {
      // Try to connect to the database
      const client = await pool.connect();
      client.release(); // Release the client immediately after connecting
      console.log('Database is available');
      return;
    } catch (error) {
      console.error('Error connecting to database:', error.message);
      attempts++;
      await new Promise(resolve => setTimeout(resolve, delayMs)); // Wait before the next attempt
    }
  }

  console.error('Max attempts reached. Unable to connect to database.');
}

// Call waitForDB function before starting the application
async function startApp() {
  try {
    await waitForDB();
    console.log('Starting the application...');
    // Start your application logic here
  } catch (error) {
    console.error('Error starting application:', error.message);
  }
}

startApp();


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
