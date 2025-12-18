# Creating and nesting components

React apps are made out of `components`.
`components` are javascript functions that return markup.

e.g.:

```jsx
function myButton() {
  return <button>I'm a button :)</button>;
}
```

## What I understood about useState until now

`useState()` is a `hook`.
It returns an array that we can destruct, the first is the variable
that is going to be assigned whenever we pass to `useState()`, e.g.:(`let [var, varMod] = useState(n)`)
var would be `n` in this case. And varMod is a function that we can use to modify the value of `var`.

Note that components' name must start with an Uppercase letter.
