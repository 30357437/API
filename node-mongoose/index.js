const mongoose = require('mongoose');

const Foods = require('./models/foods');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    var newFood = Foods({
        name: 'Mango',
        description: 'Yellow'
    });

    newFood.save()
        .then((food) => {
            console.log(food);

            return Foods.find({});
        })
        .then((foods) => {
            console.log(foods);

            return Foods.remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });

});