const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');

const router = require('express').Router();

const transport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_USER || 'andreywayne97@gmail.com',
        pass: process.env.MAIL_PASSWORD || 'ipadib1488'
    }
}));

router.post('/mailto', async (req, res) => {
    const body = req.body;
    try {
        await transport.sendMail({
            from: `"Сообщение с сайта TURBO" <'andreywayne97@gmail.com'>`,
            to: '74autoturbo@gmail.com',
            html: `
                <strong>Имя: ${body.name}</strong>
                <br>
                <strong>Email: ${body.email ? body.email : '–'}</strong>
                <br>
                <strong>Телефон: ${body.phone ? body.phone : '–'}</strong>
                <br>
                <strong>Сообщение:</strong>
                <p>${body.message}</p>
            `,
        });

        res.json('ok');
    } catch (error) {
        return { 
            status: 'error' 
        };
    }
})

module.exports = router;