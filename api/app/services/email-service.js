var nodemailer = require('nodemailer');
const config = require('../config/global-config');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        user: 'vanillacode2020@gmail.com',
        pass: 'megahack2020'
    }
});



exports.send =  (mailOptions, err, res) => {
    transporter.sendMail({
        to: mailOptions.to,
        from: 'Equipe VanillaCode <vanillacode2020@gmail.com>',
        subject: mailOptions.subject,
        text: mailOptions.body,
        html: mailOptions.html
    })
};