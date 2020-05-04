const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');


exports.get = async () => {   
        const custumers = await Customer.find({});
        return custumers;
};

exports.getByEmail = async (data) => {   
    const custumer = await Customer.find({email: data});
    return custumer;
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