const express = require("express");

module.exports = ({ orderController, authentication }) => {
  const router = express.Router();
  router.post("/new", authentication.verify, orderController.createOrder);
  return router;
};
