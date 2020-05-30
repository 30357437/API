const mongoose = require('mongoose');

const Foods = require('./models/foods');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {

    console.log('Connected correctly to server');

    Foods.create({
        name: 'Mango',
        description: 'Yellow'
    })
    .then((food) => {
        console.log(food);

        return Foods.findByIdAndUpdate(food._id,{
            $set : {description : 'Updated'}
        });
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