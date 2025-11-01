const smtpTransport = require('nodemailer-smtp-transport');
const nodemailer = require('nodemailer');

const router = require('express').Router();

const transport = nodemailer.createTransport({
   host: 'smtp.yandex.ru',
    port: 587,  // ← Используем порт 587 вместо 465
    secure: false,  // ← false для порта 587
    requireTLS: true,  // ← Требуем TLS шифрование
    auth: {
        user: 'avtoservisturbo@yandex.ru',
        pass: 'iocuxraxkfztekof'
    },
    // Дополнительные настройки для надежности
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000,
    debug: true,
    logger: true
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