const mongoose = require('mongoose');
const Company = mongoose.model('Company');

exports.get = async () => {
    const res = await Company
        .find({ active: true });
    return res;
};

exports.getById = async(id) => {
    const res = await Company
        .findById(id);
    return res;
};

exports.create = async(data) => {
    var company = new Company(data);
    await company.save();
};

exports.update = async(id, data) => {
    await Company
        .findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                document: data.document,
                phoneNumber: data.phoneNumber,
                address: data.address
            }
        });
};

exports.delete = async(id) => {
    await Company
        .findOneAndRemove(id);
};

exports.authenticate = async (data) => {
    const res = await Company.findOne({
        email: data.email,
        password:  data.password
    });
    return res;
};