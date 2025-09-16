// midlewares/index.js

import { createServer } from 'http';
const PORT = process.env.PORT;

// Array to store middleware functions
const middlewares = [];

// Function to register middlewares
function use(mw) {
    middlewares.push(mw);
}

// Function to run middlewares sequentially 
function runMiddlewares(req, res, i = 0) {
    if (i < middlewares.length) {
        middlewares[i](req, res, () => runMiddlewares(req, res, i + 1));
    }
}

// ----------------- 
// Register middlewares 
// ----------------- 

// 1. Loggin middleware 
use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// 2. Hello route middleware
use((req, res, next) => {
    if (req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hello from middleware\n');
    } else {
        next();
    }
});

// 3. 404 middleware (fallback)
use((req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not found\n');
});

// ----------------- 
// Create the server
// ----------------- 
const server = createServer((req, res) => {
    runMiddlewares(req, res);
});

server.listen(PORT, () => { console.log(`Server running at http://localhost:${PORT}`) });
