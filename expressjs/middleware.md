## About middlewares in expreess

A middleware is function that has access to the req and res, and next objects in the request-responde cycle.
It becomes part of the Express pipeline during request handling.

Middlewares can be application-level (using app.use(...)) or route-level by passing them before the final handler:

```JavaScript
router.get('/foo/route', middleware1, middleware2, ... middlewareN, (req, res) => {
    // do something...
})
```

Whenever a GET request is made to /foo/route, the middleware runs before the handler.
If a middleware neither sends a response nor calls next(), the request will never complete.
