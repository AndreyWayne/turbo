const router = require('express').Router();
const db = require('../db');

router.get('/uslugi', async (req, res) => {
    const result = await db.query(`SELECT * FROM uslugi`);

    res.json(result.rows);
});

router.get('/uslugi/:id', async (req, res) => {
    const result = await db.query(`SELECT * FROM uslugi WHERE id=${req.params.id}`);

    res.json(result.rows[0]);
});

router.post('/uslugi', async (req, res) => {
    const body = req.body;

    await db.query(`INSERT INTO uslugi(name, description, price, image) VALUES ('${body.name}', '${body.description}', '${body.price}', '${body.image}');`);

    res.json('Добавлено');
});

router.put('/uslugi/:id', async (req, res) => {
    const body = req.body;

    await db.query(`UPDATE uslugi SET name='${body.name}', description='${body.description}', price='${body.price}', image='${body.image}' WHERE id=${req.params.id};`);

    res.json('Изменено');
});

router.delete('/uslugi/:id', async (req, res) => {
    await db.query(`DELETE FROM public.uslugi WHERE id=${req.params.id};`);

    res.json('Удалено');
});

module.exports = router;