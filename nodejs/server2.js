// server2.js -> A super simple API

import { createServer } from 'http';
const PORT = process.env.PORT;

// Hardcoded fake-database
const users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'}
];

const server = createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // allow all origins
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight requests
    if (req.method === "OPTIONS") {
      res.writeHead(204);
      return res.end();
    }

    try {
        if (req.url === '/api/users' && req.method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(users) + '\n');
        }

        // if req.url matches /api/users/<any-number> essentially handling a req param 
        // which would be much easier using something like Expressjs
        if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
            // Explanation: when using the .split method on a string, it returns an array of characters.
            // Example: req.url.split('/') returns ['', 'api', 'users', '2']
            // So the actual id would be at position 3
            const id = parseInt(req.url.split('/')[3]);
            const user = users.find((user) => user.id === id);
            
            if (!user) { throw new Error('User not found') }; 

            res.writeHead(200, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(user) + '\n');
        }
        
        res.writeHead(404, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ message: 'Route not found :(' }) + '\n');
    } catch (err) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 'message': err.message }) + '\n');
    }

});

server.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });

