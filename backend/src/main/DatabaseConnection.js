const mongoose = require("mongoose");
const config = require("../../config.json");

console.log(config.Database.connectionString)

mongoose.connect(config.Database.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection.once("open", () => {
  // eslint-disable-next-line no-console
  console.log("moongose is running");
});
