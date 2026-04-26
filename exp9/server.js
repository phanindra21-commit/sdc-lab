const http = require('http');
//Implemented EventEmitter for custom event handling
const os = require('os');
const path = require('path');
const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on('greet', () => {
    console.log("Hello Event Triggered");
});
//Implemented basic HTTP server using Node.js http module

const server = http.createServer((req, res) => {
//Added OS module to fetch system platform information
    res.writeHead(200, {'Content-Type': 'text/plain'});
//Integrated Path module to display current file details
    res.write("Welcome to Node.js Server\n");
    res.write("Operating System: " + os.platform() + "\n");
    res.write("Current File: " + path.basename(__filename) + "\n");

    eventEmitter.emit('greet');

    res.end();

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});