const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
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
    default: "/images/defaultProduct.jpg",
  },
});

module.exports = mongoose.model("Product", productSchema);
