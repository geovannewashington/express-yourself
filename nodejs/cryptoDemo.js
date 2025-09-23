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
console.log(hash);
// to continue...
                        
