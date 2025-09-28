// cryptoDemo.js

import crypto from 'node:crypto';

// crypto provides cryptographic functionality: hashing, HMAC, key generation, encryption/decryption, etc...

// In real world applications you would probably use bcrypt (third-party module) to hash passwords 
// because it handles a lot of things automatically that you would have to do manually with 
// Node's crypto. It’s safer by default, easier to use, and follows industry best practices.

// 1. Hashing a string
// NOTE: You never want to store plain text user passwords in the database for instance.
// so you should always hash it before pushing it into the database, to protect the user.

// What is hashing?
// hashing is a one-way process that creates a fixed-length, irreversible string of characters, 
// making it computationally infeasible to derive the original password from the hash.

// Note that hashing and encryption are fundamentally different, why?
// Hashed data cannot be restored to its original form, whereas encrypted data can be decrypted 
// with its private key

// Why are password more frequently hashed rather than encrypted?
// One of the reasons is because the holder 'the user' has no reason to get the original password back.
// You encrypt when you need to get the password back. 

const data = "Hello World!";
const hash = crypto.createHash('sha256')    // algorithm: sha256, sha512, md5 (not recommended)
                            .update(data)   // data to hash
                            .digest('hex'); // output format
// console.log(hash);

// 2. Random Values
// Cryptographically secure random numbers (for toekens, keys, etc)
// const token = crypto.randomBytes(16).toString('hex');
// console.log(token);

// createCipheriv & createDecipheriv
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); // The number of bytes for iv depends on the algorithm we're using...

// IV stands for Initialization Vector
// It's main job: make sure that encrypting the same plaintext twice with the same key produces 
// different ciphertexts

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex');
encrypted += cipher.final('hex');


























