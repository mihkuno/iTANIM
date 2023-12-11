/**
 *
 * handles all the requests and responses of the server
 *
 * req.itanim object that contains the following:
 * - authenticated: boolean
 * - message: string
 * - account: object (contains the id token info)
 * - package: object (contains the route response)
 *
 */

import cors from 'cors';
import multer from 'multer';
import express from 'express';
import { Logger } from './middleware/logger.js';
import { Google } from './middleware/google.js';

// multer allows us to read the file from the request
const Uploaded = multer({ storage: multer.memoryStorage() });

// express app
const App = express();

/**
 * This is a proxy option for the dev server.
 * It will proxy /api from the client to the routes.
 * Handles Cross-Origin Resource Sharing (CORS) errors.
 */
App.use(cors());

/**
 *
 * verify initializes the authenticate middleware and it creates the req.itanim
 * listen reads the output of verify and logs all requests to database
 * authenticate is used by a specific route if it needs to be authenticated
 *
 */
App.use(Google.verify, Logger.listen);

const PORT = 5000;
App.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
