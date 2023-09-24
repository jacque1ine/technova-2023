const { ObjectId } = require('mongodb');
const { challengesCol, usersCol } = require('../../db');

const joinChallenge = async(req, res, next) => {
  const challengeId = req.params.challengeId;
  const userId = req.params.userId;

  await challengesCol.updateOne(
    {'_id': new ObjectId(challengeId)},
    {
      $push: {
        'users.joined': userId
      }
    }
  );

  await usersCol.updateOne(
    {'_id': new ObjectId(userId)},
    {
      $push: {
        'challenges.joined': challengeId
      }
    }
  );

  res.send(challengeId);
};

module.exports = joinChallenge;
