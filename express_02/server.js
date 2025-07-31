const express = require('express');
const server = express();
server.listen(3000);

//rotas
server.get('/', (req, res) => {
    res.sendFile('./views/home.html', { root: __dirname });
})

server.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
})

server.get('/services', (req, res) => {
    res.sendFile('./views/services.html', { root: __dirname });
})

server.use((req, res) => {
    res.status(404).sendFile('./views/error.html', { root: __dirname });
})

console.log('Server is running on port 3000');

/*
home
services
about
error
*/

