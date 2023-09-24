const { challengesCol } = require('../db');

const getChallenges = async(filter) => {
  const challengesCursor = await challengesCol.find(filter);
  const challenges = await challengesCursor.toArray();
  return challenges;
};

module.exports = getChallenges;
