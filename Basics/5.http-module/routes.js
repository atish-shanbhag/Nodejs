const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type' : 'text/plain'});
        res.end('Home page');
    } else if(url === '/projects'){
         res.writeHead(200, {'content-type' : 'text/plain'});
        res.end('Projects page');
    } else{
         res.writeHead(400, {'content-type' : 'text/plain'});
        res.end('Not found page');
    }
});

const port = 3000;
server.listen(port, ()=> {
    console.log(`Listenting in port ${port}`);
    
})