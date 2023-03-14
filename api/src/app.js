const express = require('express');
const router = require('./routes');
const cors = require('cors');
const app = express();

const whitelist = ['http://localhost:3000', 'http://192.168.15.73:3000'];

app.use(cors(whitelist));


app.use(express.json());

app.use('/api', router);

module.exports = app;