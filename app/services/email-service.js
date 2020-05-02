var nodemailer = require('nodemailer');
const config = require('../config/global-config');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        user: 'equipevanillacode@gmail.com',
        pass: 'MegaHack2020#'
    }
});



exports.send =  (mailOptions, err, res) => {
    transporter.sendMail({
        to: mailOptions.to,
        from: 'Equipe VanillaCode <equipevanillacode@gmail.com>',
        subject: mailOptions.subject,
        text: mailOptions.body,
        html: mailOptions.html
    })
};