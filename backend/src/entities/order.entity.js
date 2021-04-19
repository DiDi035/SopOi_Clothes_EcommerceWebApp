class Order {
  constructor(id, name, userId, productId, color, size, quantity, price, date) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.productId = productId;
    this.color = color;
    this.size = size;
    this.quantity = quantity;
    this.price = price;
    this.date = date;
  }
}

module.exports = Order;
