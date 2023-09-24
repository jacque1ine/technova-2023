const { usersCol } = require('../../db');

const leaderboard = async(req, res, next) => {
  const usersCursor = await usersCol.find().sort({'coins': -1});
  const users = await usersCursor.toArray();
  res.send(users.splice(0, 20));
};

module.exports = leaderboard;
