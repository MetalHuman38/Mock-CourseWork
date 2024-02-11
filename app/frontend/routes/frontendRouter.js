// routes/router.js
import frontendRouter from './frontendRouter.js';
import appMiddleware from '../../middleware/middleware.js';


import express from 'express';
const router = express.Router();

const app = express();

// Define route to render index.pug template
app.get('.../views', (req, res) => {
  res.render('index'); // Render the index.pug template
});


// Define backend routes here
router.get('/frontendRouter', function (req, res) {
    res.send('This is a frontend route');
});



export default router;




