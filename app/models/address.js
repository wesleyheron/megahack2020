const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    zip: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: false,
    },
    number: {
        type: String,
        required: false,
    },
    addressComplement: {
        type: String,
        required: false,
    },
    neighborhood: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true, 
    },
    state: {
        type: String,
        required: true, 
    }
    
});

module.exports = mongoose.model('Address', schema);



