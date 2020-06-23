#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../../app');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '8080');
app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */

const server = app.listen(() => {
  console.log(`Express is running on port ${server.address().port}`);
});
/* 
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
 */
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
    // named pipe
    return val;
    }
    if (port >= 0) {
    // port number
    return port;
    }
    return false;
}
