const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const nutritionSchema = new Schema({
    Energy: {
        type: String,
        required: true
    },
    Carbohydrates: {
        type: String,
        required: true
    },
    Sugar: {
        type: String,
        required: true
    },
    DietaryFiber: {
        type: String,
        required: true


    },
    fat: {
        type: String,
        required: true
    },
    protein: {
        type: String,
        required: true
    },
    water: {
        type: String,
        required: true
    },
     description: {
         type: String,
         required: true
     }});

const foodSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    colour : {
        type : String,
        required : true

    },
    size : {
        type : String,
        require : true
    },
    texture : {
        type : String,
        required : true
    },
    smell : {
        type : String,
        required : true
    } ,
    taste: {
        type: String,
        required: true
    },
    sound : {
        type: String,
        required: true
    },
    hardness : {
        type: String,
        required: true
    },
    shape: {
        type: String,
        required: true
    },
    juiciness : {
        type: String,
        required: true
    },
    structure : {
        type: String,
        required: true
    },
    moisture : {
        type: String,
        required: true
    },
    density: {
        type: String,
        required: true
    },
    appearance: {
        type: String,
        required: true
    },
    plasticity: {
        type: String,
        required: true
    },
    rheology : {
        type: String,
        required: true
    },
    nutrition : [nutritionSchema]
   
},

{
    timestamps: true
});





const Foods = mongoose.model('Food', foodSchema);

module.exports =  foodSchema;