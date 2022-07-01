 const http = require('http');
const url = require('url');
const fs = require('fs');
const slugify = require('slugify');
const replaceTemplete = require('./Module_2/replaceTemplate');

// it executed only once!!! so read synchronously..


const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const slugs = dataObj.map(el => slugify(el.productName, {lower: true}));
console.log(slugify('Fresh Avocados', { lower: true}));

const server = http.createServer((req, res) => {
    const {query, pathname} = url.parse(req.url, true);// create an event loop for server.


    if (pathname == '/' || pathname == '/overview'){
        res.writeHead(200, {'content-type':'text/html'});
        // console.log(dataObj)
        const cardsHtml = dataObj.map(el => replaceTemplete(tempCard, el)).join('');  //replacing the variable in front end.
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        // console.log(cardsHtml)
        res.end(output);  
        
        // product page
    } else if(pathname == '/product'){
        // console.log(query)
        res.writeHead(200, {'content-type':'text/html'});
        const product = dataObj[query.id]
        const output = replaceTemplete(tempProduct, product);
        // res.end('This is product');
        res.end(output)

        // api
    } else if (pathname == '/api'){
        fs.readFile(`${__dirname}/data.json`, 'utf-8', (err, data) => {
            // const productData = JSON.parse(data)
            // console.log(productData);
            res.writeHead(200, {
                'content-type':'application/json'
            })
            res.end(data);
        });
        
        //Not found 
    } else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        res.end('<h1>page not found</h1>');
    }
});

server.listen(8000, '127.0.0.1', () =>{
    console.log('server is running on 8000');
});
