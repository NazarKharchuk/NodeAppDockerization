'use strict';

const express = require('express');
const path = require('path');

const port = 80;

const server = express();

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/page.html'));
});

server.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});