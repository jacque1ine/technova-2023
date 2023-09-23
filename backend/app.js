var express = require('express');
var cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

var home = require('./routes/home');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/:userId', home);

app.listen(3001, () => {
  console.log('Server running on port 3001')
});

module.exports = app;
