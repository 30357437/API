const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Foods = require('../models/foods.js');

const foodRouter = express.Router();

foodRouter.use(bodyParser.json());

foodRouter.route('/foods')
    .get((req, res, next) => {
        Foods.find({foods})
            .then((food) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(food);
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