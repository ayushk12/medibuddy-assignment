const express = require('express');

const server = express();

// DB Connection
require('./src/config/db');

// Middleware
middlewaresConfig(server);

server.get('/', function (req, res) {
    res.status(200).send("Server Working Fine :D");
});

RequestsController.set(server);
DriversController.set(server);

const port = Number(process.env.PORT || 8000)
server.listen(port, err => {
    if (err)
        console.log(err);
    else
        console.log('Ola queuing system started ...');
});