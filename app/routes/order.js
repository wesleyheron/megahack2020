const api = require('../controllers/order');

module.exports = (app) => {

    app.route('/orders')
        .get(api.get)
        .post(api.post);

};