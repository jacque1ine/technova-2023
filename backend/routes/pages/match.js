const getUser = require('../../utils/getUser');

const profile = async(req, res, next) => {
  const user = await getUser(req.params.userId);
  const match = await getUser(req.query.matchid);
  res.send({
    'user': user,
    'match': match
  });
};

module.exports = profile;
