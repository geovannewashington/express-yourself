# Custom Error Handling in Express.js

Express includes a built-in default error handler. When a route is not matched, it responds with an
HTML page like:

```plaintext
Cannot <method> <route>
```

accompanied by a 404 Not Found status.

Error handling in Express works through dedicated middleware.

## Defining an Error Handler Middleware

An error-handling middleware function is identified by having four parameters:
`(err, req, res, next)`
The err parameter contains the error object passed to next().

## When the Error Handler Is Triggered

An error handler runs when:

- Any middleware or route handler encounters an error and calls next(err).
- A thrown exception inside an async handler is not caught (if using Express 5+ or express-async-errors).

It's good practice to include the next parameter in handlers, even if not used, so you can pass errors
down the middleware chain when needed.

## Summary of HTTP Status Codes Used

- 400 Bad Request — Use when the client fails to provide required data.
- 404 Not Found — Use when a requested resource does not exist.
- 500 Internal Server Error — General, unexpected server-side error.

## Useful cURL Trick

We can use the -w | --write-out option to format the output and see the http status code
e.g.:

```bash
curl "http://localhost/8000/api/posts/" -x " status code: %{htt_code\n}"
```
