// main.js -> quick example of loading/reading files

// fs stands fro filesystem.
// there is fs (syncronous, blocks the program's execution while reading the file)
// and there is 'fs/promises' which provides asyncronous functions, which doesn't block 

// import fs from 'fs'; // Syncronous API 
import fs from 'fs/promises'; // Asyncronous API 

/* try {
    const data = await fs.readFile('foo.txt', 'utf8'); 
    console.log(data);
} catch (err) {
    console.error('Error loading file:', err.message);    
} */

// The other way is using a callback function
/* fs.readFile('foo.txt', 'utf8', (err, data) => {
    if (err) { throw err };    
    console.log(data); 
}); */

// But to keep things more consistent and avoid common issues we normally use 'path'
import url from 'url';
import path from 'path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__filename);
// console.log(__dirname);

try {
    const data = await fs.readFile(path.join(__dirname, 'public', 'bar.txt'), 'utf8'); 
    console.log(data);
} catch (err) {
    console.error('Error loading file:', err.message);    
}

// console.log(data);


