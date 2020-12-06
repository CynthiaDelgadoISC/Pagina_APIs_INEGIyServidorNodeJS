const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const misRutas = require('./routes/rutas');

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/',misRutas);
//app.use(express.static(__dirname + '/public/'));

app.listen(port, () => {
    console.log(`servidor escuchando en: http://localhost:${port}`);
});