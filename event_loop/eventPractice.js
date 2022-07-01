const EventEmitter = require('events');
const http = require('http')


class Sales extends EventEmitter{
    constructor(){
        super();
    }
};

// const myEmitter = new EventEmitter();
const myEmitter = new Sales();

myEmitter.on('newSale', ()=> {
    console.log('There was a new sale.!');
})

myEmitter.on('newSale', ()=> {
    console.log('Name : Arvind');
})

myEmitter.on('newSale', stock => {
    console.log(`There are now only ${stock} items left.`)
})

myEmitter.emit('newSale', 9);
// ---------------------------------------------events in http

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request Received!')
    res.end('Request received..')
});

server.on('request', (req, res) => {
    console.log('Another req. received..')
});

server.on('close', () =>{
    console.log('server closed..')
})

server.listen(8000, '127.0.0.1', () =>{
    console.log('Server is listening!!!');
})