// frontend/index.js

import express from 'express';
import ip from 'ip';
import path from 'path'; // Import the path module to resolve file paths
import pug from 'pug'; // Import Pug module
import dirname from 'path';
import { fileURLToPath } from 'url';


const router = express.Router();

const frontendRouter = express();

// Define frontend routes here
frontendRouter.get('/', (req, res) => {

  // Resolve the path to the compiled Pug/HTML file
  const filePath = fileURLToPath(new URL('./index.pug', import.meta.url)); // Assuming index.pug is in frontend/views directoryhtml is the compiled file
  // Compile the Pug file
  const html = pug.renderFile(filePath);

  res.send(html);
});


// Start the server
const port = process.env.PORT || 3000;
frontendRouter.listen(port, () => console.log(`Server is running on port ${ip.address()}:${port}`));

export default router;