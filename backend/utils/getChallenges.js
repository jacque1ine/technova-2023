const { ObjectId } = require('mongodb');
const { challengesCol } = require('../db');

const getChallenges = async(filter, userId) => {
  if (filter == 'featured') {
    filter = {'featured': true};
  } else if (filter == 'my-challenges') {
    filter = {'users.joined': userId, 'featured': false};
  } else if (filter == 'tech') {
    filter = {'type': 'tech', 'featured': false};
  } else if (filter == 'hobby') {
    filter = {'type': 'hobby', 'featured': false};
  } else {
    filter = {'_id': new ObjectId(filter)}
  }

  const challengesCursor = await challengesCol.find(filter);
  const challenges = await challengesCursor.toArray();
  return challenges;
};

module.exports = getChallenges;
