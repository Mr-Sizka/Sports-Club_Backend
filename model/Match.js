const mongoose = require('mongoose');
const MatchSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    teams: {
        type: Object,
        required: true
    },
    isHeld: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('match',MatchSchema)