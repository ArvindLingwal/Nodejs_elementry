const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    //problem with solution is node has to load the entire 
    //file into memory as only after getting ready it will send data to front end.
    //this will be the problem when file is big or there is tons of requests hit the server.
    //so sloution will be streams
    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) console.log(err);
    //     res.end(data);
// });
    // Solutio2
    // we will stream the file chunk by chunk.
        // const readable = fs.createReadStream('test-file.txt');
        // readable.on('data', chunk =>{
        //     res.write(chunk)
        // })
        // readable.on('end', () => {
        //     res.end();
        // });
        // readable.on('error',err  => {
        //     console.log(err);
        //     res.statusCode= 500;
        //     res.end('File not found!');
        // })
    //problem with this solution is data cannot respose to front-end as fast as it receive/read the data
    // from file and cuse back pressure problem.

    // Solution 3 to over come back pressure.
     const readable = fs.createReadStream('test-file.txt');
     readable.pipe(res);
     //readablesource.pipe(Writable destination)
    });


server.listen(8000, '127.0.0.1', () =>{
    console.log('listning to server...!!!')
})