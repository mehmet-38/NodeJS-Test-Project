const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://mehmet38:3526212125mt@cluster0.xw6gx36.mongodb.net/?retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true }
);

/*
add user crud example
const user1 = new User({
  name: "Gurkan",
  age: 21,
});
user1
  .save()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
*/
