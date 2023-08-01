const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.listen(port, () => {
    console.log('Server deluje na portu: ' + port);
})