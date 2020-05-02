const repository = require('../repositories/customer');
const authService = require('../services/auth-service');
const emailService = require('../services/email-service');
const bcrypt = require('bcryptjs');

exports.get = async (req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!',
            data: error
        });
    }
};

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        });

        let mailOptions = {
            to: req.body.email,
            subject: 'Obrigado por se cadastrar em nossa plataforma',
            text: 'Obrigado!',
            html: '<h1>Obrigado por confiar em nossos serviços</h1>'
        };

        emailService.send(mailOptions);

        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!' +
                console.log(e.message)
        });
    }

};

exports.authenticate = async (req, res, next) => {

    try {
        const customer = await repository.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        console.log("customer", customer);

        if (!customer) {
            res.status(404).send({
                message: 'Usuário ou senha inválidos!'
            });
            return;
        }

        const token = await authService.generateToken({
            id: customer.id,
            email: customer.email,
            name: customer.name,
            roles: customer.roles
        });

        res.status(201).send({
            token: token,
            data: {
                email: customer.email,
                name: customer.name
            }
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!',
            data: error
        });
    };
};

exports.refreshToken = async (req, res, next) => {

    try {
        //Recupera o token
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        //Decodifica o token
        const data = await authService.decodeToken(token);

        const customer = await repository.getById(data.id);

        console.log("customer", customer);

        if (!customer) {
            res.status(401).send({
                message: 'Cliente não encontrado!'
            });
            return;
        }

        const tokenData = await authService.generateToken({
            id: customer.id,
            email: customer.email,
            name: customer.name,
            roles: customer.roles
        });

        res.status(201).send({
            token: token,
            data: {
                email: customer.email,
                name: customer.name
            }
        });
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição!',
            data: error
        });
    };
};