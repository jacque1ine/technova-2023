const { ObjectId } = require('mongodb');
const { usersCol } = require('../db');
const getChallenges = require('../utils/getChallenges');

const home = async(req, res, next) => {
  const userId = req.params.userId;
  const user = await usersCol.findOne({'_id': new ObjectId(userId)});

  const featuredChallenge = await getChallenges({'featured': true});
  const myChallenges = await getChallenges({'users.joined': userId, 'featured': false});
  const techChallenges = await getChallenges({'type': 'tech', 'featured': false});
  const hobbyChallenges = await getChallenges({'type': 'hobby', 'featured': false});
  console.log(techChallenges);

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
