const bcrypt = require("bcrypt");
const express = require("express");
const requireLogin = require("../middleware/RequiredLogin");

const router = express.Router();

router.post("/:type/login", async (req, res) => {
  const { type } = req.params;
  const { email, password } = req.body;
  const { valid, foundUser } = await User.isAuthenticated(email, password);
  if (valid) {
    req.session.user_id = foundUser._id;
    req.session.user_type = type;
  }
  res.json({ valid });
});

router.post("/register", async (req, res) => {
  const { name, password, email } = req.body;
  const user = new User({
    name: name,
    email: email,
    password: await bcrypt.hash(password, 12),
  });
  console.log(user);
  await user.save();
  res.end();
});
