const fs = require('fs');
const crypto = require('crypto');
process.env.UV_THREADPOOL_SIZE = 3;
const start = Date.now();

setImmediate(() => console.log("Immediate 1 finished."));
setTimeout(() => console.log("Timer 1 finished"), 000);


fs.readFile('test-file.txt', () => {
    console.log('I/O finished.');
    console.log('-------------------------');
    setTimeout(() => console.log("Timer 2 finished"), 0);
    setTimeout(() => console.log("Timer 3 finished"), 3000);
    

    process.nextTick(() => console.log('process.next'));
    setImmediate(() => console.log("Immediate 2 finished."));

    crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
    console.log(Date.now()-start, 'Password encrypted');
    

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>{
        console.log(Date.now()-start, 'Password encrypted');
    })

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>{
        console.log(Date.now()-start, 'Password encrypted');
    })

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>{
        console.log(Date.now()-start, 'Password encrypted');
    })

    crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () =>{
        console.log(Date.now()-start, 'Password encrypted');
    })
});

console.log("Hello from top-level.")