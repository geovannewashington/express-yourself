// server.js

import http from 'http';
const PORT = process.env.PORT;
import routes from './routes.js';
import { send, sendFile } from './helpers.js';

const server = http.createServer((req, res) => {
    try {
        if (req.method !== 'GET') { throw new Error('Method not allowed!\n') };        

        if (routes[req.url]) { return sendFile(res, routes[req.url]) };
         
        // Page not found 
        return sendFile(res, routes['404']);

    } catch (err) {
        return send(res, 500, err.message, 'text/plain');
    }    
});

server.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });
