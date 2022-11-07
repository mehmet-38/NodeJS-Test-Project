const express = require("express");
const app = express();
const routers = require("./routers");

app.get("/", (req, res) => {
  res.json("main router");
});

app.use(routers.userRouter);

app.use("/", (req, res, next) => {
  res.send("404");
});

module.exports = app;
