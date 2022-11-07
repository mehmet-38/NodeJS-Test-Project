const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
