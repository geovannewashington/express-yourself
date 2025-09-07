// index.js -> the entry point, you might also see server.js or app.js

// In Nodejs, every file is wrapped into an IIFE (Immediately Invoked Function Expression) like this: 
/*
    (function (exports, require, module, __filename, __dirname) {
      // your code here
    })(module.exports, require, module, __filename, __dirname); 
*/ 
// That way -> variables stay scoped to the file, not leaking into global
// Node can inject the helpers (exports, require, module, __filename, __dirname)

// module -> The object representing the current module, the container of our file.
// exports -> A shortcut reference to module.exports
// console.log(exports === module.exports);  // true

// require -> A function that loads other modules. 
// returns whatever the target module assigned to module.exports

// We can export specific properties out of the utils.js' module.exports object using object destructuring

/* const { generateRandomNumber: foo, celciusToFah: bar } = require('./utils'); // Note: no need for the .js extension here

console.log(foo());  // Generates a random number
console.log(bar(0)); // Converts 0 celcius to Fahrenheit, which is 32 */

///////////////////////////////////////////////////////////////////////////////////////////////////
// About object destructuring: 

// 1. key based
/* const obj = { x: 1, y: 2 };
const { x, y } = obj;
console.log(x === obj.x); // true
console.log(y === obj.y); // true */

// 2. You can rename things, kind like 'import as ...'
/* const person = { name: 'Alice', age: 23 };
const { name: firstName, age: years } = person; */

// 3. You can even set defaults

/* const { foo1 = 42, bar1 = "Hello" } = {}; // An empty array, there is neither foo or bar
console.log(foo1, bar1); // 42 Hello */

///////////////////////////////////////////////////////////////////////////////////////////////////
// ES Modules 

// We don't need to use curly braces ('{ }') when importing default stuff
// Note that getPostsLength is not being exported as default
import getPosts, {getPostsLength} from './postController.js'; // Unlike CommonJS, we cannot omit the .js extension here.

console.log(getPosts()); // We should see the array of posts
console.log(`There a total of ${getPostsLength()} posts.`); // There are a total of 3 posts.




