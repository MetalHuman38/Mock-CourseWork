// routes/router.js
import frontendRouter from './frontendRouter.js';
import appMiddleware from '../../middleware/middleware.js';
import ip from 'ip';


import express from 'express';
const router = express.Router();

const app = express();

// Define route to render index.pug template
app.get('.../views', (req, res) => {
  res.render('index'); // Render the index.pug template
});

app.get('/', (req, res) => {
  res.send('This is a frontend router. It is routed to the main router.');
});

// Define backend routes here
router.get('/frontendRouter', (req, res) => {
    res.send('This is a frontend route');
  });

// Start the server
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Server is running on port ${ip.address()}:${port}`));


export default router;




