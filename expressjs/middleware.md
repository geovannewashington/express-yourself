## About middlewares in expreess

A middleware is function that has access to the req and res objects in the request-responde cycle of
the application. Is a function that sneaks itself into the call stack.

They can be both at application level (using app.use(middleware_name)) or route level, by passing them
to the route as a second argument, e.g:

```JavaScript
router.get('/foo/route', <middleware_name>, req, res) {
    // do something...
}
```

So whenever a GET request is made to /foo/route, the middleware is going to run first.
Note that if we don't call next inside a middleware, the request never ends
