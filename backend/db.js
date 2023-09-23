const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Configure MongoDB
const username = encodeURIComponent(process.env.MONGO_USERNAME);
const password = encodeURIComponent(process.env.MONGO_PASSWORD);
const cluster = encodeURIComponent(process.env.MONGO_CLUSTER)
const mongoUri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority`;
const client = new MongoClient(mongoUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Connect to MongoDB
async function run() {
  try {
    await client.connect();
    await client.db('admin').command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');
  } catch (err) {
    console.log(err);
  }
}

// Get db collections
run().catch(console.dir);
const db = client.db('challengeHer');
const challengesCol = db.collection('challenges');
const usersCol = db.collection('users');

module.exports = { challengesCol, usersCol };
