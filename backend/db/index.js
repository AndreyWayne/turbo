const { Pool } = require('pg');

const pool = new Pool({
    host: 'db',
    user: 'postgres',
    password: 'ipadib339',
    port: 5432,
    database: 'postgres',
});

module.exports = pool;