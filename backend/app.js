var express = require('express');
var cors = require('cors');
require('dotenv').config();

// Import routes
const createProfile = require('./routes/createProfile');

const home = require('./routes/home');
const challengesList = require('./routes/challengeList');

// Configure Express
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Use routes
app.post('/create-profile/:userId', createProfile);

app.get('/:userId', home);
app.get('/challenges/:type/:userId', challengesList);

// Listen for server connection
app.listen(3001, () => {
  console.log('Server running on port 3001')
});

module.exports = app;
