const Product = require("./models/product.model");
const Category = require("./models/category.model");
const Filter = require("./models/filter.model");
const mongoose = require("mongoose");
const config = require("../config.json");

mongoose.connect(config.Database.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  // eslint@disable@next@line no@console
  console.log("moongose is running");
  insertProduct(fakeData);
  // "Casual dresses"
  insertCateAndFilter("Rompers-Jumpsuits", corlos, size, 15);
});

const corlos = [
  "rgba(255, 195, 113, 0.5)",
  "rgba(95, 109, 255, 0.5)",
  "rgba(255, 161, 95, 0.5)",
  "rgba(61, 61, 63, 0.5)",
  "rgba(237, 237, 237, 0.5)",
];

const size = ["S", "M", "L", "XL"];

const fakeData = [
  {
    name: "Collete Stretch Line",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Button down denim",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Plugne Denim",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Ladder Lace dress",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Texturing Maxi skirt",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Lace@trim Surplice",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Queens skirt",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Wedding dress",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Omagelia Butin skirt",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Lucucu Bubu skirt",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Collete Curry Line",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Collete Busy Line",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "OMG Louis Line",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "President Putin Skirt",
    price: 69,
    typeCustomer: "Ladies",
  },
  {
    name: "Obama America dress",
    price: 69,
    typeCustomer: "Ladies",
  },
];

const insertProduct = async (fakeData) => {
  await Product.insertMany(fakeData);
  console.log("insert done");
};

const insertCateAndFilter = async (typeName, colors, size, skip) => {
  const products = await Product.find({}).skip(skip).limit(15);
  products.map(async (item) => {
    const cate = new Category({
      type: "Dresses",
      name: typeName,
      productId: item._id,
    });
    await cate.save();
    for (let i = 0; i < colors.length; ++i) {
      for (let j = 0; j < size.length; ++j) {
        const filter = new Filter({
          color: corlos[i],
          size: size[j],
          stock: 5,
          productId: item._id,
        });
        await filter.save();
      }
    }
  });
};
