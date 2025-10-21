// eventsDemo.js -> An overview of the code events module

import { EventEmitter } from 'node:events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log(`Hello, ${name}`);   
}

function goodbyeHandler(name) {
    console.log(`Goodbye, ${name}`);   
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
myEmitter.emit('greet', 'tpose');
myEmitter.emit('goodbye', 'tpose');

// Error handling 
myEmitter.on('error', (err) => {
    console.log('An error occured', err.message);
});

// Simulate error
myEmitter.emit('error', new Error('Someting went wrong'));
