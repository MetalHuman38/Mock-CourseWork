// routes/router.js
import frontendRouter from './frontendRouter.js';
import appMiddleware  from '../../middleware/middleware.js';

import express from 'express';
const router = express.Router();

// Define backend routes here
router.get('/frontendRouter', function (req, res) {
    res.send('This is a frontend route');
  });

export default router;




