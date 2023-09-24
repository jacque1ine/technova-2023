const getUser = require('../../utils/getUser');

const profile = async(req, res, next) => {
  const user = await getUser(req.params.userId);
  res.send(user);
};

module.exports = profile;
