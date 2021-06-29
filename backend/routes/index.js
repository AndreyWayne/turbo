const router = require('express').Router();
const routerName = '/api'

router.use(routerName, require('./uslugi'));
router.use(routerName, require('./works'));
router.use(routerName, require('./main'));
router.use(routerName, require('./about'));

module.exports = router;