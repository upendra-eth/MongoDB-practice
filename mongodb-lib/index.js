const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const database = "students";

async function getdata()
{
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("students");
  let response = await collection.find().toArray();
  console.log(response);
}

getdata();
