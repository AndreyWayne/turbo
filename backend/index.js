const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())
app.use(require('./routes'));

const server = app.listen(9000, (req) => {
    console.log('Listening on port ' + server.address().port);
});