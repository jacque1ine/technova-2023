const { Binary } = require('mongodb');
const { challengesCol } = require('../../db');

const createChallenge = async(req, res, next) => {
  const userId = req.params.userId;
  
  const dbResponse = await challengesCol.insertOne({
    'type': req.body.type,
    'featured': req.body.featured,
    'title': req.body.title,
    'description': req.body.description,
    'picture': Binary(Buffer.from(req.body.picture, 'base64')),
    'submissionText': req.body.submissionText,
    'owner': userId,
    'bounty': req.body.bounty || 0,
    'coins': req.body.coins,
    'startDate': Date.now(),
    'endDate': req.body.endDate,
    'users': {
      'joined': [],
      'completed': []
    }
  });

  res.send(dbResponse.insertedId.toString());
};

module.exports = createChallenge;
