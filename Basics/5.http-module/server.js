const http = require('http');

const server = http.createServer((req, res)=> {
    console.log(req, 'req');
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hello Nodejs from http module');
});

const port = 3000;
server.listen(port, ()=> {
    console.log(`Server is not listening to port ${port}`);
    
})