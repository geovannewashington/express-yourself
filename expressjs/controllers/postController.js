// Fake Hardcoded Database
const posts = [
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

class PostController {
    // @ desc Get all posts
    // @ route GET /api/posts
    static getPosts(req, res, next) {
        const limit = parseInt(req.query.limit);

        if (!isNaN(limit) && limit > 0) {
            return res.status(200).json(posts.slice(0, limit));
        } 
        return res.status(200).json(posts);
    }

    // @ desc Get a single post
    // @ route GET /api/posts/:id
    static getPost(req, res, next) {
        // Note that req.params returns an object with every single param, by default they're strings
        // That's why we're converting the id to integer. So we can strictly compare it with the posts ids.
        const id = parseInt(req.params.id); 
        const post = posts.find(post => post.id === id);

        // if 'id' doesn't exist we could treat it with a 404 page or something...
        if (!post) {
            const err = new Error(`not found: unable to find a post with the id of ${id}`);
            err.status = 404; // not found
            return next(err);
        }
        return res.status(200).json(post);
    }

    // @ desc  Create a post
    // @ route POST /api/posts
    static createPost(req, res, next) {
        const postTitle = req.body.title;
         
        if (!postTitle) {
            const err = new Error(`bad request: plase include a title`);
            err.status = 400;
            return next(err);
        }
        const newPost = {
           id : parseInt(req.body.id) || posts.length + 1, 
           title: postTitle
        };

        posts.push(newPost);
        res.status(201).json(posts);
    }

    // @ desc  Update a post
    // @ route PUT /api/posts:id
    static updatePost(req, res, next) {
        const id = parseInt(req.params.id);
        const post = posts.find(post => post.id === id);
        
        if (!post) { // post doesn't exist
            const err = new Error(`nout found: unable to found a post with the id of ${id}`);
            err.status = 404;
            return next(err);
        }

        post.title = req.body.title;
        // If the element found is a complex data type (like an object or an array).
        // It returns a reference, meaning that any changes you do will affect the orignal data structure in-place.
        //
        // It returns undefined (a falsy value) when nothing was matched.
        res.status(200).json(posts);
    }
    
    // @ desc  Delete a post
    // @ route DELETE /api/posts/:id
    static deletePost(req, res, next) {
        const id = parseInt(req.params.id);
        const post = posts.find(post => post.id === id);
        
        if (!post) { // post doesn't exist (cannot delete what doesn't exist)
            const err = new Error(`not found: unable to find a post with the id of ${id}`);
            err.status = 404;
            return next(err);
        }
        const index = posts.indexOf(post); 
        posts.splice(index, 1);
        res.status(200).json(posts);
    }
}

export default PostController;
