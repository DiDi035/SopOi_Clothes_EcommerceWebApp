class Product {
  constructor(id, name, stock, price, active, deleteAt, typeCustomer, img) {
    this.id = id;
    this.name = name;
    this.stock = stock;
    this.price = price;
    this.active = active;
    this.delateAt = deleteAt;
    this.typeCustomer = typeCustomer;
    this.img = img;
  }
}

module.exports = Product;
