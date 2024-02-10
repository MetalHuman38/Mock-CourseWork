// Import required modules
import express from 'express';
import appMiddleware from '../middleware/middleware.js';

// Create a new router
const router = express.Router();

// Use the middleware function
router.use(appMiddleware);

// Define backend routes here
router.get('/backendRouter', (req, res) => {
  res.send('This is a backend route');
});

// Define frontend routes here
router.get('/frontendRouter', (req, res) => {
  res.send('This is a frontend route');
});

router.get('/test', (req, res) => {
  res.send('Test route is working!');
});




// Export the router
export default router;


