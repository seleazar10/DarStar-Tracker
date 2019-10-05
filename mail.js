const nodemailer = require('nodemailer');
require("dotenv").config();
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: "1228ae5ac3c42061bd9c7874296f7763-af6c0cec-280de2f9", // TODO: Replace with your mailgun API KEY
        domain: "sandboxda39828700f74a6c89adc92019b83fc8.mailgun.org" // TODO: Replace with your mailgun DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: 'daretobeastarme@gmail.com',
        subject,
        text
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;