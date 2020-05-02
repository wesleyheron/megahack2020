const mongoose = require('mongoose');
const Address = mongoose.model('Address');

exports.get = async () => {
    const res = await Address
        .find({});
    return res;
};

exports.getByZip = async(zip) => {
    const res = await Address
        .findById(zip);
    return res;
};

exports.getByCity = async(city) => {
    const res = await Address
        .find({});
    return res;
};

exports.create = async(data) => {
    var address = new Address(data);
    await address.save();
};

exports.update = async(id, data) => {
    await Address
        .findByIdAndUpdate(id, {
            $set: {
                zip: data.zip,
                place: data.place,
                number: data.number,
                addressComplement: data.addressComplement,
                neighborhood: data.neighborhood,
                city: data.city,
                state: data.state
            }
        });
};

exports.delete = async(id) => {
    await Address
        .findOneAndRemove(id);
};