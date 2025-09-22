// pathDemo.js, the path core module...

// importing it...
import path from 'node:path'; // 'node:' is optional, but recomemended for clarity when using core modules.

// Why it’s useful?
// The path module provides utilities for working with file and directory paths in a way that is consistent 
// across operating systems (Windows uses \ while Linux/macOS use /).

// 1. path.join();
// Joins multiple path segments and normalizes them.
const result = path.join("/users", "john", "docs", "file.txt");
// console.log(result); // /users/john/docs/file.txt

// 2. path.resolve();
// resolves paths into an absolute path (starting from the current working directory if necessarry);.
const result1 = path.resolve('docs', 'file.txt');
// console.log(result1); 
// ->  /home/void/dev/projects/active/express-yourself/nodejs/docs/file.txt

// 3. path.basename(p, [ext]);
// Returns the last part of a path (usually the file name).
// console.log(path.basename('/users/john/docs/file.txt'));         // -> file.txt
// console.log(path.basename('/users/john/docs/file.txt', '.txt')); // -> file

//  NOTE: The second argument to this method is an optional ext (extension) string. 
// If provided, and if the filename extracted from the path ends with the specified ext string, 
// that extension will be removed from the returned basename.

// 4. path.dirname(p)
// Returns the directory portion of the path.
// console.log(path.dirname('/users/john/docs/file.txt'));
// users/john/docs

// 5. path.extname(p)
// Returns the file extension (with leading dot)
// console.log(path.extname('/user/john/docs/file.txt')); // -> .txt

const p = '/user/john/docs/file.txt';

// 6. path.parse(p)
// Breaks a path into an object with useful fields.
// console.log(path.parse(p));
/*
    {
      root: '/',
      dir: '/user/john/docs',
      base: 'file.txt',
      ext: '.txt',
      name: 'file'
    }
*/

// 7. path.format(obj)
// The opposite of parse, builds a path from an object.
const myPath = {
    dir: '/users/john/docs',
    base: 'file.txt'
};
// console.log(path.format(myPath)); // -> /users/john/docs/file.txt

// 8. path.normalize(p);
// Fixed redudant slashes and resolves '..' and '.' segments.
// console.log(path.normalize('/users//john/../john/docs'));
// /users/john/docs

// 9. path.sep
// The path separator for the current OS ('/' on POSIX, '\\' on Windows)
// console.log(`Current separator: ${path.sep}`); 

// Since ESM does not provide __dirname or __filename like CommonJS, we usually reconstruct them like this:

import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname); // Absolute directory of the current file

// Note that import.meta is a special object with metadata about the current module.
// import.meta.url is a string containing the full URL of the current module.
// In Node.js, this will usually be a file:// URL pointing to the .js file.










