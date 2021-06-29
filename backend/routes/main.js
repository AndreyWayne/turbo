const router = require('express').Router();
const db = require('../db');

router.get('/main', async (req, res) => {
    const result = await db.query(`SELECT * FROM main`);

    res.json(result.rows[0]);
});

router.put('/main', async (req, res) => {
    const body = req.body;

    console.log(body)

    await db.query(`UPDATE public.main
	SET head1='${body.head1}', head2='${body.head2}', description='${body.description}', do_description='${body.do_description}', work_head='${body.work_head}', work_description='${body.work_description}', contacts_time1='${body.contacts_time1}', contacts_time2='${body.contacts_time2}', phone='${body.phone}', email='${body.email}', address='${body.address}', vk='${body.vk}', inst='${body.inst}' WHERE id=1`);

    res.json('Изменено');
});

module.exports = router;