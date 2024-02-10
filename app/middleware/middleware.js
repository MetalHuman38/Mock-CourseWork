import express from 'express';

// const app = express(); // Remove this line

function appMiddleware(req, res, next) {
  // Middleware logic goes here
  console.log('Executing appMiddleware');

// Example: Set a custom header
  res.setHeader('X-Custom-Header', 'Hello from appMiddleware');

  // Example: Log the request method and URL
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);

  // Example: Call the next middleware or route handler
  next();
}

// Remove the curly braces and export directly the function
export default appMiddleware;
