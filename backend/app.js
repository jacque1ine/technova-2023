var express = require('express');
var cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

// Route imports
var home = require('./routes/home');

// Express config
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// MongoDB config
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

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

// Routes
app.get('/:userId', home);

// Server
app.listen(3001, () => {
  console.log('Server running on port 3001')
});

module.exports = app;
