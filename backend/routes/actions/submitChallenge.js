const { ObjectId } = require('mongodb');
const { challengesCol, usersCol } = require('../../db');

const submitChallenge = async(req, res, next) => {
  const challengeId = req.params.challengeId;
  const userId = req.params.userId;

  await challengesCol.updateOne(
    {'_id': new ObjectId(challengeId)},
    {
      $push: {
        'users.completed': userId
      },
      $pull: {
        'users.joined': userId
      }
    }
  );

  await usersCol.updateOne(
    {'_id': new ObjectId(userId)},
    {
      $push: {
        'challenges.completed': challengeId
      },
      $pull: {
        'challenges.joined': challengeId
      }
    }
  );

  res.send(challengeId);
};

module.exports = submitChallenge;
