// server.js - entry point

// ES Modules
const PORT = process.env.PORT || 8000; // Fallback to 8000
import express from 'express';
import path from 'node:path';
import router from './routes/posts.js';

const app = express();

// Body parser middleware
// Reminder: app.use() is how you set middlwares in express
app.use(express.json()); // -> to handle raw json data
app.use(express.urlencoded()); // -> to handle urlencoded data

// Routes
app.use('/api/posts', router);

app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) });
// -> Assuming the '.env' file is woring: Server running on port 8080
