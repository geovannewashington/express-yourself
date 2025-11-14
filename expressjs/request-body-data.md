## About URL enconded data:

Is a way to represent form fields as a single text string using the rules of URLs.

1. Format:

```plaintext
key1=value1&key2=value2
```

## Why do we need to set special middlwares to make posts?

Because HTTP request bodies come in different data formats.
Because of its minimal core design, express does not parse them automatically.
Each middleware knows to decode one specific format.

1. `express.json()`
   - Activates a parser for bodies like: Content-Type: application/json
   - Converts raw JSON bytes into a JS object on req.body
2. `express.urlencoded`
   - Activates a parser for bodies like: Content-Type: application/x-www-form-urlencoded
   - Converts form-style strings (`key=value&key2=value2`) into a JS object on req.body

Why two middlewares?

- JSON parsing and URL-encoded parsing are different algorithms
- Wihtout them, req.body would be undefined for those content-types.
