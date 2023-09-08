const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://armel:root@cluster0.dak3h2h.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectToDatabase() {
  try {
    await client.connect();

    db = client.db("BDD_DOCKER");
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

function getDatabase() {
  return db;
}

module.exports = {
  connectToDatabase,
  getDatabase,
};
