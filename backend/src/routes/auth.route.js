const express = require("express");

module.exports = ({ userController }) => {
  const router = express.Router();
  router.post("/login", userController.login);
  router.post("/:type/register", userController.register);
  return router;
};
