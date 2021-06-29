const router = require('express').Router();
const db = require('../db');

router.get('/about', async (req, res) => {
    const result = await db.query(`SELECT * FROM about`);

    res.json(result.rows[0]);
});

router.put('/about', async (req, res) => {
    const body = req.body;

    await db.query(`UPDATE public.about
	SET name='${body.name}', description='${body.description}'
	WHERE id=1;`);

    res.json('Изменено');
});

module.exports = router;