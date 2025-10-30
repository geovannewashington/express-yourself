// server.js - entry point

// ------------------------------------------------------------------------------------------------ 
// app.get('/example', handler) says:
// “Hey Express, whenever someone makes an HTTP GET request to /example, run this handler function.”
// The handler function is often an anonymous arrow function—basically a short, unnamed JavaScript function.

// This works in an event-driven style: the function only runs when that specific event happens 
// (a GET request to that route).

// The “client” making the request could be:
// A web browser (most common)
// A CLI tool like curl or httpie
// Another server or application calling your API
// A mobile app sending HTTP requests

// Inside the handler, you write your business logic: reading parameters, querying databases, processing data, 
// and deciding what response to send.

// req contains all the info the client sent.
// res provides methods to send a response back, like res.send(), res.json(), res.status(), and more.
// ------------------------------------------------------------------------------------------------ 

// CommonJS
const express = require('express'); 
const path = require('node:path');
const PORT = process.env.PORT || 8000; // Fallback to 8000

const app = express();

// Serving static files
// --
// Why is it for? It tells Express: Hey, if someone requests a file that exists in this folder, 
// just send it directly. No need to run any route logic. This way we don't have to create routes 
// for every file.
// --
// app.use(express.static(path.join(__dirname, 'public')));
// Now we can load the files that are in public directory:
// http://localhost:8000/index.html
// http://localhost:8000/about.html

// By default, Express will automatically serve index.html if the request is for a folder 
// (e.g., http://localhost:8000/ serves index.html without needing the full name).
// Other files (like about.html) need the full name in the URL

// Fake Hardcoded Database
let posts = [
    {
        id: 1,
        title: 'Post One'
    },
    {
        id: 2,
        title: 'Post Two'
    },
    {
        id: 3,
        title: 'Post Three'
    },
];

// Get all posts
app.get('/api/posts', (req, res) => {
    
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.json(posts.slice(0, limit));
    } 
    return res.json(posts);
});

// Get specific post filtered by id
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id); 
    // Note that req.params returns an object with every single param, by default they're strings
    // That's why we're converting the id to integer. So we can strictly compare it with the posts ids.
    res.json(posts.filter(post => post.id === id));
    
    // if 'id' doesn't exist we could treat it with a 404 page or something...
});

app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) });
// -> Assuming the '.env' file is woring: Server running on port 8080
