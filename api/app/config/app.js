const express = require('express');
const bodyParser = require('body-parser');
//const consign = require('consign');
//const cors = require('cors'); 
const mongoose = require('mongoose');
const db = require('../infra/db');

const app = express();
    const router = express.Router();
    
    const Product = require('../models/product');
    const Customer = require('../models/customer');
    const Order = require('../models/order');

    const indexRoute = require('../routes/index');
    const productRoute = require('../routes/product');
    const customerRoute = require('../routes/customer');
    const orderRoute = require('../routes/order');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    app.use('/', indexRoute);
    app.use('/products', productRoute);
    app.use('/customers', customerRoute);
    app.use('/orders', orderRoute);


module.exports = app;


/*module.exports = () => {
    const app = express();
    const router = express.Router();
    
    const Product = require('../models/product');
    const Customer = require('../models/customer');
    const Order = require('../models/order');

    //const indexRoute = require('../routes/index');
    //const productController = require('../controllers/product');
    //const customerController = require('../controllers/customer');
    //const orderController = require('../controllers/order');

    const indexRoute = require('../routes/index');
    const productRoute = require('../routes/product');
    const customerRoute = require('../routes/customer');
    const orderRoute = require('../routes/order');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-acces-token');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    });

    app.use('/', indexRoute);
    app.use('/products', productRoute);
    app.use('/customers', customerRoute);
    app.use('/orders', orderRoute);


    return app;
    
};*/