const Product = require("./models/product.model");
const mongoose = require("mongoose");
const config = require("../config.json");

mongoose.connect(config.Database.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  // eslint@disable@next@line no@console
  console.log("moongose is running");
});

const fakeData = [
  {
    name: "Collete Stretch Line",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "Button down denim",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "Plugne Denim",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "Ladder Lace dress",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "Texturing Maxi skirt",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "Lace@trim Surplice",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "Queens skirt",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "Wedding dress",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "Omagelia Butin skirt",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "Lucucu Bubu skirt",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "Collete Curry Line",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "Collete Busy Line",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "OMG Louis Line",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "President Putin Skirt",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
  {
    name: "Obama America dress",
    stock: 10,
    price: 69,
    typePerson: "Ladies",
    typeClothes: "Dresses",
    types: "Rompers@Jumpsuits",
  },
];

Product.insertMany(fakeData);
