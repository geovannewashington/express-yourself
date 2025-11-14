// posts.js

import express from 'express';
const router = express.Router();

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
router.get('/', (req, res) => {
    
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    } 
    return res.status(200).json(posts);
});

// Get specific post filtered by id
router.get('/:id', (req, res) => {
    // Note that req.params returns an object with every single param, by default they're strings
    // That's why we're converting the id to integer. So we can strictly compare it with the posts ids.
    const id = parseInt(req.params.id); 
    const post = posts.find(post => post.id === id);

    // if 'id' doesn't exist we could treat it with a 404 page or something...
    if (!post) {
        return res.status(404).json({ msg: `A post with the id of ${id} was not found` });
    }
    return res.status(200).json(post);
});

// Create a new post
router.post('/', (req, res) => {
    console.log(req.body); 
    // Note that if we don't use specific request parsers in the server.js file (use the middlewares)
    // this will log undefined
    res.status(201).json(posts);
    // code 201 means the request was successfull AND something was created.
});

export default router;
