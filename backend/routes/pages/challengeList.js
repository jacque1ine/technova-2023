const getChallenges = require('../../utils/getChallenges');

const challengesList = async(req, res, next) => {
  const challenges = await getChallenges(req.params.type, req.params.userId);
  res.send(challenges);
};

module.exports = challengesList;
