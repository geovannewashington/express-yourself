import express from 'express';
import PostController from '../controllers/postController.js';

const router = express.Router();

// Get all posts
router.get('/', PostController.getPosts);

// Get specific post filtered by id
router.get('/:id', PostController.getPost);

// Create a new post
router.post('/', PostController.createPost);

// Update post's title
router.put('/:id', PostController.updatePost);

// Delete Post
router.delete('/:id', PostController.deletePost);

export default router;
