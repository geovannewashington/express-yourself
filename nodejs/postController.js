// postController.js

// Hardcoded fake data-base of posts

const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
    { id: 3, title: 'Third Post' },
];

const getPosts = () => posts;

// Even tho we have a default export, we can still export and import other stuff
export const getPostsLength = () => posts.length; // 2 

export default getPosts;
