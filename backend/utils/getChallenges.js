const { challengesCol } = require('../db');

const getChallenges = async(type, userId) => {
  let filter;
  if (type == 'featured') {
    filter = {'featured': true};
  } else if (type == 'my-challenges') {
    filter = {'users.joined': userId, 'featured': false};
  } else if (type == 'tech') {
    filter = {'type': 'tech', 'featured': false};
  } else if (type == 'hobby') {
    filter = {'type': 'hobby', 'featured': false};
  }

  const challengesCursor = await challengesCol.find(filter);
  const challenges = await challengesCursor.toArray();
  return challenges;
};

module.exports = getChallenges;
