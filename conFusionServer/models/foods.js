const mongoose = require('mongoose');
const Schema = mongoose.Schema;





const nutritionSchema = new Schema({
    Energy: {
        type: String
    },
    Carbohydrates: {
        type: String
    },
    Sugar: {
        type: String
    },
    DietaryFiber: {
        type: String


    },
    fat: {
        type: String
    },
    protein: {
        type: String
    },
    water: {
        type: String
    },
     description: {
         type: String
     }});

const foodSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    colour : {
        type : String
        

    },
    size : {
        type : String
        
    },
    texture : {
        type : String
    },
    smell : {
        type : String
    } ,
    taste: {
        type: String
    },
    sound : {
        type: String
    },
    hardness : {
        type: String
    },
    shape: {
        type: String
    },
    juiciness : {
        type: String
    },
    structure : {
        type: String
    },
    moisture : {
        type: String
    },
    density: {
        type: String
    },
    appearance: {
        type: String
    },
    plasticity: {
        type: String
    },
    rheology : {
        type: String
        
    },
    nutrition : [nutritionSchema]
   
},

{
    timestamps: true,
        type: Date,
        default: Date.now
});





const Foods = mongoose.model('Food', foodSchema);

module.exports =  foodSchema;