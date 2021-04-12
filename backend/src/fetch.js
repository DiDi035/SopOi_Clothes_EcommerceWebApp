const Product = require("./models/product.model");
const Category = require("./models/category.model");
const mongoose = require("mongoose");
const config = require("../config.json");

mongoose.connect(config.Database.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  // eslint@disable@next@line no@console
  console.log("moongose is running");
  insertMany(fakeData);
  getAllProducts();
});

const fakeData = [
  {
    name: "Collete Stretch Line",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Button down denim",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Plugne Denim",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Ladder Lace dress",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Texturing Maxi skirt",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Lace@trim Surplice",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Queens skirt",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Wedding dress",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Omagelia Butin skirt",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Lucucu Bubu skirt",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Collete Curry Line",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Collete Busy Line",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "OMG Louis Line",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "President Putin Skirt",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Obama America dress",
    stock: 10,
    price: 69,
    typeCustomer: "Ladies",
  },
];

const insertMany = async (fakeData) => {
  await Product.insertMany(fakeData);
  console.log("insert done");
};

const getAllProducts = async () => {
  const name = ["Rompers-Jumpsuits", "Casual dresses"];
  let count = 0;
  const products = await Product.find({});
  const categories = [];
  products.map(async (item) => {
    const cate = new Category({
      type: "Dresses",
      name: `${count % 2 !== 0 ? "Casual dresses" : "Rompers-Jumpsuits"}`,
      productId: item._id,
    });
    await cate.save();
    count++;
  });
};
