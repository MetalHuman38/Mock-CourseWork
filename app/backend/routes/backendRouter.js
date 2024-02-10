

import express from 'express';
const router = express.Router();

const backendRouter = express.Router();

backendRouter.get('/', (req, res) => {
  res.send('This is a backend route');
});

export default router;

