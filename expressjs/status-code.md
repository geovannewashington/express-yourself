status-code.md

HTTP status codes tell the client how the request went.
if everthing is OK we usually return 200.

If a resource is not found, we return 404.

Example using Express:

```JavaScript
app.get('/success', (req, res) => {
    res.status(200).send('Operation successfull!');
    // Express methods can be chained.
});
```
