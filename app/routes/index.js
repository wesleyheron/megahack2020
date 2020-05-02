/*const customer = require('../routes/customer');
const order = require('../routes/order');
const product = require('../routes/product');*/

const express = require('express');
const router = express.Router();

const get = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "API MegaHackton Equipe Vanillacode",
        version: "0.0.1"
    });
});

module.exports = router;