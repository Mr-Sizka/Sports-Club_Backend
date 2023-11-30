const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    address :{
        type: String,
        required: true
    },
    contact :{
        type:String
    },
    email :{
        type: String,
        required: true
    },
    age :{
        type: Number,
        required: true
    },
    points :{
        type: String,
        required: true
    },
    password :{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('player',PlayerSchema)