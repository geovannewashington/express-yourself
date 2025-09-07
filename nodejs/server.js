// server.js

// http is one of Nodej.js built-in core modules. 
// it's kind low-level in the sense that unlike frameworks such as Expressjs, we control headers
// status codes, response bodies manually.
// its frequently wrapped in higher-level frameworks (like Express) for convinience.

import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // About res.statusCode and res.setHeader 
    
    // What happens if we omit those? 
    // res.statusCode defaults to 200 -> ok
    // res.setHeader defaults to undefined -> the browser (or curl) guesses the content type. 
    // But it's good practice to set the header so the client knows exactly what type of content is being sent.
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Note that req and res are objects related to the response cycle 

    // A text responde the the client (browser or the terminal, using curl)
    // res.write('Hello, World!\n'); 
    res.write('Hello '); // res.write -> writes chunks of data to the response but doesn't finish it.
    res.write('World'); 
    res.end('!\n');  // writes optional final data and ends the response.

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
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Server running on port 8000
});
