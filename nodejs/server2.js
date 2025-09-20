// server2.js -> A super simple API

import { createServer } from 'http';
const PORT = process.env.PORT;

// Hardcoded fake-database
const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'}
];

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
// Helper Functions (these could go into separate files) 
// ----------------- 

// 1. Route handler for GET /api/users
const getUsersHandler = (req, res) => { res.end(JSON.stringify(users) + '\n') };

// 2. Route handler for GET /api/users:id
const getUserByIdHandler = (req, res) => {
    const id = parseInt(req.url.split('/')[3]);
    const user = users.find((user) => user.id === id);
    
    if (!user) return notFoundHandler(req, res, 'User not found');   

    res.statusCode = 200;
    res.end(JSON.stringify(user) + '\n');
};

// 3. Route handler for POST /api/users -> register a new user into the fake DB (users array)
const createUserHandler = (req, res) => {
    let body = '';
    // Listen for data 
    req.on('data', (chunk) => body += chunk.toString());
    
    
    req.on('end', () => {
        // If no data was passed
        if (!body) return notFoundHandler(req, res, 'No data posted'); 
        
        const newUser = JSON.parse(body); // converting from JSON to normal JS object
        users.push(newUser);
        res.statusCode = 201; // 201 basically means success + something has changed
        res.end(JSON.stringify(newUser) + '\n'); // So it logs the user we just added
    });
};

// 4. Not found handler 
const notFoundHandler = (req, res, msg = 'Route not found') => {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: msg }) + '\n');
};

// ----------------- 
// Register middlewares 
// ----------------- 

// 1. Logger middleware 
use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// 2. JSON middleware
use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// 3. Define handler middleware
use((req, res) => {
    // Query for all users
    if (req.url === '/api/users' && req.method === 'GET') {
        return getUsersHandler(req, res);
    }
    
    // POST new user into the fata DB (users array)
    if (req.url === '/api/users' && req.method === 'POST') {
        return createUserHandler(req, res);
    }

    // Query for a specific user by id    
    if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        return getUserByIdHandler(req, res);
    }

    notFoundHandler(req, res);
});

// ----------------- 
// Create the server
// ----------------- 
const server = createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // allow all origins
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight requests
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }
    
    runMiddlewares(req, res);
});

server.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });

