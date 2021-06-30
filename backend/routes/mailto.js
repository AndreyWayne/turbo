const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');

const router = require('express').Router();

const transport = nodemailer.createTransport(smtpTransport({
    auth: {
        user: '74autoturbo@gmail.com',
        pass:'ipadib339'
    },
    host: 'smtp.gmail.com',
    port: 587,
    tls: {
        rejectUnauthorized: false
    },
    secure: false,
}));

router.post('/mailto', async (req, res) => {
    const body = req.body;
    try {
        const result = await transport.sendMail({
            from: `74autoturbo@gmail.com`,
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

        console.log(result)

        res.json('ok');
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;