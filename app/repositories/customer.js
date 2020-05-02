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

exports.authenticate = async (data) => {
    const res = await Customer.findOne({
        email: data.email,
        password:  data.password
    });
    return res;
};