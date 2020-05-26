const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const foodRouter = require('./routes/foodRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/foods', foodRouter);

app.all('/foods', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    next();
});

app.get('/foods', (req, res, next) => {
    res.end('Will send all the foods to you');
});
app.get('/foods/:foodId', (req, res, next) =>{
    res.end('Will send details of the food:'
    + req.params.foodId+ 'to you.');
});

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});