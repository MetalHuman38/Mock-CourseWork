// Initialize the server and define the routes
import express from 'express';
import ip from 'ip';
import env from 'dotenv';
import appMiddleware from './middleware/middleware.js';
import router from './routes/router.js';
import backendRouter from './backend/routes/backendRouter.js';
import frontendRouter from './frontend/routes/frontendRouter.js';
import test from './tests/test.js';


const app = express();

env.config();

app.use(express.json());


// Define a test route
app.get('../tests/test', (req, res) => {
  res.send('Test route is working!'); // Send a simple response for testing
});

// Use the router
app.use(router);

// Use the middleware function
app.use(appMiddleware);

// Define route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Send a simple response
});

// Use the routes
app.use('.../backend', backendRouter);
app.use('.../frontend', frontendRouter); // Use '/frontend' for frontend routes
app.use('.../tests', test);

// Start the server function
export function startServer() {
  const port = process.env.PORT || 3000;
  return new Promise((resolve, reject) => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      resolve();
    }).on('error', err => reject(err));
  });
}

// Stop the server function
export function stopServer() {
  return new Promise((resolve, reject) => {
    app.close(err => {
      if (err) {
        reject(err);
      } else {
        console.log('Server stopped');
        resolve();
      }
    });
  });
}

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${ip.address()}:${port}`));

export default app;