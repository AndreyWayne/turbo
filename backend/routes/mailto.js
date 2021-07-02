const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');

const router = require('express').Router();

const transport = nodemailer.createTransport({
    service: 'Yandex', // no need to set host or port etc.
    auth: {
        user: 'avtoservisturbo@yandex.ru',
        pass: 'ipadib339'
    }
});

router.post('/mailto', async (req, res) => {
    const body = req.body;
    try {
        const result = await transport.sendMail({
            from: 'avtoservisturbo@yandex.ru',
            to: 'avtoservisturbo@yandex.ru',
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