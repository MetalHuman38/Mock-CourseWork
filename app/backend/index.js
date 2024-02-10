
import express from 'express';
import ip from 'ip';
import backend from '../app.js';

const router = express.Router();

// Define frontend routes here
router.get('/', (req, res) => {
  res.send('This is a frontend route');
});
// Start the server
const port = process.env.PORT || 8000;
backend.listen(port, () => console.log(`Server is running on port ${ip.address()}:${port}`));

export default router;
