const User = require("../models/userModel");
const addUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addUser,
};
