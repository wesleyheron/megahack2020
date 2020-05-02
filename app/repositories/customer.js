const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');


exports.get = async () => {   
        const custumers = await Customer.find({});
        return custumers;
};

exports.create = async(data) => {
    
    var customer = new Customer(data);
    await customer.save();
};