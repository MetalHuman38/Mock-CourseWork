// frontend/index.js

import express from 'express';
import ip from 'ip';
import path from 'path'; // Import the path module to resolve file paths
import pug from 'pug'; // Import Pug module
import { fileURLToPath } from 'url'; // Import the fileURLToPath function from the url module
import frontend from '../app.js';


const router = express.Router();

const frontendRouter = express();


// Define frontend routes here
frontendRouter.get('/', (req, res) => {

  // Resolve the path to the compiled Pug/HTML file
  const viewsDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'views'); // Assuming index.pug is in frontend/views directoryhtml is the compiled file
  // Compile the Pug file
  const pugFilePath = path.join(viewsDir, 'index.pug'); // Correctly specify the path to the Pug file

  const compiledFunction = pug.compileFile(pugFilePath);

  const html = compiledFunction();

  res.send(html);
});


// Start the server
const port = process.env.PORT || 3000;
frontendRouter.listen(port, () => console.log(`Server is running on port ${ip.address()}:${port}`));

export default router;