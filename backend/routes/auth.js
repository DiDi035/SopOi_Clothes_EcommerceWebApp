const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
require("dotenv").config();

router.post("/:type/login", async (req, res) => {
  const { type } = req.params;
  const { email, password } = req.body;
  const { valid, foundUser } = await User.isAuthenticated(email, password);
  let accessToken = null;
  if (valid) {
    accessToken = jwt.sign(foundUser.toJSON(), process.env.ACCESS_TOKEN_SECRET);
  }
  res.send({ valid, accessToken, curUser: foundUser });
});

router.post("/:type/register", async (req, res) => {
  const { type } = req.params;
  const { name, password, email } = req.body;
  const validateEmail = await User.find({ email });
  const validateName = await User.find({ name });
  if (validateEmail.length > 0) {
    res.send({ valid: false, mess: "email" });
  } else if (validateName.length > 0) {
    res.send({ valid: false, mess: "name" });
  } else {
    let account = null;
    account = new User({
      name: name,
      email: email,
      password: await bcrypt.hash(password, 12),
      type: type,
    });
    await account.save();
    res.send({ valid: true, mess: "" });
  }
});

module.exports = router;
