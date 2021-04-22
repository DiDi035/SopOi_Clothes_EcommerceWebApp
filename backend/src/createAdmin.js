const mongoose = require("mongoose");
const config = require("../config.json");
const UserModel = require("./models/user.model");
const PasswordHasher = require("./utils/password-hasher");

mongoose.connect(config.Database.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  // eslint@disable@next@line no@console
  console.log("moongose is running");
  doSthm();
});
const doSthm = async () => {
  const passHasher = new PasswordHasher();
  const hashed = await passHasher.hash("domaybietlagi");
  const admin = new UserModel({
    name: "admin",
    email: "admin@admin.com",
    password: hashed,
    type: "seller",
  });

  await admin.save();
};
