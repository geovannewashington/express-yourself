// osDemo.js -> Provides operating system-related utilities, like info about CPU, memory, etc...

import os from 'node:os';
    
// The OS module mostly provides methods that return information about the system, not modify it. 

// System Info: 
console.log(os.type());     // 'Linux'
console.log(os.platform()); // 'linux'
console.log(os.arch());     // 'x64'
console.log(os.release());  // '6.12.41_1'
console.log(os.hostname()); 
console.log(os.uptime());   
