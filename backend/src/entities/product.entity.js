class Product {
  constructor(
    id,
    name,
    stock,
    price,
    isOccupied,
    typePerson,
    typeClothes,
    type,
    img
  ) {
    this.id = id;
    this.name = name;
    this.stock = stock;
    this.price = price;
    this.isOccupied = isOccupied;
    this.typePerson = typePerson;
    this.typeClothes = typeClothes;
    this.type = type;
    this.img = img;
  }
}

module.exports = Product;
