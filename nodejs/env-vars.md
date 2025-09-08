# A little bit more on env variables and NodeJS

When you start a Node.js program, it inherits the environmnet variables of the shell (zsh in my case)
that launched it.

Try this:

```bash
$ export foo=bar // this env variable only lives in the current terminal session

$ node
$ console.log(process.env.foo); -> 'bar'
```

environmnet variables are always string, even numbers or booleans get converted to strings

```JavaScript
console.log(typeof process.env.PORT); // "string"
console.log(process.env.PORT === 3000); // false
console.log(process.env.PORT === "3000"); // true
```
