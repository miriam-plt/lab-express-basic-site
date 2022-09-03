const express = require('express');
const app = express();
const port = 3000

app.use(express.static(__dirname + '/public'))

app.get('/', (request, response) => {
    console.log(__dirname);
    response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
    console.log(__dirname);
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response) => {
    console.log(__dirname);
    response.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (request, response) => {
    console.log(__dirname);
    response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(port)