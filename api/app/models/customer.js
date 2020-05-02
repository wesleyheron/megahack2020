const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    document: {
        type: String,
        required: true,
    },
    phoneNumber:{
        type: String,
        required: true,
    },     
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }, 
    password: {
        type: String,
        required: true,
    }
    
});

module.exports = mongoose.model('Customer', schema);



