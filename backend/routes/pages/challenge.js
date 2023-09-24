const getChallenges = require('../../utils/getChallenges');

const challenge = async(req, res, next) => {
  const challenges = await getChallenges(req.params.challengeId, req.params.userId);
  res.send(challenges[0]);
};

module.exports = challenge;
