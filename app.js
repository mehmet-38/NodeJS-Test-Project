require("dotenv").config();
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const server = require("./server");
require("./utils/mongooseDB");

//require("./utils/mongooseDB");
app.use(bodyParser.json());
app.use(server);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
