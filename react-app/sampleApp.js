const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('You have reached the sampleApp\n');
    console.log('Request received to sample app at ' + new Date());
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});