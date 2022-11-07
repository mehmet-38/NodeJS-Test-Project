const express = require("express");
const User = require("../models/userModel");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/users", userController.addUser);

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      return res.status(400).send;
    }
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(400).send();
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(400).send();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
