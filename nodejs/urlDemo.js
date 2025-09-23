// urlDemo.js -> quick dive into the url core NodeJS module.

// The url module in Node.js is used to parse, construct, and manipulate URLs.
// it allows us to work with URL strings in a structured way, avoiding manual string operations. 

import { URL, URLSearchParams } from 'node:url';

// 1. Using the URL class

const urlString = 'https://example.com:8080/path/page?name=alice&age=25#section1';
const myURL = new URL(urlString); // creates an object based on the passed url string.
/*
URL {
  href: 'https://example.com:8080/path/page?name=alice&age=25#section1',
  origin: 'https://example.com:8080',
  protocol: 'https:',
  username: '',
  password: '',
  host: 'example.com:8080',
  hostname: 'example.com',
  port: '8080',
  pathname: '/path/page',
  search: '?name=alice&age=25',
  searchParams: URLSearchParams { 'name' => 'alice', 'age' => '25' },
  hash: '#section1'
}
*/

// We can modify parts of the URL: 
myURL.pathname = '/new-path';
myURL.searchParams.append('city', 'NY');

// console.log(myURL.toString());
// https://example.com:8080/new-path?name=alice&age=25&city=NY#section1

// 2. Using URLSeachParams
// URLSeachParams is great for handling query strings:

// NOTE: A query (consulta) string is a part of a Uniform Resource Locator (URL) that contains 
// data to be passed to a web application or server.
// A query string begins with a question mark (?) and follows the main path of the URL. 
// After the question mark, it consists of one or more key-value pairs, where each pair is 
// separated by an ampersand (&).
// Example: https://www.example.com/products?category=electronics&sort=price_asc

const params = new URLSearchParams('name=alice&age=25');
// console.log(params.get('name')); // alice
params.set('age', 26);
params.append('city', 'NY');

// console.log(params.toString()); // name=alice&age=26&city=NY

// We can also iterate over the parameters:
for (const [key, value] of params) {
    // console.log(key, value);
    // name alice 
    // age 26 
    // city NY 
}

// 3. Pratical use cases
// Parsing incoming URLs in a server:

/*
import http from 'http';
import { URL } from 'url';

const server = http.createServer((req, res) => {
  const reqUrl = new URL(req.url, `http://${req.headers.host}`);
  console.log(reqUrl.pathname, reqUrl.searchParams.get('name'));
  res.end('OK');
});

server.listen(3000);
*/

// NOTE: note that the URL constructor requires an absolute URL (one with a protocol like http:// or https://) 
// if you pass it a relative URL (like /path/page?query=1), it won't know the full context unless you also give 
// a base.

const relative = '/about?name=tposeprogrammer';
const base = 'https://example.com';

const fullURL = new URL(relative, base);
// console.log(fullURL.toString()); // https://example.com/about?name=tposeprogrammer
// const fullURL = new URL(relative); // This creates an error!
