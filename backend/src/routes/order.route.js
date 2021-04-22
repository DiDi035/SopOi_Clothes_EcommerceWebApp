const express = require("express");

module.exports = ({ orderController, authentication }) => {
  const router = express.Router();
  router.post("/new", authentication.verify, orderController.createOrder);
  router.post("/", authentication.verifyAdmin, orderController.getAllOrder);
  router.post(
    "/update/:status",
    authentication.verifyAdmin,
    orderController.updateOrder
  );
  return router;
};
