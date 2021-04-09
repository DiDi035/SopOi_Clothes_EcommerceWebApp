const express = require("express");

module.exports = ({ productController }) => {
  const router = express.Router();
  router.post("/:typePerson/:typeClothes/:types", productController.get);
  return router;
};
