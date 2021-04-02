const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    enum: ["customer", "seller"],
  },
  ava: {
    type: String,
    default: "day la cai hinh"
  },
  _id: {
    type: mongoose.ObjectId,
  },
});

module.exports = mongoose.model("User", userSchema);
