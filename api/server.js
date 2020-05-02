const config = require('./app/config/server-config')();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const db = require('./app/infra/db');

const app = express();
const router = express.Router();

mongoose.connect('mongodb+srv://megahack:Q4y4ndBTLvc1OWme@cluster0-p6zsf.mongodb.net/vanillacode?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}); 
mongoose.set('useCreateIndex', true);

const Product = require('./app/models/product');
const Customer = require('./app/models/customer');
const Company = require('./app/models/company');
const Address = require('./app/models/address');
const Order = require('./app/models/order');

const indexRoute = require('./app/routes/index');
const productRoute = require('./app/routes/product');
const customerRoute = require('./app/routes/customer');
const companyRoute = require('./app/routes/company');
//const addressRoute = require('./app/routes/address');
const orderRoute = require('./app/routes/order');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/companies', companyRoute);
app.use('/orders', orderRoute);


module.exports = app;


app.listen(config.port, () => {
    console.log('Servidor rodando na porta ' + config.port);
});
