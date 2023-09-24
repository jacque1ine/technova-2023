const getChallenges = require('../../utils/getChallenges');

const challenge = async(req, res, next) => {
  await getChallenges(req.params.challengeId, req.params.userId)
    .then(challenges => {
      res.send(challenges[0])
    }
  );
};

module.exports = challenge;
