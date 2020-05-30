const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nutritionSchema = new Schema({
    Energy: {
        type : mixed,
        required : true 
    },
    Carbohydrates : {
        type : mixed,
        required : true
    },
    Sugar : {
        type : mixed,
        required : true
    },
    DietaryFiber : {
        type : mixed,
        required : true
    

    },
    fat : {
        type : mixed,
        required : true
    } ,
    protein : {
        type : mixed,
        required : true
    },
    water : {
        type : mixed,
        required : true
    }

    
});
const imageSchema = new Schema ({
    image : {
        type : image,
        required : true

    }
});

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
    ,
    description: {
        type: String,
        required: true
    },
    image : [imageSchema]
},

{
    timestamps: true
});

var Foodss = mongoose.model('Dish', foodSchema);

module.exports = Foodss;