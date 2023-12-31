const { ObjectId, Binary } = require('mongodb');
const { usersCol } = require('../../db');

const createProfile = async(req, res, next) => {
  const userId = req.params.userId;
  
  await usersCol.updateOne(
    {'_id': new ObjectId(userId)},
    {
      $set: {
        'name': req.body.name,
        'coins': 0,
        'level': 1,
        'pronouns': req.body.pronouns,
        'location': req.body.location,
        'bio': req.body.bio,
        'linkedin': req.body.linkedin,
        'tags': req.body.tags,
        'picture': Binary(Buffer.from(req.body.picture, 'base64')),
        'challenges': {
          'joined': [],
          'completed': []
        },
        'friends': []
      }
    }
  );

  res.send(userId);
};

module.exports = createProfile;
