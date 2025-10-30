query-strings.md

We can use query strings to do things such as filters, pagination and etc...
Those query strings are available for us throught the req.query object.
It returns an object and we can access each query string with req.params.<key>

Let's say the client makes a GET Request to /api/posts/?limit=2:sort=price
We can access that limit number the following way:
`req.params` would return the following object:

```JavaScript
{
    limit: '3',
    sort: 'price'
}
```

```JavaScript
const limit = parseInt(req.query.limit);
const sortMethod = req.query.sort;
// Business Logic here..
// .
// .
// .

```
