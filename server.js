const http = require('http');
const server = http.createServer((req, res) => {
    const book = {
        author: 'Charles Dikens',
        title: 'Great Expectation',
    };

    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(book));
    res.end();
});

server.listen(8000);