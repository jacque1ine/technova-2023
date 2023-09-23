var express = require('express');
var cors = require('cors');
require('dotenv').config();

// Import routes
const home = require('./routes/home');

// Configure Express
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Use routes
app.get('/:userId', home);

// Listen for server connection
app.listen(3001, () => {
  console.log('Server running on port 3001')
});

module.exports = app;
