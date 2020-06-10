const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Foods = require('../models/foods.js');

const foodRouter = express.Router();

foodRouter.use(bodyParser.json());

foodRouter.route('/')
    .get((req, res, next) => {
        Foods.find({})
            .then((foods) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(foods);
            }, (err) => next(err))
            .catch((err) => next(err));
    
    });

foodRouter.route('/:foodId')
    .get((req, res, next) => {
        Foods.findById(req.params.foodId)
            .then((food) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(food);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = foodRouter;