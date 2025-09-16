// server.js

// http is one of Nodej.js built-in core modules. 
// it's kind low-level in the sense that unlike frameworks such as Expressjs, we control headers
// status codes, response bodies manually.
// its frequently wrapped in higher-level frameworks (like Express) for convinience.
const PORT = process.env.PORT; 

import http from 'http';
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // About res.statusCode and res.setHeader 
    
    // What happens if we omit those? 
    // res.statusCode defaults to 200 -> ok
    // res.setHeader defaults to undefined -> the browser (or curl) guesses the content type. 
    // But it's good practice to set the header so the client knows exactly what type of content is being sent.
    /* res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); */

    // Note that req and res are objects related to the response cycle 

    // A text responde the the client (browser or the terminal, using curl)
    // res.write('Hello, World!\n'); 
    /* res.write('<h1>')
    res.write('Hello '); // res.write -> writes chunks of data to the response but doesn't finish it.
    res.write('World'); 
    res.write('!');  // writes optional final data and ends the response.
    res.end('</h1>'); */
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // About res.end 

    // The HTTP protocol expects the server to send three main things before the client considers the response complete:
    // 1. Status line 
    // 2. Headers 
    // 3. Body -> The actual content
    // Finally, there’s a signal that the body is done. This is exactly what res.end() does: it tells the client:
    // I’m finished sending all my data; you can render or process it now.”
    
    // So omitting res.end keeps the connection open, expecting more data 
    // This can make the browser hand, the spinning loading icon never stops, and curl never returns

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // The res.writeHead method lets us set the status code and headers at once 
    // res.writeHead(/* 3 digits status code */, /* { 'Content-Type': 'Whatevere' } */)
    
    /* res.writeHead(500, { 'Content-Type': 'application/json' }); // expects a json 
    res.end(JSON.stringify({ 
        message: 'Server Errror',
        description: 'Something went wrong!'
    })); */

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // Simple Routing:

    /* try {
        if (req.method === 'GET') {
            // Do something...
            if (req.url === '/') {
                res.writeHead(200, { 'Contet-Type': 'text/html' });
                res.end('<h1>Homepage</h1>\n');
            } else if (req.url === '/about') {
                res.writeHead(200, { 'Contet-Type': 'text/html' });
                res.end('<h1>About</h1>\n');
            } else {
                res.writeHead(404, { 'Contet-Type': 'text/html' });
                res.end('<h1>Not Found :(</h1>\n');
            }
        } else {
            throw new Error('Method not allowed!');
        } 
    } catch (err) {
        res.writeHead(500, { 'Contet-Type': 'text/plain' });
        res.end(err.message + '\n');
    } */

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // Anothery way of handling routes 
    /* const routes = {
        '/': '<h1>Homepage</h1>\n',
        '/about': '<h1>About</h1>\n',
        '404': '<h1>Page Not Found!</h1>\n'
    };

    try {
        // Only allow GET requests        
        if (req.method !== 'GET') {
            throw new Error('Method not alloed!');
        }

        // All possible pages
        if (routes[req.url]) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            return res.end(routes[req.url]);
        } 
        
        // Page not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end(routes['404']);
    } catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(err.message);
    } */
    
    try {
        if (req.method === 'GET') {
            // Do something...
            let filePath; 
            if (req.url === '/') {
                filePath = path.join(__dirname, 'public', 'index.html'); 
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, 'public', 'about.html'); 
            } 
            else {
                throw new Error('Not Found!'); 
            }
            
            const data = await fs.readFile(filePath);
            res.writeHead(200, { 'Content-Type': 'text/html'} );
            res.end(data);
        } else {
            throw new Error('Method not allowed!');
        } 

    } catch (err) {
        res.writeHead(500, { 'Contet-Type': 'text/plain' });
        res.end(err.message + '\n');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});
