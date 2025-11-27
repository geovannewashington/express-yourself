const btn = document.querySelector('#getPosts');
const outputDiv = document.querySelector('#output');

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

// listeners
btn.addEventListener('click', getPosts);
