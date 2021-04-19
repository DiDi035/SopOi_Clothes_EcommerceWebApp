const express = require("express");
const cors = require("cors");

module.exports = ({ userRouter, authRouter, productRouter, orderRouter }) => {
  const router = express.Router();
  router.use(express.static("public"));
  router.use(cors({ exposedHeaders: "auth-token" }));
  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));
  router.use("/auth", authRouter);
  router.use("/profile", userRouter);
  router.use("/", productRouter);
  router.use("/order", orderRouter);
  return router;
};
