const http = require('http');
const os = require('os');
const path = require('path');
const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('greet', () => {
    console.log("Hello Event Triggered");
});

const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.write("Welcome to Node.js Server\n");
    res.write("Operating System: " + os.platform() + "\n");
    res.write("Current File: " + path.basename(__filename) + "\n");

    eventEmitter.emit('greet');

    res.end();

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});