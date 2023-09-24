const { ObjectId } = require('mongodb');
const { challengesCol, usersCol } = require('../db');

const home = async(req, res, next) => {
  const userId = req.params.userId;
  const user = await usersCol.findOne({'_id': new ObjectId(userId)});
  const featuredChallenge = await challengesCol.findOne({'featured': true});
  const myChallengesCursor = await challengesCol.find({'users.joined': userId, 'featured': false});
  const techChallengesCursor = await challengesCol.find({'type': 'tech', 'featured': false});
  const hobbyChallengesCursor = await challengesCol.find({'type': 'hobby', 'featured': false});

  const myChallenges = await myChallengesCursor.toArray();
  const techChallenges = await techChallengesCursor.toArray();
  const hobbyChallenges = await hobbyChallengesCursor.toArray();

  const payload = {
    'picture': user.picture,
    'featuredChallenge': featuredChallenge,
    'myChallenges': myChallenges.slice(0, 2),
    'techChallenges': techChallenges.slice(0, 2),
    'hobbyChallenges': hobbyChallenges.slice(0, 2)
  }

  res.send(payload);
};

module.exports = home;
