const http = require('http');

const server = http.createServer((req, res) => {

    res.end("Hello from the server");
})

const serverObj = server.listen(3000, () => {

    console.log(serverObj.address().port);
})