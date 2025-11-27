const btn = document.querySelector('#getPosts');
const outputDiv = document.querySelector('#output');
const form = document.querySelector('#add-post-form');

// Get and show posts
async function getPosts() {
    try {
        const url = 'http://localhost:8000/api/posts';
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error('fetch: failed to to fetch posts');
        }

        const posts = await res.json();
        outputDiv.innerHTML = '';

        // Show posts
        for (const post of posts) {
            const postEl = document.createElement('li');            
            postEl.textContent = post.title;
            outputDiv.appendChild(postEl);
        }
    } catch (err) {
        console.error('error: ', err);        
    } 
}

// Create a new post
async function createPost(e) {
    e.preventDefault();
    const formData = new FormData(this); 
    const title = formData.get('title');
    
    try {
        const url = 'http://localhost:8000/api/posts';
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        });

        if (!res.ok) {
            throw new Error('Failed to add post');
        }
        
        const newPost = await res.json();
        
        const postEl = document.createElement('li');
        postEl.textContent = newPost.title;
        outputDiv.appendChild(postEl);
        getPosts();
    } catch (err) {
        console.error('error adding post');        
    }
}

// listeners
btn.addEventListener('click', getPosts);
form.addEventListener('submit', createPost);
