req-params.md

A client URL's request might contain dynamic optional paths.
e.g.: `/api/posts` is a valid route, but the client might also make a request, say `/api/posts/2`
That is, they're looking for a specific post based on its id.

We can define a bussiness logic such as we iterate over the 'database' in order to find a post that
matches the passed id.

More about the .filter method:

It's an iterative array method (like .forEach for instance) that creates a new array containing
only the elements from the original array that satisfy a specific condition. It's not in-place, that is,
it doesn't modify the original array.
Edge case: it returns an empty array if the condition wasn't satified or any of the original arr elements

Example:

```JavaScript
const numbers = [1, 2, 3, 4, 5, 6];

// Filter for even numbers
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]
console.log(numbers);     // Output: [1, 2, 3, 4, 5, 6] (original array remains unchanged)
```
