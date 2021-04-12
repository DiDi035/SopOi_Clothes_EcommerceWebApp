const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  deleteAt: {
    type: Date,
  },
  typeCustomer: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    default: "day la cai hinh",
  },
});

module.exports = mongoose.model("Product", productSchema);
