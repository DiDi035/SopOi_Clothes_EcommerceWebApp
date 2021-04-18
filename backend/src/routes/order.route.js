const express = require("express");

module.exports = ({ orderController, authentication }) => {
  const router = express.Router();
  router.post(
    "/product/:condition/",
    authentication.verify,
    productController.get
  );
  router.post(
    "/category",
    authentication.verify,
    productController.getAllCategories
  );
  return router;
};
