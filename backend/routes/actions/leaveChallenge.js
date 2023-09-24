const { ObjectId } = require('mongodb');
const { challengesCol, usersCol } = require('../../db');

const leaveChallenge = async(req, res, next) => {
  const challengeId = req.params.challengeId;
  const userId = req.params.userId;

  await challengesCol.updateOne(
    {'_id': new ObjectId(challengeId)},
    {
      $pull: {
        'users.joined': userId
      }
    }
  );

  await usersCol.updateOne(
    {'_id': new ObjectId(userId)},
    {
      $pull: {
        'challenges.joined': challengeId
      }
    }
  );

  res.send(challengeId);
};

module.exports = leaveChallenge;
