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
    const postTitle = req.body.title;
    
    if (!postTitle) {
        return res.status(400).json({"msg": "Please include a title"});
        // code 400 is usually a client error, and error with the data the client sent
    }
    const newPost = {
       id : posts.length + 1, // On a real database the id would be set automatically
       title: postTitle
    };

    posts.push(newPost);
    res.status(201).json(posts);
});

// Update post's title
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);
    
    if (!post) { // post doesn't exist
        return res.status(400).json({msg: `A post with the id of ${id} was not found`});
    }

    post.title = req.body.title;
    // If the element found is a complex data type (like an object or an array).
    // It returns a reference, meaning that any changes you do will affect the orignal data structure in-place.
    //
    // It returns undefined (a falsy value) when nothing was matched.
    res.status(200).json(posts);
});

export default router;
