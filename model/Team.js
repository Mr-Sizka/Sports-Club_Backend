const mongoose = require('mongoose');
const TeamSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    players:{
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('team',TeamSchema)