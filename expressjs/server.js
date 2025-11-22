// server.js - entry point

// ES Modules
const PORT = process.env.PORT || 8000; // Fallback to 8000
import express from 'express';
import path from 'node:path';
import router from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';

const app = express();

// Body parser middleware
// Reminder: app.use() is how you set middlwares in express
app.use(express.json()); // -> to handle raw json data
app.use(express.urlencoded()); // -> to handle urlencoded data

// Logger middleware
app.use(logger); // Since we're applying it before all the routes, it's application level

// Routes
app.use('/api/posts', router);

// Error Handler (should go below the routes)
app.use(errorHandler);

app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) });
// -> Assuming the '.env' file is woring: Server running on port 8080
