var express = require('express');
var cors = require('cors');
require('dotenv').config();

// Import action route logic
const createProfile = require('./routes/actions/createProfile');
const createChallenge = require('./routes/actions/createChallenge');
const joinChallenge = require('./routes/actions/joinChallenge');

// Import page route logic
const home = require('./routes/pages/home');
const challengesList = require('./routes/pages/challengeList');
const challenge = require('./routes/pages/challenge');
const profile = require('./routes/pages/profile');
const leaderboard = require('./routes/pages/leaderboard');
const match = require('./routes/pages/match');

// Configure Express
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Action routes
app.post('/create-profile/:userId', createProfile);
app.post('/create-challenge/:userId', createChallenge);
app.put('/join-challenge/:challengeId/:userId', joinChallenge);

// Page routes
app.get('/:userId', home);
app.get('/challenges/:type/:userId', challengesList);
app.get('/challenges/:challengeId/:userId', challenge);
app.get('/profile/:userId', profile);
app.get('/leaderboard/:userId', leaderboard);
app.get('/match/:userId', match);

// Listen for server connection
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

module.exports = app;
