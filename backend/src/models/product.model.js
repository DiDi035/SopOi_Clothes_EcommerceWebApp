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
    type: String,
    default: new Date().toString(),
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
  },
  img: {
    type: String,
    default: "day la cai hinh",
  },
});

module.exports = mongoose.model("Product", productSchema);
