const express = require("express");

module.exports = ({ productController, authentication }) => {
  const router = express.Router();
  router.post("/:typeCustomer", authentication.verify, productController.get);
  return router;
};
