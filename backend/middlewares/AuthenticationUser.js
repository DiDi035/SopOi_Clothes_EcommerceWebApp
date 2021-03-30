const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const AuthenticationUser = async (req, res, next) => {
  const { token } = req.body;
  if (token == null || token == undefined) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
  });
  next();
};

module.exports = requiredLogIn;
