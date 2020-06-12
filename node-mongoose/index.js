const mongoose = require('mongoose');

const Foods = require('./models/foods');

const url = 'mongodb://localhost:27017';
const connect = mongoose.connect(url);

connect.then((Foods) => {

    console.log('Connected correctly to server');

    Foods.create({
        name: 'Mango',
        description: 'Yellow'
    })
    .then((food) => {
        console.log(food);

        return Foods.findByIdAndUpdate(food._id,{
            $set : {description : 'Updated3'}
        },{
            new:true
        })
        .exec();
    })
    .then((food) => {
        console.log(food);
        food.nutritions.push({
            vitamin :" A"
        });
        return food.save();

    })
    .then(() => {
        return mongoose.connection.close();
    })
    .catch((err) => {
        console.log(err);
    });

});