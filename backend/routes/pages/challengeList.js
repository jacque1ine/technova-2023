const getChallenges = require('../../utils/getChallenges');

const challengesList = async(req, res, next) => {
  await getChallenges(req.params.type, req.params.userId)
    .then(challenges => {
      res.send(challenges)
    }
  );
};

module.exports = challengesList;
