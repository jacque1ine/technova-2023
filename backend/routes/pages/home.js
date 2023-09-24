const getChallenges = require('../../utils/getChallenges');
const getUser = require('../../utils/getUser');

const home = async(req, res, next) => {
  const userId = req.params.userId;
  const user = await getUser(userId);

  const featuredChallenge = await getChallenges('featured', userId);
  const myChallenges = await getChallenges('my-challenges', userId);
  const techChallenges = await getChallenges('tech', userId);
  const hobbyChallenges = await getChallenges('hobby', userId);

  const payload = {
    'picture': user.picture,
    'featuredChallenge': featuredChallenge[0],
    'myChallenges': myChallenges.slice(0, 2),
    'techChallenges': techChallenges.slice(0, 2),
    'hobbyChallenges': hobbyChallenges.slice(0, 2)
  }

  res.send(payload);
};

module.exports = home;
