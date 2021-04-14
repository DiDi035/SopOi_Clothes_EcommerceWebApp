const express = require("express");

module.exports = ({ productController, authentication }) => {
  const router = express.Router();
  router.post("/product/:page", authentication.verify, productController.get);
  router.post(
    "/category",
    authentication.verify,
    productController.getAllCategories
  );
  return router;
};
