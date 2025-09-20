// fsDemo.js -> quick look into the the fs (file system) node core module.
// import fs, { readFile, readFileSync } from 'fs';
import fs from 'fs/promises';

// The ones that contain the 'Sync' on their names are the Synchronous (blockin) version.
// readFile() - callback

// It takes three arguments: the file path, the character encoder, callback function
// readFile('./test.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// });

// readFileSync() - Synchronous version
// const data = readFileSync('./test.txt', 'utf8')
// console.log(data);

// readFile() - Promise .then()
// fs.readFile('./test.txt', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

// readFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8'); 
        console.log(data);
    } catch (err) {
        console.error('Error reading file:', err.message);     
    }
};

// writeFile()
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello, I am writing to this file'); 
        console.log('[File written to...]');
        // By default this will overwrite whatever is inside the file.
        // That's why we have the fs.appendFile method.
    } catch (err) {
        console.error('Error writing file', err.message);     
    }
};

// appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is the appended text!');
        console.log('[File appended to...]');
    } catch (err) {
        console.error('Error appending file', err.message);     
    }
};

readFile();
writeFile();
appendFile();
