# Custom Error Handling in ExpressJS

By default Express already comes with a default error handler, it sends us back an HTML page saying:
'Cannot <method> <route>' with a status code of 404 (not found).

The error handler is another piece of middleware.

## Defining an Error Handler Middleware

It's distinguished by having four arguments: `err, req, res, next`
Where the err argument holds the error object that was passed to next();

## Conditions for firing an error handler middleware:

When a regular middleware or route handler encounters an error and pass it to next().

Note that it's good practice to always insert a next function argument in the handler.
