const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');

const app = express();

const api = require('./db-server/db-api');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', api);

app.get('*'), (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
}

const port = process.env.PORT || 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log('app running');
});