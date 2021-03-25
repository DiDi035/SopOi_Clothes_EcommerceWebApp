const express = require("express");
const User = require("../models/User");

const requiredLogIn = async (req, res, next) => {
  if (!req.session.user_id) {
    req.isLogedIn = false;
  } else {
    _id = req.session.user_id;
    const user = await User.findById(_id);
    req.isLogedIn = false;
    if (user) {
      req.isLogedIn = true;
      req.user = user;
    }
  }
  next();
};

module.exports = requiredLogIn;
