// server.js - entry point

// CommonJS
const express = require('express'); 
const path = require('node:path');
const PORT = process.env.PORT || 8000; // Fallback to 8000
const router = require('./routes/posts');

const app = express();

// Routes
app.use('/api/posts', router);

app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) });
// -> Assuming the '.env' file is woring: Server running on port 8080
