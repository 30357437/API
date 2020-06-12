const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('../app');
const Foods = require('../models/foods.js');
const app = require('../app.js');

const foodRouter = express.Router();

foodRouter.use(bodyParser.json());

foodRouter.route('/')
    .get((req, res, next) => {
        var cursor = db.collection('foods').find()
            .then((Grapes) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(Grapes);
            }, (err) => next(err))
            .catch((err) => next(err));

    });



foodRouter.route('/foods:foodName')
    .get((req, res, next) => {
        Foods.findByName(req.params.foodId)
            .then((Foods) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(Foods);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
module.exports = foodRouter;