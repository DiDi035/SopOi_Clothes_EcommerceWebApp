const express = require("express");

module.exports = ({ productController, authentication }) => {
  const router = express.Router();
  router.post("/product/:condition/", productController.getProducts);
  router.post("/category", productController.getAllCategories);
  router.post("/stock", productController.getStock);
  return router;
};
