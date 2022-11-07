//crud
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url =
  "mongodb+srv://mehmet38:3526212125mt@cluster0.xw6gx36.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(url, (error, client) => {
  if (error) {
    console.log(error);
    return;
  }
  const db = client.db("test");
  db.collection("users")
    .insertOne({
      name: "Mehmet",
      age: 21,
    })
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
});
