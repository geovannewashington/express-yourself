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
console.log(exports === module.exports);  // true

// require -> A function that loads other modules. 
// returns whatever the target module assigned to module.exports

// We can export specific properties out of the utils.js' module.exports object using object destructuring
const { generateRandomNumber: foo, celciusToFah: bar } = require('./utils'); // Note: no need for the .js extension here

console.log(foo());  // Generates a random number
console.log(bar(0)); // Converts 0 celcius to Fahrenheit, which is 32
