const router = require('express').Router();
const db = require('../db');

router.get('/works', async (req, res) => {
    const result = await db.query(`SELECT * FROM works ORDER BY id DESC`);

    res.json(result.rows);
});

router.post('/works', async (req, res) => {
    const body = req.body;

    await db.query(`INSERT INTO works(name, description, image) VALUES ('${body.name}', '${body.description}', '${body.image}');`);

    res.json('Добавлено');
});

router.put('/works/:id', async (req, res) => {
    const body = req.body;

    await db.query(`UPDATE works SET name='${body.name}', description='${body.description}', image='${body.image}' WHERE id=${req.params.id};`);

    res.json('Изменено');
});

router.delete('/works/:id', async (req, res) => {
    await db.query(`DELETE FROM public.works WHERE id=${req.params.id};`);

    res.json('Удалено');
});

module.exports = router;