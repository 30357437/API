const express = require('express');
const bodyParser = require('body-parser');

const foodRouter = express.Router();

foodRouter.use(bodyParser.json());

foodRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the foods to you!');
    });
   

module.exports = foodRouter;