// helpers.js

import fs from 'fs'; // fs stands for file system

export function send(res, statuscode, content, type = 'text/html') {
    res.writeHead(statuscode, { 'Content-Type': type });
    res.end(content);
}

export function sendFile(res, filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            send(res, 500, 'Internal Server Error', 'text/plain');
            return;
        }
        send(res, 200, data);        
    });
}
