const { ObjectId } = require('mongodb');
const { usersCol } = require('../db');

const getUser = async(userId) => {
  const user = await usersCol.findOne({'_id': new ObjectId(userId)});
  return user;
};

module.exports = getUser;
